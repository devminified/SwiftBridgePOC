#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(SwiftViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(onEventTriggered, RCTDirectEventBlock)
@end
