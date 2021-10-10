#import <FBSDKCoreKit/FBSDKCoreKit.h>

@import FacebookCore;

@interface SceneDelegate ()

@end

@implementation SceneDelegate

- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts
{
  UIOpenURLContext *context = URLContexts.allObjects.firstObject;
  [FBSDKApplicationDelegate.sharedInstance application:UIApplication.sharedApplication
                                               openURL:context.URL
                                     sourceApplication:context.options.sourceApplication
                                            annotation:context.options.annotation];
}