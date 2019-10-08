import Api from "./api_config";
export default {
  // **** POST **** //
  login: params => Api.post("/users/authenticate", params),
  signup: params => Api.post("/users/register", params),
  profile: params => Api.get("/profile/profile", params),

  verifyOtp: params => Api.post("/verify-user", "", { otp: params }),
  onBoardingComplete: params => Api.post("/onboarding/complete", params),
  newCategoryRequest: params => Api.post("/onboarding/suggestion", params),
  newToolsRequest: params => Api.post("/onboarding/new/tool", params),

  inviteSingleFriend: params => Api.post("/invite/friend", params),
  inviteFriends: params => Api.post("/invite/friends", params),
  reportUser: params => Api.post("/users/report", params),
  blockUser: params => Api.post("/users/block-unblock", params),
  updateEmailRequest: params => Api.post("/users/update/email/request", params),
  updateEmailVerifyOtp: params =>
    Api.post("/users/update/email/verify", "", { otp: params }),

  getHomePageData: params => Api.get("/home", params),
  createExpressHelp: params => Api.post("/express-help/new", params),
  createTopSkill: params => Api.post("/top-skill/new", params),
  createSuccessStory: params => Api.post("/success-story/new", params),
  validateExpress: params => Api.post("/express-help/validate", params),
  confirmTopSkill: params => Api.post("/top-skill/confirm", params),
  addToWatchlist: params => Api.post("/users/watch-list", params),
  sendTime: params => Api.post("/time/send", params),
  timeTransaction: params => Api.post("/transaction/details", params),
  rejectTime: params => Api.post("/time/request/reject", params),
  approveTime: params => Api.post("/time/request/approve", params),
  receiveTime: params => Api.post("/time/request", params),
  sendTimeByEmail: params => Api.post("/time/send/email", params),
  matchUser: params => Api.post("/match", params),

  forgotPasswordEmail: params => Api.post("/forgot-password/request", params),
  forgotPasswordVerify: params =>
    Api.post("/forgot-password/verify", "", { otp: params }),
  forgotPasswordChange: params => Api.post("/forgot-password/change", params),
  updatePasswordChange: params => Api.put("/users/update/password", params),
  resendVerificationEmail: params =>
    Api.post("/resend-verification-email", params),
  //**** GET ***/
  getSearchData: params =>
    Api.get(`/search/${params.type}/10/0/${params.keyword}`),
  getSearchSubcategory: params =>
    Api.get(`/search/sucategory/${params.type}/${params.value}`),
  getCategory: params => Api.get("/onboarding/data"),
  getRecentUsers: params => Api.get("/time/users/from-recent"),
  getUsersFromList: params => Api.get("/time/users/from-list"),
  getSignedUrl: params => Api.get("/get-signed-url", { fileExtension: params }),
  getUserProfile: params => Api.get("/users/profile", params),
  getMyExpress: () => Api.get("/express-helps/my"),
  getExpressDetails: params => Api.get(`/express-help/${params}`),
  getTopSkilsDetails: params => Api.get(`/top-skill/${params}`),
  getSuccessStoryDetails: params => Api.get(`/success-story/${params}`),
  getTopSkill: () => Api.get("/top-skills/my"),
  getSuccessStory: () => Api.get("/success-stories/my"),
  viewOtherProfile: params => Api.get(`/users/others-profile/${params}`),
  showWatchList: params => Api.get("/users/watch-list", params),
  // getUsersFromList: params => Api.get('/time/users/from-list'),
  getAllTransaction: params => Api.get("/transaction/my"),
  getAllTopSkills: params => Api.get("/home/top-skills/15/0"),
  getAllWishes: params => Api.get(`/home/zwops-for-wishes/15/${params}`),
  getAllDeals: params => Api.get(`/home/zwops-for-deals/15/${params}`),
  getAllExpressHelp: params => Api.get("/home/express-helps/15/0"),
  getAllSuccessStories: params => Api.get("/home/success-stories/15/0"),
  getAllWhatYouCanBorrow: params =>
    Api.get(`/home/what-you-can-barrow/15/${params}`),
  getChatList: params => Api.get("/chat/list/15/0"),
  getDirectExchange: params => Api.get(`/home/direct-exchange/15/${params}`),
  watchListSearch: params => Api.get(`/users/watch-list/search/15/0/${params}`),
  // **** PUT ****/
  editExpressHelp: params => Api.put("/express-help/update", params),
  editTopSkill: params => Api.put("/top-skill/update", params),
  editSuccessStory: params => Api.put("/success-story/update", params),
  saveImage: (url, params) => Api.put(url, params),
  updateNotification: params =>
    Api.put("/users/update/new-notification-status", params),
  updateLocation: params => Api.put("/users/update/location", params),
  updateProfile: params => Api.put("/users/profile", params),
  updateSetting: params => Api.put("/users/update/settings", params),
  updateUserProfile: params => Api.put("/users/update/profile", params),
  updatePersonalData: params => Api.put("/users/update/personal-data", params),
  updateEmail: params => Api.put("/users/update/email", params),

  updateExpressLike: params => Api.put("/express-help/like", params),
  updateTopLike: params => Api.put("/top-skill/like", params),
  updateSuccessLike: params => Api.put("/success-story/like", params),

  //**** DELETE */
  deleteMyExpress: params => Api.delete("/express-help/delete", params),
  deleteTopSkill: params => Api.delete("/top-skill/delete", params),
  deleteSuccessStory: params => Api.delete("/success-story/delete", params),
  deleteProfile: params => Api.delete("/users/delete-account", params),
  deleteChat: params => Api.delete("/chat", params),

  //*** COMMENTS */
  getExpressComments: params => Api.post("/express-help/comments", params),
  getTopSkillComments: params => Api.post("/top-skill/comments", params),
  getSuccessStoryComments: params =>
    Api.post("/success-story/comments", params),

  postExpressComments: params => Api.post("/express-help/comment", params),
  postTopSkillComments: params => Api.post("/top-skill/comment", params),
  postSuccessStoryComments: params =>
    Api.post("/success-story/comment", params),

  //**** NOTIFICATIONS */
  getNotification: params => Api.get("/notifications"),
  // postCommentNotification: params => Api.post('/notification/post/new-comment', params),
  newMessageNotification: params =>
    Api.post("/notification/new-message", params),
  postSharedNotification: params =>
    Api.post("/notification/post/shared", params),

  shareByEmail: params => Api.post("/notification/shareByEmail", params)
};
