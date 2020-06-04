import CRender from '../../core/crender.class'
import { Optional } from '../common'
import { GraphName } from '../graphs/index'
import { EaseCurve } from '@jiaminghi/transition/types/types/core/index'
import { RgbaValue } from '@jiaminghi/color/types/types'
import { StyleConfig } from './style'
export declare type HoverRect = [number, number, number, number]
export declare type GraphConfig<Shape = any> = {
  /**
   * @description Graph name
   */
  name: GraphName
  /**
   * @description Graph shape
   */
  shape: Shape
  /**
   * @description Graph style
   */
  style?: StyleConfig<string | RgbaValue>
  /**
   * @description Weather to render graph
   */
  visible?: boolean
  /**
   * @description Whether to enable drag
   */
  drag?: boolean
  /**
   * @description Whether to enable hover
   */
  hover?: boolean
  /**
   * @description Graph rendering index
   *  Give priority to index high graph in rendering
   */
  index?: number
  /**
   * @description Animation delay time(ms)
   */
  animationDelay?: number
  /**
   * @description Number of animation frames
   */
  animationFrame?: number
  /**
   * @description Animation dynamic curve (Supported by transition)
   * @link https://github.com/jiaming743/Transition
   */
  animationCurve?: string
  /**
   * @description Weather to pause graph animation
   */
  animationPause?: EaseCurve
  /**
   * @description Rectangular hover detection zone
   *  Use this method for hover detection first
   * @example hoverRect = [0, 0, 100, 100] // [Rect start x, y, Rect width, height]
   */
  hoverRect?: HoverRect
  /**
   * @description Mouse enter event handler
   */
  onMouseEnter?: Function
  /**
   * @description Mouse outer event handler
   */
  onMouseOuter?: Function
  /**
   * @description Mouse click event handler
   */
  onClick?: Function
  /**
   * @description Life cycle added
   */
  added?: Function
  /**
   * Life Cycle when graph before draw
   */
  beforeDraw?: (render: CRender) => any
  /**
   * Life Cycle when graph drawed
   */
  drawed?: (render: CRender) => any
  /**
   * Life Cycle when graph before move
   */
  beforeMove?: (e: MouseEvent) => any
  /**
   * @description Life Cycle when graph moved
   */
  moved?: (e: MouseEvent) => any
}
export declare enum Status {
  STATIC = 'STATIC',
  HOVER = 'HOVER',
  ACTIVE = 'ACTIVE',
  DRAG = 'DRAG',
}
export declare type Point = [number, number]
export declare type AnimationKey = 'shape' | 'style'
export declare type AnimationFrameStateItem<Shape> = Optional<Shape> | StyleConfig<RgbaValue>
export declare type AnimationQueueItem<Shape> = {
  key: AnimationKey
  frameState: AnimationFrameStateItem<Shape>[]
}
