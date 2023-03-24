
    export interface LinearGradient {
      x1: number | string;
      x2: number | string;
      y1: number | string;
      y2: number | string;
      linears: { offset: number | string; stopColor: string }[];
    }
    export interface SvgIconProps {
      name: svgNameTypes;
      style?: React.CSSProperties;
      linearGradient?: Partial<LinearGradient>;
      [index: string]: any;
    }
    export type svgNameTypes = "CancelOutlined" | "CloseOutlined" | "DeleteOutlined" | "DisableOutlined"