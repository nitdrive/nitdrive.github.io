/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["196.png","ab87e1562c4437cc85cca358cae844a9"],["512.png","78856c5a82945ce1be03616f1cfac8b1"],["README.md","22d0782049f69e9f5266dfff3a8d7d3b"],["fonts/common/common.eot","b909194982924ef5ebbb7cd696fd63ad"],["fonts/common/common.svg","9a3ccb58f22f2af28c55155ade27db14"],["fonts/common/common.ttf","0025d8e468b1cd36ce625f6383206b94"],["fonts/common/common.woff","d093b0f2b7d61db74c1ee3fd877290a4"],["fonts/common/common.woff2","c6f936a9e21f355f9021322061c947fd"],["fonts/ionicons.eot","2c2ae068be3b089e0a5b59abb1831550"],["fonts/ionicons.svg","621bd386841f74e0053cb8e67f8a0604"],["fonts/ionicons.ttf","24712f6c47821394fba7942fbb52c3b2"],["fonts/ionicons.woff","05acfdb568b3df49ad31355b19495d4a"],["images/btn_facebook.jpg","577878cda036766207563ca4c209d43c"],["images/caution.svg","4c0f29d94619691b04ae46f8bda2a9c5"],["images/caution2.svg","4bf0b265b26c08366ce43517d24a739a"],["images/dan-ding.png","f3ce3ef4cf13996f76b26a60d4ac8a82"],["images/dashboard/how-to-get.png","203b2f67300abdbf39d5b92c7176c63d"],["images/dashboard/how-to-maintain.png","bf28f5f91b8b2657bdc4776b889beb7c"],["images/dashboard/how-to-maintain2.png","6145226cc069038d08fec9f076c090fd"],["images/dashboard/how-to-use-manual.png","dfde6f59ad81b279561d468ae8ac7cd5"],["images/dashboard/how-to-use-power.png","a45f47f0c126db008889c5f54ddf307e"],["images/dashboard/how-to-use2.png","b29aa596b423c908ff32cc69cd6d5953"],["images/dashboard/share.png","81c7100a547228b9ce286a8a39a713ee"],["images/device.png","6145226cc069038d08fec9f076c090fd"],["images/fix.png","4ed5454dab19ca4298673f9bc3c89c87"],["images/fix2.png","26fed6d929f6a581a5732a050d4643cb"],["images/healthissues/elbow-tennis/tennis_elbow_up.jpg","46b04b68d8e8e231f058fc953e21c21a"],["images/healthissues/elbow-tennis/tennis_elbow_up_down.jpg","a662c26c859d11b13951a6cac0e85c7e"],["images/healthissues/elbow-ulnar/Ulnar Neuropathy.jpg","f839ae504c325615430292afb39f508f"],["images/healthissues/elbow-ulnar/ulnar_neuropathy.jpg","23403975a648cf9b6149a3776e3906a0"],["images/healthissues/hand-blister/blister_abrasion.jpg","5bdb1854dee63718255b70e7f522e8b6"],["images/healthissues/lower-limb/lower_limb.jpg","45cf302f4a7c0747a34fef734ad13837"],["images/healthissues/neck-back/illustration01.jpg","368c9cc4ef00356f8c56860720661cd0"],["images/healthissues/shoulder/rotator_cuff_injury.jpg","e0100f81e4e20b63b8f8eca02a173af7"],["images/healthissues/stage01.jpg","95cbe9b7235cbd1dbc5155cfedcca42b"],["images/healthissues/stage02.jpg","008c25463e7d0536b33971954f58067d"],["images/healthissues/stage03.jpg","20bc2bca5a8b3e33d4403e4a58581bb4"],["images/healthissues/stage04.jpg","e777541915f6ca24ad83e4f5967bf851"],["images/healthissues/wrist-carpal/carpal_tunnel_syndrome.jpg","e51b09382a17ede2c00150f23d5338a2"],["images/healthissues/wrist-carpal/hand.png","a7a057e2472d815530981a4164bc7d7e"],["images/how/wc-back.png","e343ef0396c4c97ec08cf0a7708499b7"],["images/how/wc-other.png","5a0be746f73bca47a031963c0f219ff8"],["images/how/wc-seat.png","38cef0ec28fbd507900590c037aa57b6"],["images/how/wc-wheel.png","d293b055eb7cdda80750d19d4b58863b"],["images/icon.png","39ed8ca86e2a161bf83ba091b13bc383"],["images/icons/about.png","a53ad234459dd6bb8ebec9e359293e04"],["images/icons/contact.png","f9d1460d2367848fb0819a2d871df8f4"],["images/icons/home.png","94c3bfbce648b17ba3451e7ab4088a1a"],["images/icons/logout.png","f17f7e6282d5c59c455c3b69377acfd1"],["images/icons/more.png","8a646b4446a1f1bfeb31a9fe1d2ea337"],["images/icons/profile.png","11848cffb63a73bd21c79e9264169a34"],["images/icons/setting.png","986671c36a477b8693cd461245ca2a7d"],["images/icons/todo.png","fbc4a3159407387c27523605ee18130b"],["images/iconsv2/back.svg","46e602c93c58770924ff797197587b07"],["images/iconsv2/calendar-blue.svg","9cf0d22764184b8e33b500d0edc775ab"],["images/iconsv2/calendar.svg","16097928e6a75f89d4a9f1d091d8e868"],["images/iconsv2/check.svg","379e9fe4e8c740c98149f36c335f911b"],["images/iconsv2/clipboard-check.svg","4ee5db200e20115f905626c9f561bf7c"],["images/iconsv2/clipboard-edit.svg","afe5c9a0c54473b8ed208c1e09381e94"],["images/iconsv2/contacts.svg","d3bedd52b5e91b9d5fd09c5ea5e89ac1"],["images/iconsv2/edit.svg","37644ddaa7b253f6ab2fb40f4fbb0402"],["images/iconsv2/forward.svg","5e24557a243daa628b104f5607e10a11"],["images/iconsv2/goto_icon.svg","2bae0ebea4d57378e70b6a1052e4e053"],["images/iconsv2/hand.svg","f464aa9fc8e20f7710a25ed4ec7f1cbb"],["images/iconsv2/health_issues.svg","e37d239d9d53dcedb06628092ec54403"],["images/iconsv2/home.svg","dc0c4613cd309c9e545645a2853f4ffb"],["images/iconsv2/info.svg","2feeb6c237db41e2bd86f53a30bf5a4a"],["images/iconsv2/logo.svg","e5e0dda02871bc4577bbd67d5389f802"],["images/iconsv2/more.svg","c14a286fbd0cc96dca6a5e5ada5f1d76"],["images/iconsv2/newuser.svg","2450c28c505fc39a30ffdd21e3e7fe7f"],["images/iconsv2/notnow.svg","5c96bbf11e1dd5a5b5e2a0b2f592803a"],["images/iconsv2/profile.svg","8625913d750aa56a7e673f734df478be"],["images/iconsv2/question.svg","0523921072507ac15033abee53c69f87"],["images/iconsv2/wrench.svg","fdbb5d1f37bb1d823c56578b9364eac9"],["images/ionic.png","251ebf03b1c7889cf36cbcbcce8f689e"],["images/maintenance/08_tire_pressure.jpg","de7534cf34d8e162814e104f8a258d73"],["images/maintenance/25_check_cushion.jpg","1efc97996398b9d6f9f93a72f474d40c"],["images/maintenance/28_air_cushion.jpg","77654d742df0705b2bc1889e3569392c"],["images/maintenance/29_gel_cushion.jpg","50cef7e527694a6a01a86ab8565bfd14"],["images/maintenance/30_foam_cushion.jpg","84b2be4cb324acde6b066c749aafc903"],["images/maintenance/33_tire_worn_out.gif","b81548cffe971d0d32bfebff7a6f395d"],["images/maintenance/38_spoke_tension.jpg","21403b0e3cba9b95661b39cd42538459"],["images/maintenance/39_spoke_nipple.jpg","2d42e245bb25a052ceb3e836bb2cc410"],["images/maintenance/42_wheel_alignment.jpg","d172bcbb53c92bd493c0c17a2f723dfc"],["images/maintenance/45_wheel_axle.jpg","9669e2781620c1dd026708fe2cea8f08"],["images/maintenance/47_wheel_lock.jpg","927a8c74faa32d259f93e771c24c5ce8"],["images/maintenance/50_handrim.jpg","f2539b470b011f270b5083ea212f6632"],["images/maintenance/53_casters.jpg","6c51ab803fe235b017d3ec0e171873fd"],["images/maintenance/54_missing_caster_cap.jpg","1b873b5096224742c269ef25505c3cc6"],["images/maintenance/55_caster_alignment.jpg","3a513331287221887e859bc71065a6ba"],["images/maintenance/58_latch.jpg","cab132b7bb96e508d73d7437756bafdd"],["images/maintenance/58_push_the_pin_in.jpg","68870972f5bedecbc64ab2bad9726bde"],["images/maintenance/59_anti_tip_diff_height.jpg","9fc6b8f66409cb1760c5f538561455f9"],["images/maintenance/60_anti_tip_caster.jpg","08e444662c71cff72786c3660afb0cb6"],["images/maintenance/61_footrest.jpg","bf3acb2206ec1d1730b5e91aef3e2d8c"],["images/maintenance/70_clothing_guard.jpg","c328eb857738285207d97f52b1ac43cc"],["images/maintenance/72_folding_mechanism.jpg","6170ef9855593b16103c827efa339c3e"],["images/maintenance/74_suspension_element.jpg","a0a594aacbe8731a343cecea15b24ee2"],["images/maintenance/Damper.png","099e7690616bc1844e8f8ecde3a8b86c"],["images/maintenance/Damper1.png","49d399445aa5dd60f92ce091cf96e06c"],["images/maintenance/Shroud.gif","cf9c6830bb41ca75de1a49ba142432e7"],["images/maintenance/Spring.png","283b31756d4473f09cbc7c7a9fd8e22c"],["images/maintenance/Spring1.png","604f4a57247092a9c0c5fe13c15c0b82"],["images/maintenance/axle_receiver.jpg","97e406286251c42e9a9f963d0e9d5d5c"],["images/maintenance/caster_caps.jpg","82bdc441ec1efbb9689c62dc78592ada"],["images/maintenance/caster_stem.jpg","3346c22884d12bb956e5f0552b641e67"],["images/maintenance/clamp.png","59da899acd732fdf2b97f87138af0df4"],["images/maintenance/clamp_zoon_in.png","4096ea4bdf2c225fd56ccb41c16f3cfd"],["images/maintenance/cushion_label.jpg","6b2fffdd4bc1918e6d1497bfbaeca085"],["images/maintenance/frame_tubes.jpg","4806db747cd2a92e247c148967889ead"],["images/maintenance/joystick_seal.png","9564b2cde74e04a4dc663db25b2c6c72"],["images/maintenance/lock_nuts.jpg","e37a987ac82bdd8cea642da7ec90d461"],["images/maintenance/menu/monthly.png","0c96c1e3d231c04eb96f14f77c40571f"],["images/maintenance/menu/quarterly.png","2557c4bf803635a3b157579aeb8f49e6"],["images/maintenance/menu/weekly.png","6874508edb5c47ac26ab073dfea88b57"],["images/maintenance/menu/yearly.png","7d8fed9953503999a16ccb3d469f653c"],["images/maintenance/sealed_bearing.jpg","1df3a6e2541c48c233c79f33c8147801"],["images/maintenance/suspension-damper.jpg","5c389c213c43e5c5e1206734dfb1bdf7"],["images/maintenance/suspension-spring.jpg","985be1ce478d0302edacb0af737b9f79"],["images/maintenance/upholstery_rivets.jpg","0b20f8668026594e3065bf384613037f"],["images/maintenance/wheel_axle.jpg","aa1ea42fbddb4ca6fe13fc07573333f0"],["images/maintenance/wheel_bearing.jpg","330c367ade3741cd568e7bd08d5d9584"],["images/maintenance/wheel_locks.jpg","ed472a6a0538a7a402addb1436678ff7"],["images/mic.svg","9047f85377b08992ffe584f755cb4a64"],["images/person.png","f3ce3ef4cf13996f76b26a60d4ac8a82"],["images/placeholder.png","7433d4dcba647f0e8dd4b0f086692fff"],["images/power/components/acc/acc_headrest.png","8656b202fa9f91786934bf209eb41d5a"],["images/power/components/acc/acc_hip.png","c6227788a4c3cda75a4737bc0cde415c"],["images/power/components/acc/acc_lap.png","fbe01a3e7aa9b485553957056ccdd024"],["images/power/components/acc/acc_trunk.gif","7fd68d2e6e0f547c5212dc7337f2a19b"],["images/power/components/acc/acc_trunk.png","2add523be23463c30de2323042afa64d"],["images/power/components/acc/headrest-v2.gif","38634d655e49f68b0fd3570d9caed8eb"],["images/power/components/armrest/armrest_flip.png","ff1e8334ddc8b4b79f4243aee018d9c2"],["images/power/components/armrest/armrest_remove.png","ebb36c11de2f76b7cf88a6e134eac08f"],["images/power/components/backrest/backrest_rigid.png","cf0d7deb40e7f55b629e725f22e75b3a"],["images/power/components/backrest/backrest_soft.gif","494d29c1d844a4c1ffc15cdfcddf3b2b"],["images/power/components/backrest/backrest_soft.png","5095ef16613b22e55acec986d65d85fb"],["images/power/components/bases/front.jpg","6b9f3951fd4d2d8fcf65b6bd1463d0b5"],["images/power/components/bases/mid.jpg","f80763e83a948ebaae7da0f4896f3972"],["images/power/components/bases/mid_wheel_drive_stuck_on_ramp.jpg","642f129a0603186a9f4688a0c86ae1d5"],["images/power/components/bases/rear.jpg","833de551430034396a27917ffcc9fc56"],["images/power/components/controller/Expandible_Controller.png","3404d0a83b367746c7f30b7395c7f82c"],["images/power/components/controller/Multiple_Controllers.png","72bef8b6788a075eafcbb9c6b9c17725"],["images/power/components/controller/alter_1.png","c2a9cc52a04b5d1cabc6596d465499a4"],["images/power/components/controller/alter_2.png","49b69bb5d52a1874f7310a20defda666"],["images/power/components/controller/alter_3.png","8299c30f49b4a5640eb0cf7f7de5b5e2"],["images/power/components/controller/alter_4.png","9819a3c572fcf167d5ee6d4cbc287528"],["images/power/components/controller/alter_5.png","121c440168dcf97c88261c782644f1a5"],["images/power/components/controller/alter_6.png","7e692cbef02152817bd5a830c7600bcc"],["images/power/components/controller/alternative-control-v2.gif","acab6936236f186c097a0ddcc5db2437"],["images/power/components/controller/controller-mount-retractable_v2.gif","68f0d8ded8bea84e72dc474bdcb4c880"],["images/power/components/controller/controller-mount-swing-away_v2.gif","197c519a08856c0cc700919c8efb009e"],["images/power/components/controller/controller.png","3c00ff1c5a2a9e3966fd80c4509d70f5"],["images/power/components/controller/controller_joy.png","3c00ff1c5a2a9e3966fd80c4509d70f5"],["images/power/components/controller/joystick-handles-slides_v2.gif","65e90a1d018a2750b1cd765ee82a3566"],["images/power/components/controller/non_expandable_controller-3.png","c6fac623f8a1aad07a8c18591c666395"],["images/power/components/controller/programmable.png","ad31a7c90760860da74598a326f25f31"],["images/power/components/controller/switch.png","027e8791fe6deada6d4627f3d2f06460"],["images/power/components/cushion/cushion_air.png","288176111c3e50f27a1683232422be25"],["images/power/components/cushion/cushion_cap.png","f0aae0150577f31bc879ffd60d12380e"],["images/power/components/cushion/cushion_foam.png","24a69f83fff28afdf2f7dadf2eb48d94"],["images/power/components/cushion/cushion_gel.png","14deb9419943205357dc350ea1373eec"],["images/power/components/footrest/footrest_center.png","63298f3bb1c67e521b6644047cd5f47c"],["images/power/components/footrest/footrest_power.png","cd3ebe4c3ba2debb9b7fbc64d98f5e0e"],["images/power/components/footrest/fr_swing.png","e37a98105a2f554cc916bd945a8de42e"],["images/power/components/psf/elevation.gif","7ffbf14ef47e4850ae70b9eef3f467b9"],["images/power/components/psf/recline.gif","83334b0e8e08aaac8afcf666eaa4b94a"],["images/power/components/psf/standing.gif","07208a93f15bfb6f7fb0331ea453d5dc"],["images/power/components/psf/tilt-alternative-600x400.gif","25d95f4677b018011c36804c01d774fb"],["images/power/components/psf/tilt-anterior.gif","08778242f23516e452ab071bbeabb31f"],["images/power/components/psf/tilt-posterior.gif","d67d90639cf6b5d613f172d4dbd0a489"],["images/power/components/sec/sec_docking.png","d64e4ff065a6135c5721a913071ba61d"],["images/power/components/sec/sec_four.png","6d9bd33f38722e0c0d5b92b89f28c07e"],["images/power/components/tire/tire_pneumatic.png","3a03d81bd10c85f58ce868919617c611"],["images/power/components/tire/tire_solid.png","0491248bb575a96b86dd2ad77d1a2f52"],["images/power/components/typeofcon/typesofcontrollermount.png","00c6443771739c26b22923214b3e8022"],["images/power/components/typeofcon/typesofcontrollermount2.png","4e3393e9548a95b1ffc2cdf349e30e7f"],["images/power/components/typeofhan/1.png","cb5adbea0828bdda72e26e99a8135f68"],["images/power/components/typeofhan/2.png","4fe1b7d3c74db1ebc49c4df1b3024d0c"],["images/power/components/typeofhan/3.png","0fc7c91e91661082416f499cf05fcebf"],["images/power/components/typeofhan/4.png","81f5dff780da731a55ecfa3d87393181"],["images/power/components/typeofhan/5.png","fdbf5bcea868d4bebef952df7fb6ac64"],["images/serdev/popup_help.png","312ae2f59b6446afa9a15342ff637014"],["images/survey-done.png","9ee00bcb3b8065a035e44d3b70e0493a"],["images/under_construction.jpeg","0e3b34c5b8b43f86101260091787165b"],["images/under_construction.png","0eb1f0124de7f544ed2c02eb13d7c235"],["images/use/camber.svg","53cd9d072eeb2b55c86565b1e9efa475"],["images/use/comfort.svg","01fc9b39909edc7c4e61746e898e76e2"],["images/use/components/_old_frame_ultralight.png","c08823c0fcfa65659ffc01225d04a281"],["images/use/components/_old_pa_clothing_guard.png","3c9e2cea87493641d2518f99ca741dc9"],["images/use/components/_old_pa_lap_strap.png","f4146688b3613dd95c111ffad9083280"],["images/use/components/_old_pa_trunk.png","9a035d3ad86cb299798c406dc1eab201"],["images/use/components/_old_wc_pneumatic.jpg","76babd9fa23c04e07dc6731176835656"],["images/use/components/_old_wc_solid.jpg","eb19b8a536a4937cc9638534959d699e"],["images/use/components/backrest_rigid.jpg","f7177c920bc284f7bd15605acbc82760"],["images/use/components/backrest_soft.gif","eb6930304525d461d94ba689bdc6144b"],["images/use/components/backrest_soft.jpg","2befa2ee5117f7e0099ed2cf4e205488"],["images/use/components/cushion_air.gif","c2a6106152d0868f7d0aa32bdeb52650"],["images/use/components/cushion_air_filled.jpg","0720cddafe564bf09407f5316f466b00"],["images/use/components/cushion_air_foam.png","ad952aea11cf97401fcb603844dd6360"],["images/use/components/cushion_contoured_foam.jpg","d6852b785bddfc84270480b4cffc9e79"],["images/use/components/cushion_custom.png","639525bfc19ace9fc74e42e8b3ad0866"],["images/use/components/cushion_foam.gif","a034ac6624ef1044c459a39d354b39d3"],["images/use/components/cushion_gel.jpg","56d7b0b690644b6c1071d8e8f6da00cd"],["images/use/components/cushion_gel.png","83c0a12299483d70aa604bfb69c10e4d"],["images/use/components/cushion_gel2.png","41a09332de9ed6dea10210a635ad094d"],["images/use/components/footrest_fixed.jpg","bac056a4dd9733bce459d4e5730b74ff"],["images/use/components/footrest_fixed.png","30f050ca2c81615804a3f96ef70ba258"],["images/use/components/footrest_swing.jpg","6dc28185faac54179ae828905d39a2a5"],["images/use/components/frame_folding.gif","12013c184753094116e7d0a8ae7e5676"],["images/use/components/frame_folding.png","d1b3e9a9569680f379056f69361163f2"],["images/use/components/frame_folding01.png","bce87db43867e8c0eb4c29f9c49331fb"],["images/use/components/frame_folding02.png","8b01599f0fbdb0eb4c89ccea47fa7391"],["images/use/components/frame_rigid.gif","9b91a131380e2f676aebafd3123af1d5"],["images/use/components/frame_rigid.png","0391eed53e281821654b090326c98b13"],["images/use/components/frame_ultralight.png","bb0df2c1c0707cc2bd899cb2f92c383f"],["images/use/components/handrims_conventional.gif","ee546b4392cc51fd9cb192808fff977f"],["images/use/components/handrims_conventional.png","1f40fe9f46eb08ad7ac9b3bffb796b4a"],["images/use/components/handrims_ergonomic.png","dfc07b3564f35effac079e788e21ee2f"],["images/use/components/handrims_ergonomic2.png","a84b9fe4b456bdf65d69ab005edfef57"],["images/use/components/handrims_gloves.png","23b5528eb63e3fb5e1579d9271f756b2"],["images/use/components/handrims_projection.png","d9aa9e8e60ce2afeaf87d44d8edc9443"],["images/use/components/handrims_projection2.png","d08eec3691bd372b858b204cbd47d2c9"],["images/use/components/pa_guards.png","0dbdbe6d0b56ba6dea17bec37290f79e"],["images/use/components/pa_legs.gif","19914d2a8947bdb5969cdae39d9a9fc2"],["images/use/components/pa_trunk.gif","7fd68d2e6e0f547c5212dc7337f2a19b"],["images/use/components/pao_papaw.png","390daaf5b6b1ee266c173fe4c7084397"],["images/use/components/pao_rio.png","648b173ab88957f12ef3f2a630f89e85"],["images/use/components/pao_smart.png","e0a30d083db6630c679a2f1848d4cf3c"],["images/use/components/wc_pneumatic.png","6c59b8479f91e665db846fba90990291"],["images/use/components/wc_solid.png","cf880d4483ffe777c34df13f396279a9"],["images/use/features.svg","aa1276472c243a43487fd89e7f967a11"],["images/use/features/page17_camber.gif","067de26be44d6bf2788f6b49828f757e"],["images/use/features/page5_w_text.svg","1d67f6e274e72e3c1b52b7828831dfae"],["images/use/features/page6_w_text.svg","da0c97b9714dd4c98a77e6021da59d76"],["images/use/features/page7_w_text.svg","a1b33edb5abfce2c84b81e853e3ff811"],["images/use/fit/Headrest.png","246f069e87abcc81b54467f6e2ba0539"],["images/use/fit/backrest_angle_large.png","7df5efdcea0216d8c0a8ae06d70c8445"],["images/use/fit/backrest_angle_small.png","ead94ad25c7bc313fafa3ea7c9eff4a3"],["images/use/fit/backrest_height_high.png","6515a2e5b593e3f1dd9d8e97a34ae9b1"],["images/use/fit/backrest_height_low.png","1227f492efb68dee79b2995661398ce0"],["images/use/fit/controller_mounting_location.png","7272c4a698f5daebac34a8966da68b6d"],["images/use/fit/cushion.jpg","28de88267db8787ae9f3638246b38dc7"],["images/use/fit/cushionheight_01.png","87de078d60970436cf1f0fd01753fb58"],["images/use/fit/cushionheight_02.png","c38c96d286adc635106832a2142c9dd4"],["images/use/fit/footrest_angle.png","3ed13f65430c15c5a98e023111728fd0"],["images/use/fit/footrest_angle_large.png","b90452943444156511379171b3f8a74e"],["images/use/fit/footrest_angle_regular.png","50e132ed27ae8ab57fc21112c91f1512"],["images/use/fit/footrest_length.png","39ed96f45b6ac5958566e792995ecd7c"],["images/use/fit/footrest_length_long.png","45810eab683de9d3d4f339679f3abe14"],["images/use/fit/footrest_length_regular.png","53f3dd9b0715dcf043f721582505add8"],["images/use/fit/footrest_length_short.png","f38ad8011f146cf082248a8d80117a29"],["images/use/fit/legposition_01.png","ad2a67fd93de1279750cff90fb4c6208"],["images/use/fit/legposition_02.png","9c0303b2efab4240a68976f24c4c2bf0"],["images/use/fit/nopic.png","d6f1d4054a1c828f08fc59314b1236d0"],["images/use/fit/seat_angle_flat.png","c972e717ed2c6c394cabf82411f0cca1"],["images/use/fit/seat_angle_seat_dump.png","d49731d791d721ed900aa411e379b925"],["images/use/fit/seat_depth.png","437c8ea9413e56e151276dd4de486f03"],["images/use/fit/seat_depth_Long.png","990ba5131ad2803b1725727f803cafdf"],["images/use/fit/seat_depth_regular.png","fc7184aeddedf501948ab4d36fc7fa3f"],["images/use/fit/seat_depth_short.png","2336fc1da3cd575dec5917b572ef334f"],["images/use/fit/seat_height_high.png","5785839886774b326c69d980e17e1a9c"],["images/use/fit/seat_height_low.png","c257ba17f5e4af9df117042131136967"],["images/use/fit/seat_height_regular.png","768e8c1e63ddce9c2d85f11f90e9251c"],["images/use/fit/seat_width.png","44f5e87aca5b0ffd85bddc48f9bf4d21"],["images/use/fit/seat_width_narrow.png","48c94713b9b48356a4069eab22ee1492"],["images/use/fit/seat_width_regular.png","e40a9e4f484570400be3e79e94e0f44c"],["images/use/fit/seat_width_wide.png","b1c7e2aeccfbb86682c3aac5607c581b"],["images/use/fit/seatangle_01.png","8cc647ccc68135cb253ba97c0f3eae82"],["images/use/fit/seatangle_02.png","ea8b88f0b97c15c5a913366bfec12c68"],["images/use/fit/seatback_01.png","2259a8ca1bb7d233271ff8f2585b6ef6"],["images/use/fit/seatback_02.png","f2e4a5a7282bc47a575b1a9909c7ad26"],["images/use/fit/seatback_03.png","903280c8f8bf90da0e61bd588e11477b"],["images/use/fit/seatheight_01.png","943a86eb904646b2ce13e7ed1059d4a3"],["images/use/fit/seatheight_02.png","257305fb1618ba99da64536613620bd9"],["images/use/fit/wheel_camber_no_camber.png","1cdf2729434a488f15045c2bfb7c6bf6"],["images/use/fit/wheel_camber_with_camber.png","7de7fbe1543eb70b0ea56be765a8f297"],["images/use/fit/wheel_position_axel_behind_shoulder.png","e7bc096ea3955180a03d35f758ec6647"],["images/use/fit/wheel_position_axel_infront_of_shoulder.png","054d4d2dab74a7c7394a6c90c2bf9436"],["images/use/fit/wheel_position_axel_inline_with_shoulder.png","1967bc18b8b82c8b24859e3c646d9d25"],["images/use/fit/wheelcamber_x01.png","2b581992a16243b64a88ce786dc760bc"],["images/use/fit/wheelcamber_x02.png","5615a93f957c4cffcfb8c7f4b7761cf0"],["images/use/fit/wheelcamber_x03.png","2d42dc362cabf738c5505c585c5eef49"],["images/use/fit/wheelcamber_x04.png","8cc51df63482096c3967cf420e200fbf"],["images/use/fit/wheelposition_x01.png","6e924d88b0474f1747dd5901000c6ba0"],["images/use/fit/wheelposition_x02.png","dc9a2afacea6dfadbb283f5d385f84b3"],["images/use/fit/wheelposition_x03.png","089abf7aebdd1505a2f3fb2b95b2f2b8"],["images/use/goal/comfort_chair.svg","84a3a94668576ad6d92e01c829a12c85"],["images/use/goal/maneuver.gif","7fd396ce10c345aa0813a030293c5bda"],["images/use/goal/menu_comfort.svg","540eee9df8c498629282c1e9ca2883d3"],["images/use/goal/menu_maneuver.svg","919448c259a3fd04f270205913d00286"],["images/use/goal/menu_pressure.svg","fc5565815d9205450605b6d3316176b1"],["images/use/goal/menu_propulsion.svg","11e69ee96335123b21a87488ca3fd53b"],["images/use/goal/page10_propulsion.gif","9fa96b83b410d4d9c13059a0b0470aac"],["images/use/goal/page11_maneuver.gif","7fd396ce10c345aa0813a030293c5bda"],["images/use/goal/page12_comfort.gif","494780ac85a816ce52c461c785ed6550"],["images/use/goal/page13_pressure.gif","609f3ff6b165837c0723e5341664e252"],["images/use/goal/pressure.svg","d1bdddb452b048d7795ab159cea8be8d"],["images/use/goal/propulsion.svg","bd7014487825b31b384c96b483b1a01c"],["images/use/maneuverability.svg","023b8bf5c271f1bdc7e0851de0636d77"],["images/use/popup_cue.png","4c6c28cae2b42ea4ca7cda5a856c7362"],["images/use/popup_cue1.png","28d565165c972c0e87094f9b0ceae659"],["images/use/popup_cue2.png","39623d92e1e372470fc0b3c5228a93ae"],["images/use/popup_how.png","2361a5a38ac643d792e7aa2d7c6892d2"],["images/use/pressure.svg","9704ca2f3a994537902acfb106144009"],["images/use/propulsion.svg","6827fefb212d041630e067d47ff4fcff"],["images/use/qa/health.png","cd47cb39fbe5b95c2fd648093eaf64dc"],["images/use/qa/health.svg","85eb82fad7839a9f738a7880d617ae9a"],["images/use/qa/posture.png","aef3dff32b36a75c8afab607fa62d321"],["images/use/qa/posture.svg","a3a931638fa6293acd39fb510394aed9"],["images/use/qa/push.png","e61e73012f9cabde5582ac90686f0604"],["images/use/qa/push.svg","b33e2ab0fa9bacf2d224c59da9a2c2b0"],["images/use/qa/safety.png","0db789136eda9b074a1451e81750cac7"],["images/use/qa/safety.svg","c0d4633ae334f0700e1e29f3ff0fb91e"],["images/use/seatangle1.svg","51a11d9f3c60ea67bc5f2ecfd0b4a72b"],["images/use/seatangle2.svg","f8081e680736648c8c6030744737d454"],["images/use/skills/method-draw-image.svg","d66e41fc31a10ba20be63091c41a2fa1"],["images/use/skills/skills_artwork.png","9a1bd6a905ddeb64180fc6a6764b622e"],["images/use/skills/skills_artwork.svg","7e422fc4637aee3ce7aed6c5f848de39"],["images/use/wchair.svg","1b09003013d2d25bcb9974f10a2d5331"],["images/use/wheelpos-behind.svg","5daf1642af6e0c2af9cbe1bd5caef917"],["images/use/wheelpos-infront.svg","6874cea3f5863861a54d4bbe75e2f374"],["images/use/wheelpos-inline.svg","e30ee64be9a8b618974abe9fd4b47165"],["images/video.png","62ec8e0280209cc5df796d53672a368f"],["images/wcmaster.svg","1194ffeb8fcd0b50847a45148b36e8b5"],["images/why.png","819d20f51ba1d7e35e1d4fdd539dad93"],["images/why2.png","3e92ddda5ef394672c2bcdfc48fc2bd4"],["images/why2.svg","b8f12ece2e2032162b32f7dd54ee9a2c"],["index.html","d4b3d5cbb01a9afc78e41bfc7b1d9e42"],["js/app-aa3ec0c3.js","aa3ec0c3604b69ff321e7daa12069355"],["json/glossary.json","9dbed3f8ca3ea794feae202fb128088b"],["json/qa-serdel.json","478cba577eefe425160757de172cea9c"],["json/qa-skill.json","17a1074ac465899ae010a4a0277c930b"],["json/test.json","57b18863afa8e113d74d8b1b2fad3aa1"],["manifest.json","d9dd2fe174fb4e6744817c95cb0971fb"],["register-sw.js","cbea7ea97c28376dea5e0e8338dc325f"],["styles/app-581ff92a.css","581ff92a4d5d5742541bf6886a54e61c"],["styles/lib-46bc0445.css","46bc0445a3de287ccc7bd419a646976e"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







