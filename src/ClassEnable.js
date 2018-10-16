import React from 'react'
import PropTypes from 'prop-types'
import hoistStatics from 'hoist-non-react-statics'
import {legalOutStyle} from './constants'
import {getStyle, filterInheritStyle} from './styleutil'

const EMPTY_ARRAY = []

function legalStyle(localStyle, legalSet) {
    let obj = {}
    for (let k in localStyle) {
        let prop = localStyle[k];
        if (legalSet.has(k))
            obj[k] = prop;
    }
    return obj;
}

/**
 * Give your component the ability of using className，
 * NOTE： you must provide 'displayName', otherwise you cannot use 'Tag Selector'. dispalyName could be
 * the second function parameters， static 'displayName' property, static 'name' property
 *
 * We suggest annotation way to use `ClassEnable`, like this:
 * ```javascript
 * @ClassEnable
 * class A extends React.Component{}
 * ```
 *
 * @param Comp
 * @param displayName
 * @returns {*}
 * @constructor
 */
export default function ClassEnable(Comp, displayName) {
    if (!Comp) return Comp

    const compDn = displayName || Comp.displayName || Comp.name
    class ClassEnableInner extends React.Component {
        static displayName = compDn

        constructor() {
            super(...arguments)

            // cache path/style info, avoid repeated computation
            this.cacheInfo = {
                pathCache: {},
                styleCache: {}
            }
            this.tag = compDn

            if (!compDn) {
                console.warn("ClassEnable component should has displayName!")
            }
        }

        static contextTypes = {
            getRelStyle: PropTypes.func,
            getRelPath: PropTypes.func,
            styleMap: PropTypes.object
        }

        static childContextTypes = {
            getRelStyle: PropTypes.func,
            getRelPath: PropTypes.func,
        }


        getChildContext() {
            return {
                getRelStyle: this.getRelStyle,
                getRelPath: this.getRelPath,
            }
        }

        /**
         * get component path.
         * when cached, return directly. otherwise compute new path
         * @param fatherPath
         * @param clz
         * @param tag
         * @returns {*}
         */
        getInnerPath = (fatherPath, clz, tag) => {
            const {fatherPath: oldFp, clz: oldClz, tag: oldTag, result} = this.cacheInfo.pathCache
            if (fatherPath === oldFp && clz === oldClz && tag === oldTag) {
                return result
            } else {
                const newResult = [...fatherPath, {
                    clz,
                    tag,
                }]
                this.cacheInfo.pathCache = {
                    fatherPath,
                    clz,
                    tag,
                    result: newResult
                }
                return newResult
            }
        }

        /**
         * get the component path
         * @returns {*}
         */
        getRelPath = () => {
            const getFatherRelPath = this.context.getRelPath

            let fatherPath
            if (getFatherRelPath) {
                fatherPath = getFatherRelPath()
            } else {
                fatherPath = EMPTY_ARRAY
            }

            const {className: clz} = this.props
            return this.getInnerPath(fatherPath, clz, this.tag)
        }

        /**
         * flatten array
         * @param arr
         * @param ans
         */
        flatten = (arr, ans = {}) => {
            if (!arr || !arr.length) return ans
            for (let k in arr) {
                if (Array.isArray(arr[k])) {
                    ans = this.flatten(arr[k], ans)
                } else {
                    ans = Object.assign({}, ans, arr[k])
                }
            }
            return ans
        }

        /**
         * get component style
         * when cached, return directly. otherwise compute new path
         * @param path
         * @param styles
         * @param id
         * @returns {*}
         */
        getInnerMyStyle = (path, styles, id) => {
            const {
                styles: oldStyles,
                id: oldId,
                path: oldPath,
                result,
            } = this.cacheInfo.styleCache

            if (path === oldPath
                && styles === oldStyles
                && id === oldId
            ) {
                return result
            } else {
                const newStyleN = getStyle(path, '', styles);
                this.cacheInfo.styleCache = {
                    styles,
                    id,
                    path,
                    result: newStyleN
                }

                return newStyleN
            }
        }

        /**
         * get component style
         * @returns {*}
         */
        getInnerRelStyle = () => {
            const getFatherRelStyle = this.context.getRelStyle
            let {id} = this.props
            let styles = this.context.styleMap
            const path = this.getRelPath()
            const myStyle = this.getInnerMyStyle(path, styles, id)
            let relStyle
            if (getFatherRelStyle) {
                let fatherRelStyle = getFatherRelStyle()
                fatherRelStyle = this.flatten([fatherRelStyle])
                relStyle = Object.assign(fatherRelStyle, myStyle, {})

            } else {
                relStyle = myStyle
            }

            return relStyle
        }

        getRelStyle = () => {
            const relStyle = this.getInnerRelStyle()

            return filterInheritStyle(relStyle)
        }


        render() {
            let styleN = this.getInnerRelStyle()

            const compLegalSet = legalOutStyle.get(compDn)
            if (compLegalSet) {
                styleN = legalStyle(styleN, legalOutStyle.get(compDn) || legalOutStyle.get('Text'))
            }

            return (
                <Comp {...this.props}
                      style={[styleN, this.props.style]}
                />
            )
        }
    }

    return hoistStatics(ClassEnableInner, Comp)
}