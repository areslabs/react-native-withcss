const textSupports = new Set(["display", "width", "height", "start", "end", "left", "top", "right", "bottom", "minWidth", "maxWidth", "minHeight", "maxHeight", "margin", "marginVertical", "marginHorizontal",
    "marginBottom", "marginLeft", "marginRight", "marginTop", "marginStart", "marginEnd", "padding", "paddingBottom", "paddingHorizontal", "paddingLeft", "paddingRight", "paddingTop", "paddingVertical",
    "paddingStart", "paddingEnd", "borderWidth", "borderTopWidth", "borderStartWidth", "borderEndWidth", "borderBottomWidth", "borderRightWidth", "borderLeftWidth",
    "position", "flexDirection", "flexWrap", "justifyContent", "alignItems", "alignSelf", "alignContent", "overflow", "flex", "flexGrow", "flexShrink", "flexBasis",
    "aspectRatio", "zIndex", "direction", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "transform", "transformMatrix", "decomposedMatrix", "scaleX", "scaleY",
    "rotation", "translateX", "translateY", "backfaceVisibility", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor",
    "borderStartColor", "borderEndColor", "borderRadius", "borderBottomRightRadius", "borderBottomLeftRadius", "borderBottomStartRadius", "borderBottomEndRadius", "borderStyle",
    "opacity", "elevation", "color", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontVariant", "textShadowColor", "textShadowOffset", "textShadowRadius", "letterSpacing",
    "lineHeight", "textAlign", "textAlignVertical", "textDecorationColor", "textDecorationLine", "textDecorationStyle", "includeFontPadding", "writingDirection"])


const viewSupports = new Set(["display", "width", "height", "start", "end", "left", "top", "right", "bottom", "minWidth", "maxWidth", "minHeight", "maxHeight", "margin", "marginVertical", "marginHorizontal",
    "marginBottom", "marginLeft", "marginRight", "marginTop", "marginStart", "marginEnd", "padding", "paddingBottom", "paddingHorizontal", "paddingLeft", "paddingRight", "paddingTop", "paddingVertical",
    "paddingStart", "paddingEnd", "borderWidth", "borderTopWidth", "borderStartWidth", "borderEndWidth", "borderBottomWidth", "borderRightWidth", "borderLeftWidth",
    "position", "flexDirection", "flexWrap", "justifyContent", "alignItems", "alignSelf", "alignContent", "overflow", "flex", "flexGrow", "flexShrink", "flexBasis",
    "aspectRatio", "zIndex", "direction", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "transform", "transformMatrix", "decomposedMatrix", "scaleX", "scaleY",
    "rotation", "translateX", "translateY", "backfaceVisibility", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor",
    "borderStartColor", "borderEndColor", "borderRadius", "borderBottomRightRadius", "borderBottomLeftRadius", "borderBottomStartRadius", "borderBottomEndRadius", "borderStyle",
    "opacity", "elevation"])


const scrollViewSupports = new Set(["display", "width", "height", "start", "end", "left", "top", "right", "bottom", "minWidth", "maxWidth", "minHeight", "maxHeight", "margin", "marginVertical", "marginHorizontal",
    "marginBottom", "marginLeft", "marginRight", "marginTop", "marginStart", "marginEnd", "padding", "paddingBottom", "paddingHorizontal", "paddingLeft", "paddingRight", "paddingTop", "paddingVertical",
    "paddingStart", "paddingEnd", "borderWidth", "borderTopWidth", "borderStartWidth", "borderEndWidth", "borderBottomWidth", "borderRightWidth", "borderLeftWidth",
    "position", "flexDirection", "flexWrap", "justifyContent", "alignItems", "alignSelf", "alignContent", "overflow", "flex", "flexGrow", "flexShrink", "flexBasis",
    "aspectRatio", "zIndex", "direction", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "transform", "transformMatrix", "decomposedMatrix", "scaleX", "scaleY",
    "rotation", "translateX", "translateY", "backfaceVisibility", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor",
    "borderStartColor", "borderEndColor", "borderRadius", "borderBottomRightRadius", "borderBottomLeftRadius", "borderBottomStartRadius", "borderBottomEndRadius", "borderStyle",
    "opacity", "elevation", "color"])

const imageSupports = new Set(["display", "width", "height", "start", "end", "left", "top", "right", "bottom", "minWidth", "maxWidth", "minHeight", "maxHeight", "margin", "marginVertical", "marginHorizontal",
    "marginBottom", "marginLeft", "marginRight", "marginTop", "marginStart", "marginEnd", "padding", "paddingBottom", "paddingHorizontal", "paddingLeft", "paddingRight", "paddingTop", "paddingVertical",
    "paddingStart", "paddingEnd", "borderWidth", "borderTopWidth", "borderStartWidth", "borderEndWidth", "borderBottomWidth", "borderRightWidth", "borderLeftWidth",
    "position", "flexDirection", "flexWrap", "justifyContent", "alignItems", "alignSelf", "alignContent", "overflow", "flex", "flexGrow", "flexShrink", "flexBasis",
    "aspectRatio", "zIndex", "direction", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "transform", "transformMatrix", "decomposedMatrix", "scaleX", "scaleY",
    "rotation", "translateX", "translateY", "backfaceVisibility", "backgroundColor", "borderColor", "borderRadius", "borderBottomRightRadius", "borderBottomLeftRadius", "borderBottomStartRadius", "borderBottomEndRadius",
    "opacity", 'overlyColor', 'tintColor', 'resizeMode'])


//TODO ??
export const legalOutStyle = new Map()
legalOutStyle.set('Text', textSupports)
legalOutStyle.set('View', viewSupports)
legalOutStyle.set('ScrollView', scrollViewSupports)
legalOutStyle.set('Image', imageSupports)
legalOutStyle.set('Button', viewSupports)
