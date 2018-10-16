import {filterInheritStyle, getStyle} from '../src/styleutil'

describe('filterInheritStyle testing', () => {
    it('single Object', () => {
        const rawStyle = {fontSize: 11, backgroundColor: 'green', alignItems: 'center'}
        expect(filterInheritStyle(rawStyle)).toEqual({fontSize: 11})
    })
    it('multi Object', () => {
        const rawStyle = [{fontSize: 11, backgroundColor: 'green', color: 'red'}, {alignItems: 'center'}]
        expect(filterInheritStyle(rawStyle)).toEqual({fontSize: 11, color: 'red'})
    })
    it('many Object', () => {
        const rawStyle = [{
            fontSize: 11,
            backgroundColor: 'green',
            color: 'red'
        }, {whiteSpace: 'wrap'}, {visibility: 'hidden'}, {alignItems: 'center'}]
        expect(filterInheritStyle(rawStyle)).toEqual({
            fontSize: 11,
            color: 'red',
            whiteSpace: 'wrap',
            visibility: 'hidden'
        })
    })
    it('deep structure,no override', () => {
        const rawStyle = [{
            fontSize: 11,
            backgroundColor: 'green',
        }, {alignItems: 'center'}, [{verticalAlign: 'center'}, [{color: 'green'}]]]
        expect(filterInheritStyle(rawStyle)).toEqual({fontSize: 11, color: 'green'})
    })
    it('deep structure,with override', () => {
        const rawStyle = [{
            fontSize: 11,
            backgroundColor: 'green',
            color: 'green'
        }, {alignItems: 'center'}, [{verticalAlign: 'center'}, [{color: 'red'}]]]
        expect(filterInheritStyle(rawStyle)).toEqual({fontSize: 11, color: 'red'})
    })
})

