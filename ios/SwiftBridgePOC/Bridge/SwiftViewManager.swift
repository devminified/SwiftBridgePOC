import SwiftUI

@objc(SwiftViewManager)
class SwiftViewManager: RCTViewManager {
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    override func view() -> UIView! {
        let hostingController = UIHostingController(rootView: SwiftView())
        return hostingController.view
    }
}
