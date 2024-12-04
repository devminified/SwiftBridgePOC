import React from 'react';
import { requireNativeComponent, ViewStyle } from 'react-native';

interface SwiftViewProps {
  style?: ViewStyle;
  onEventTriggered?: (event: any) => void;
}

const SwiftViewComponent = requireNativeComponent<SwiftViewProps>('SwiftView');

export const SwiftView: React.FC<SwiftViewProps> = (props) => {
  return <SwiftViewComponent {...props} />;
};