describe('filterInheritStyle testing', () => {
    it('single className', () => {
        const styleObj = {
            ".item": {
                "_#_": {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginLeft: 5,
                }
            }
        }
        const rightPath = [{clz: 'item', tag: 'view'}]
        const falsePath = [{clz: 'item2', tag: 'view'}]
        expect(getStyle(rightPath, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
        })
        expect(getStyle(falsePath, styleObj)).toEqual({})
    })

    it('single tagName', () => {
        const styleObj = {
            "view": {
                "_#_": {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginLeft: 5,
                }
            }
        }
        const rightPath = [{clz: 'item', tag: 'view'}]
        const falsePath = [{clz: 'item', tag: 'text'}]
        expect(getStyle(rightPath, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
        })
        expect(getStyle(falsePath, styleObj)).toEqual({})
    })


    it('pure className with descendant', () => {
        const styleObj = {
            ".info": {
                ".item": {
                    "_#_": {
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 5,
                    }
                }
            }
        }
        const fullpath = [{clz: 'item', tag: 'view'}, {clz: "info", tag: 'view'}]
        const partial_suf = [{clz: 'item', tag: 'view'}]
        const partial_pre = [{clz: "info", tag: 'view'}]
        expect(getStyle(fullpath, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
        })
        expect(getStyle(partial_pre, styleObj)).toEqual({})
        expect(getStyle(partial_suf, styleObj)).toEqual({})
    })

    it('pure tagName with descendant', () => {
        const styleObj = {
            "view": {
                "text": {
                    "_#_": {
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 5,
                    }
                }
            }
        }
        const fullpath = [{clz: 'item', tag: 'text'}, {clz: "info", tag: 'view'}]
        const partial_suf = [{clz: 'item', tag: 'view'}]
        const partial_pre = [{clz: "info", tag: 'view'}]
        const wrongpath = [{clz: 'item', tag: 'view'}, {clz: "info", tag: 'text'}]
        expect(getStyle(fullpath, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
        })
        expect(getStyle(partial_pre, styleObj)).toEqual({})
        expect(getStyle(partial_suf, styleObj)).toEqual({})
        expect(getStyle(wrongpath, styleObj)).toEqual({})
    })

    it('mix tagName and className in descendant case', () => {
        const styleObj = {
            ".a": {
                "text": {
                    "_#_": {
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 5,
                    }
                }
            }
        }
        const fullpath = [{clz: 'item', tag: 'text'}, {clz: "a", tag: 'view'}]
        const partial_suf = [{clz: 'a', tag: 'view'}]
        const partial_pre = [{clz: "item", tag: 'text'}]
        const wrongpath = [{clz: 'item', tag: 'view'}, {clz: "b", tag: 'view'}]
        expect(getStyle(fullpath, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
        })
        expect(getStyle(partial_pre, styleObj)).toEqual({})
        expect(getStyle(partial_suf, styleObj)).toEqual({})
        expect(getStyle(wrongpath, styleObj)).toEqual({})
    })

    it('pure className with multi rule', () => {
        const styleObj = {
            ".info": {
                ".item": {
                    "_#_": {
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 5,
                    }
                }
            },
            ".title": {
                ".pack": {
                    "_#_": {
                        color: 'red',
                        backgroundColor: 'green'
                    }
                }
            }
        }
        const fullpath_item = [{clz: 'item', tag: 'view'}, {clz: "info", tag: 'view'}]
        const fullpath_pack = [{clz: 'pack', tag: 'view'}, {clz: "title", tag: 'view'}]
        expect(getStyle(fullpath_item, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
        })
        expect(getStyle(fullpath_pack, styleObj)).toEqual({
            color: 'red',
            backgroundColor: 'green',
        })
    })

    it('pure tagName with multi rule', () => {
        const styleObj = {
            "view": {
                "text": {
                    "_#_": {
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 5,
                    }
                }
            },
            "text": {
                "text": {
                    "_#_": {
                        color: 'red',
                        backgroundColor: 'green'
                    }
                }
            }
        }
        const fullpath_view = [{clz: 'item', tag: 'text'}, {clz: "info", tag: 'view'}]
        const fullpath_text = [{clz: 'pack', tag: 'text'}, {clz: "title", tag: 'text'}]
        expect(getStyle(fullpath_view, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
        })
        expect(getStyle(fullpath_text, styleObj)).toEqual({
            color: 'red',
            backgroundColor: 'green',
        })
    })

    it('mix tagName and className with multi rule', () => {
        const styleObj = {
            "view": {
                ".item": {
                    "_#_": {
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 5,
                    }
                }
            },
            "text": {
                ".a": {
                    "text": {
                        "_#_": {
                            color: 'red',
                            backgroundColor: 'green'
                        }
                    }
                }
            }
        }
        const fullpath_a = [{clz: 'item', tag: 'text'}, {clz: "info", tag: 'view'}]
        const fullpath_b = [{clz: 'pack', tag: 'text'}, {clz: 'a', tag: 'text'}, {clz: "title", tag: 'text'}]
        expect(getStyle(fullpath_a, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
        })
        expect(getStyle(fullpath_b, styleObj)).toEqual({
            color: 'red',
            backgroundColor: 'green',
        })
    })

    it('multi match for one path', () => {
        const styleObj = {
            "view": {
                "_#_": {
                    marginRight: 10,
                },
                ".item": {
                    "_#_": {
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 5,
                    }
                }
            },
        }
        const fullpath_a = [{clz: 'item', tag: 'text'}, {clz: "info", tag: 'view'}]
        expect(getStyle(fullpath_a, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
            marginRight: 10
        })
    })

    it('descendant selector got higher priority than tagName selector', () => {
        const styleObj = {
            "view": {
                "_#_": {
                    marginLeft: 10,
                },
                ".item": {
                    "_#_": {
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 5,
                    }
                }
            },
        }
        const fullpath_a = [{clz: 'item', tag: 'text'}, {clz: "info", tag: 'view'}]
        expect(getStyle(fullpath_a, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
        })
    })

    it('descendant selector got higher priority than clzName selector', () => {
        const styleObj = {
            ".info": {
                "_#_": {
                    marginLeft: 10,
                },
                ".item": {
                    "_#_": {
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 5,
                    }
                }
            },
        }
        const fullpath_a = [{clz: 'item', tag: 'text'}, {clz: "info", tag: 'view'}]
        expect(getStyle(fullpath_a, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 5,
        })
    })

    it('clzName selector got higher priority than tagName selector,merge none conflict part', () => {
        const styleObj = {
            ".info": {
                "_#_": {
                    justifyContent: "space-between",
                    color: 'red',
                    marginLeft: 5
                }
            },
            "view": {
                "text": {
                    "_#_": {
                        flexDirection: "column",
                        color: "green",
                        marginLeft: 10,
                    }
                }
            },
        }
        const fullpath_a = [{clz: 'item', tag: 'text'}, {clz: "info", tag: 'view'}]
        expect(getStyle(fullpath_a, styleObj)).toEqual({
            flexDirection: 'column',
            justifyContent: 'space-between',
            color:'red',
            marginLeft: 5,
        })
    })

    it('descendant selector comparing with each other', () => {
        const styleObj = {
            ".info": {
                "text": {
                    "_#_": {
                        color: 'red',
                        marginLeft: 5
                    }
                }
            },
            "view": {
                "text": {
                    "_#_": {
                        flexDirection: "column",
                        color: "green",
                        marginLeft: 10,
                    }
                }
            },
        }
        const fullpath_a = [{clz: 'item', tag: 'text'}, {clz: "info", tag: 'view'}]
        expect(getStyle(fullpath_a, styleObj)).toEqual({
            flexDirection: 'column',
            color:'red',
            marginLeft: 5,
        })
    })
    it('descendant selector comparing with each other in one main chain', () => {
        const styleObj = {
            ".info": {
                ".item":{
                    "_#_": {
                        flexDirection: "column",
                        color: "green",
                        marginLeft: 10
                    }
                },
                "text": {
                    "_#_": {
                        color: 'red',
                        marginLeft: 5
                    }
                }
            }
        }
        const fullpath_a = [{clz: 'item', tag: 'text'}, {clz: "info", tag: 'view'}]
        expect(getStyle(fullpath_a, styleObj)).toEqual({
            flexDirection: 'column',
            color:'green',
            marginLeft: 10,
        })
    })
})