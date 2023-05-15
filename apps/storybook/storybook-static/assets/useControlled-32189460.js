import {r as e} from './index-ebeaab24.js'
function i({controlled: t, default: s, name: c, state: f = 'value'}) {
  const {current: a} = e.useRef(t !== void 0),
    [u, n] = e.useState(s),
    o = a ? t : u,
    l = e.useCallback((r) => {
      a || n(r)
    }, [])
  return [o, l]
}
export {i as u}
//# sourceMappingURL=useControlled-32189460.js.map
