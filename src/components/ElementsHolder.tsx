import React from 'react'

export interface ElementsHolderRef {
  patchElement: ReturnType<typeof usePatchElement>[1];
}

export default React.memo(
  React.forwardRef<ElementsHolderRef>((_props, ref) => {
    const [elements, patchElement] = usePatchElement()
    React.useImperativeHandle(ref, () => ({ patchElement }), [])
    return <>{elements}</>
  }),
)

const usePatchElement = (): [
  React.ReactElement[],
  (element: React.ReactElement) => () => void,
] => {
  const [elements, setElements] = React.useState<React.ReactElement[]>([])
  const patchElement = React.useCallback((element: React.ReactElement) => {
    setElements((originElements) => [...originElements, element])
    return () => {
      setElements((originElements) => originElements.filter((ele) => ele !== element))
    }
  }, [])

  return [elements, patchElement]
}
