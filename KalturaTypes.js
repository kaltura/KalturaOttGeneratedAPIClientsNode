// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platforms allow them to do with
// text.
//
// Copyright (C) 2006-2023  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================

module.exports.AdsPolicy = {
NO_ADS : 'NO_ADS',
KEEP_ADS : 'KEEP_ADS',
};

module.exports.AggregationCountOrderBy = {
NONE : 'NONE',
};

module.exports.AggregationType = {
COUNT : 'Count',
SUM : 'Sum',
AVG : 'Avg',
};

module.exports.AnnouncementOrderBy = {
NONE : 'NONE',
};

module.exports.AnnouncementRecipientsType = {
ALL : 'All',
LOGGEDIN : 'LoggedIn',
GUESTS : 'Guests',
OTHER : 'Other',
};

module.exports.AnnouncementStatus = {
NOTSENT : 'NotSent',
SENDING : 'Sending',
SENT : 'Sent',
ABORTED : 'Aborted',
};

module.exports.ApiAction = {
ADD : 'ADD',
};

module.exports.ApiParameterPermissionItemAction = {
READ : 'READ',
INSERT : 'INSERT',
UPDATE : 'UPDATE',
WRITE : 'WRITE',
ALL : 'ALL',
};

module.exports.ApiService = {
HOUSEHOLD_DEVICE : 'HOUSEHOLD_DEVICE',
};

module.exports.AppTokenHashType = {
SHA1 : 'SHA1',
SHA256 : 'SHA256',
SHA512 : 'SHA512',
MD5 : 'MD5',
};

module.exports.AssetCommentOrderBy = {
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.AssetFilePpvOrderBy = {
NONE : 'NONE',
};

module.exports.AssetHistoryOrderBy = {
NONE : 'NONE',
};

module.exports.AssetImagePerRatioOrderBy = {
NONE : 'NONE',
};

module.exports.AssetIndexStatus = {
OK : 'Ok',
DELETED : 'Deleted',
NOTUPDATED : 'NotUpdated',
};

module.exports.AssetInheritancePolicy = {
ENABLE : 'Enable',
DISABLE : 'Disable',
};

module.exports.AssetLifeCycleRuleActionType = {
ADD : 'ADD',
REMOVE : 'REMOVE',
};

module.exports.AssetLifeCycleRuleTransitionType = {
TAG : 'TAG',
BUSINESS_MODEL : 'BUSINESS_MODEL',
};

module.exports.AssetOrderBy = {
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
VIEWS_DESC : 'VIEWS_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
LIKES_DESC : 'LIKES_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.AssetOrderByStatistics = {
VIEWS_DESC : 'VIEWS_DESC',
};

module.exports.AssetOrderByType = {
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
LIKES_DESC : 'LIKES_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.AssetPersonalMarkupSearchOrderBy = {
NONE : 'NONE',
REQUEST_ORDER : 'REQUEST_ORDER',
};

module.exports.AssetReferenceType = {
MEDIA : 'media',
EPG_INTERNAL : 'epg_internal',
EPG_EXTERNAL : 'epg_external',
NPVR : 'npvr',
};

module.exports.AssetReminderOrderBy = {
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
VIEWS_DESC : 'VIEWS_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
LIKES_DESC : 'LIKES_DESC',
};

module.exports.AssetRuleOrderBy = {
NONE : 'NONE',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
};

module.exports.AssetRuleStatus = {
READY : 'READY',
IN_PROGRESS : 'IN_PROGRESS',
};

module.exports.AssetStructMetaOrderBy = {
NONE : 'NONE',
};

module.exports.AssetStructOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
SYSTEM_NAME_ASC : 'SYSTEM_NAME_ASC',
SYSTEM_NAME_DESC : 'SYSTEM_NAME_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.AssetType = {
MEDIA : 'media',
RECORDING : 'recording',
EPG : 'epg',
};

module.exports.AssetUserRuleOrderBy = {
NONE : 'NONE',
};

module.exports.BillingAction = {
UNKNOWN : 'unknown',
PURCHASE : 'purchase',
RENEW_PAYMENT : 'renew_payment',
RENEW_CANCELED_SUBSCRIPTION : 'renew_canceled_subscription',
CANCEL_SUBSCRIPTION_ORDER : 'cancel_subscription_order',
SUBSCRIPTION_DATE_CHANGED : 'subscription_date_changed',
PENDING : 'pending',
};

module.exports.BillingItemsType = {
UNKNOWN : 'unknown',
PPV : 'ppv',
SUBSCRIPTION : 'subscription',
PRE_PAID : 'pre_paid',
PRE_PAID_EXPIRED : 'pre_paid_expired',
COLLECTION : 'collection',
PROGRAM_ASSET_GROUP_OFFER : 'program_asset_group_offer',
};

module.exports.BillingPriceType = {
FULLPERIOD : 'FullPeriod',
PARTIALPERIOD : 'PartialPeriod',
};

module.exports.BookmarkActionType = {
HIT : 'HIT',
PLAY : 'PLAY',
STOP : 'STOP',
PAUSE : 'PAUSE',
FIRST_PLAY : 'FIRST_PLAY',
SWOOSH : 'SWOOSH',
FULL_SCREEN : 'FULL_SCREEN',
SEND_TO_FRIEND : 'SEND_TO_FRIEND',
LOAD : 'LOAD',
FULL_SCREEN_EXIT : 'FULL_SCREEN_EXIT',
FINISH : 'FINISH',
ERROR : 'ERROR',
BITRATE_CHANGE : 'BITRATE_CHANGE',
NONE : 'NONE',
};

module.exports.BookmarkOrderBy = {
POSITION_ASC : 'POSITION_ASC',
POSITION_DESC : 'POSITION_DESC',
};

module.exports.BooleanOperator = {
AND : 'And',
OR : 'Or',
};

module.exports.BulkUploadJobAction = {
UPSERT : 'Upsert',
DELETE : 'Delete',
};

module.exports.BulkUploadJobStatus = {
PENDING : 'Pending',
UPLOADED : 'Uploaded',
QUEUED : 'Queued',
PARSING : 'Parsing',
PROCESSING : 'Processing',
PROCESSED : 'Processed',
SUCCESS : 'Success',
PARTIAL : 'Partial',
FAILED : 'Failed',
FATAL : 'Fatal',
};

module.exports.BulkUploadOrderBy = {
NONE : 'NONE',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.BulkUploadResultStatus = {
ERROR : 'Error',
OK : 'Ok',
INPROGRESS : 'InProgress',
};

module.exports.BundleType = {
SUBSCRIPTION : 'subscription',
COLLECTION : 'collection',
PAGO : 'pago',
};

module.exports.CampaignOrderBy = {
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
END_DATE_DESC : 'END_DATE_DESC',
END_DATE_ASC : 'END_DATE_ASC',
};

module.exports.CategoryItemOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
NONE : 'NONE',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.CategoryVersionOrderBy = {
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
NONE : 'NONE',
};

module.exports.CategoryVersionState = {
DRAFT : 'DRAFT',
DEFAULT : 'DEFAULT',
RELEASED : 'RELEASED',
};

module.exports.ChannelEnrichment = {
CLIENTLOCATION : 'ClientLocation',
USERID : 'UserId',
HOUSEHOLDID : 'HouseholdId',
DEVICEID : 'DeviceId',
DEVICETYPE : 'DeviceType',
UTCOFFSET : 'UTCOffset',
LANGUAGE : 'Language',
DTTREGION : 'DTTRegion',
};

module.exports.ChannelFieldOrderByType = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
RELEVANCY_DESC : 'RELEVANCY_DESC',
ORDER_NUM : 'ORDER_NUM',
};

module.exports.ChannelOrderBy = {
ORDER_NUM : 'ORDER_NUM',
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
VIEWS_DESC : 'VIEWS_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
LIKES_DESC : 'LIKES_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.ChannelSlidingWindowOrderByType = {
LIKES_DESC : 'LIKES_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
VIEWS_DESC : 'VIEWS_DESC',
};

module.exports.ChannelsOrderBy = {
NONE : 'NONE',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.ChannelStruct = {
MANUAL : 'Manual',
DYNAMIC : 'Dynamic',
};

module.exports.ChannelType = {
INTERNAL : 'Internal',
EXTERNAL : 'External',
};

module.exports.ChronologicalRecordStartTime = {
NONE : 'NONE',
NOW : 'NOW',
EPG_START_TIME : 'EPG_START_TIME',
};

module.exports.CollectionOrderBy = {
NONE : 'NONE',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.CompensationType = {
PERCENTAGE : 'PERCENTAGE',
FIXED_AMOUNT : 'FIXED_AMOUNT',
};

module.exports.ConcurrencyLimitationType = {
SINGLE : 'Single',
GROUP : 'Group',
};

module.exports.ConditionOperator = {
EQUAL : 'Equal',
NOTEQUAL : 'NotEqual',
};

module.exports.ConfigurationGroupDeviceOrderBy = {
NONE : 'NONE',
};

module.exports.ConfigurationGroupTagOrderBy = {
NONE : 'NONE',
};

module.exports.ConfigurationsOrderBy = {
NONE : 'NONE',
};

module.exports.ContentAction = {
WATCH_LINEAR : 'watch_linear',
WATCH_VOD : 'watch_vod',
CATCHUP : 'catchup',
NPVR : 'npvr',
FAVORITE : 'favorite',
RECORDING : 'recording',
SOCIAL_ACTION : 'social_action',
};

module.exports.ContentActionConditionLengthType = {
MINUTES : 'minutes',
PERCENTAGE : 'percentage',
};

module.exports.ContextType = {
NONE : 'none',
RECORDING : 'recording',
};

module.exports.CountryOrderBy = {
NAME_ASC : 'NAME_ASC',
};

module.exports.CouponGroupType = {
COUPON : 'COUPON',
GIFT_CARD : 'GIFT_CARD',
};

module.exports.CouponStatus = {
VALID : 'VALID',
NOT_EXISTS : 'NOT_EXISTS',
ALREADY_USED : 'ALREADY_USED',
EXPIRED : 'EXPIRED',
INACTIVE : 'INACTIVE',
};

module.exports.CurrencyOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
CODE_ASC : 'CODE_ASC',
CODE_DESC : 'CODE_DESC',
};

module.exports.DeleteMediaPolicy = {
DISABLE : 'Disable',
DELETE : 'Delete',
};

module.exports.DeviceBrandOrderBy = {
ID_ASC : 'ID_ASC',
ID_DESC : 'ID_DESC',
};

module.exports.DeviceBrandType = {
SYSTEM : 'System',
CUSTOM : 'Custom',
};

module.exports.DeviceFamilyOrderBy = {
ID_ASC : 'ID_ASC',
ID_DESC : 'ID_DESC',
};

module.exports.DeviceFamilyType = {
SYSTEM : 'System',
CUSTOM : 'Custom',
};

module.exports.DeviceReferenceDataOrderBy = {
NONE : 'NONE',
};

module.exports.DeviceStatus = {
PENDING : 'PENDING',
ACTIVATED : 'ACTIVATED',
NOT_ACTIVATED : 'NOT_ACTIVATED',
};

module.exports.DowngradePolicy = {
LIFO : 'LIFO',
FIFO : 'FIFO',
ACTIVE_DATE : 'ACTIVE_DATE',
};

module.exports.DrmSchemeName = {
PLAYREADY_CENC : 'PLAYREADY_CENC',
WIDEVINE_CENC : 'WIDEVINE_CENC',
FAIRPLAY : 'FAIRPLAY',
WIDEVINE : 'WIDEVINE',
PLAYREADY : 'PLAYREADY',
CUSTOM_DRM : 'CUSTOM_DRM',
};

module.exports.DurationUnit = {
MINUTES : 'Minutes',
HOURS : 'Hours',
DAYS : 'Days',
MONTHS : 'Months',
YEARS : 'Years',
};

module.exports.DynamicListOrderBy = {
NONE : 'NONE',
};

module.exports.EncryptionType = {
AES256 : 'AES256',
};

module.exports.EngagementOrderBy = {
NONE : 'NONE',
};

module.exports.EngagementType = {
CHURN : 'Churn',
};

module.exports.EntitlementOrderBy = {
PURCHASE_DATE_ASC : 'PURCHASE_DATE_ASC',
PURCHASE_DATE_DESC : 'PURCHASE_DATE_DESC',
};

module.exports.EntityAttribute = {
MEDIA_FILE_LABELS : 'MEDIA_FILE_LABELS',
};

module.exports.EntityReferenceBy = {
USER : 'user',
HOUSEHOLD : 'household',
};

module.exports.EpgOrderBy = {
};

module.exports.EventNotificationOrderBy = {
NONE : 'NONE',
};

module.exports.EventNotificationStatus = {
SENT : 'SENT',
FAILED : 'FAILED',
SUCCESS : 'SUCCESS',
FAILED_TO_SEND : 'FAILED_TO_SEND',
};

module.exports.EvictionPolicyType = {
FIFO : 'FIFO',
LIFO : 'LIFO',
};

module.exports.ExportDataType = {
VOD : 'vod',
EPG : 'epg',
USERS : 'users',
};

module.exports.ExportTaskOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.ExportType = {
FULL : 'full',
INCREMENTAL : 'incremental',
};

module.exports.ExternalChannelProfileOrderBy = {
NONE : 'NONE',
};

module.exports.ExternalRecordingResponseProfileOrderBy = {
NONE : 'NONE',
};

module.exports.FavoriteOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.FollowTvSeriesOrderBy = {
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
};

module.exports.GenerateMetadataStatus = {
PROCESSING : 'Processing',
PARTIALSUCCESS : 'PartialSuccess',
SUCCESSPENDINGASSETS : 'SuccessPendingAssets',
SUCCESS : 'Success',
FAILED : 'Failed',
};

module.exports.GroupByField = {
MEDIA_TYPE_ID : 'media_type_id',
SUPPRESSED : 'suppressed',
CRID : 'crid',
LINEAR_MEDIA_ID : 'linear_media_id',
NAME : 'name',
};

module.exports.GroupByOrder = {
DEFAULTORDER : 'defaultOrder',
COUNT_ASC : 'count_asc',
COUNT_DESC : 'count_desc',
VALUE_ASC : 'value_asc',
VALUE_DESC : 'value_desc',
};

module.exports.GroupingOption = {
OMIT : 'Omit',
INCLUDE : 'Include',
};

module.exports.HouseholdCouponOrderBy = {
NONE : 'NONE',
};

module.exports.HouseholdDeviceOrderBy = {
NONE : 'NONE',
CREATED_DATE_ASC : 'CREATED_DATE_ASC',
CREATED_DATE_DESC : 'CREATED_DATE_DESC',
};

module.exports.HouseholdFrequencyType = {
DEVICES : 'devices',
USERS : 'users',
};

module.exports.HouseholdOrderBy = {
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.HouseholdPaymentGatewaySelectedBy = {
NONE : 'none',
ACCOUNT : 'account',
HOUSEHOLD : 'household',
};

module.exports.HouseholdRestriction = {
NOT_RESTRICTED : 'not_restricted',
USER_MASTER_RESTRICTED : 'user_master_restricted',
DEVICE_MASTER_RESTRICTED : 'device_master_restricted',
DEVICE_USER_MASTER_RESTRICTED : 'device_user_master_restricted',
};

module.exports.HouseholdSegmentOrderBy = {
NONE : 'NONE',
};

module.exports.HouseholdState = {
OK : 'ok',
CREATED_WITHOUT_NPVR_ACCOUNT : 'created_without_npvr_account',
SUSPENDED : 'suspended',
NO_USERS_IN_HOUSEHOLD : 'no_users_in_household',
PENDING : 'pending',
};

module.exports.HouseholdSuspensionState = {
NOT_SUSPENDED : 'NOT_SUSPENDED',
SUSPENDED : 'SUSPENDED',
};

module.exports.HouseholdUserOrderBy = {
NONE : 'NONE',
};

module.exports.HouseholdUserStatus = {
OK : 'OK',
PENDING : 'PENDING',
};

module.exports.ImageObjectType = {
MEDIA_ASSET : 'MEDIA_ASSET',
PROGRAM_ASSET : 'PROGRAM_ASSET',
CHANNEL : 'CHANNEL',
CATEGORY : 'CATEGORY',
PARTNER : 'PARTNER',
IMAGE_TYPE : 'IMAGE_TYPE',
PROGRAM_GROUP : 'PROGRAM_GROUP',
};

module.exports.ImageOrderBy = {
NONE : 'NONE',
};

module.exports.ImageStatus = {
PENDING : 'PENDING',
READY : 'READY',
};

module.exports.ImageTypeOrderBy = {
NONE : 'NONE',
};

module.exports.InboxMessageOrderBy = {
NONE : 'NONE',
};

module.exports.InboxMessageStatus = {
UNREAD : 'Unread',
READ : 'Read',
DELETED : 'Deleted',
};

module.exports.InboxMessageType = {
SYSTEMANNOUNCEMENT : 'SystemAnnouncement',
FOLLOWED : 'Followed',
ENGAGEMENT : 'Engagement',
INTEREST : 'Interest',
CAMPAIGN : 'Campaign',
};

module.exports.IngestEpgProgramResultOrderBy = {
NONE : 'NONE',
EXTERNAL_PROGRAM_ID_DESC : 'EXTERNAL_PROGRAM_ID_DESC',
EXTERNAL_PROGRAM_ID_ASC : 'EXTERNAL_PROGRAM_ID_ASC',
LINEAR_CHANNEL_ID_DESC : 'LINEAR_CHANNEL_ID_DESC',
LINEAR_CHANNEL_ID_ASC : 'LINEAR_CHANNEL_ID_ASC',
INDEX_IN_FILE_DESC : 'INDEX_IN_FILE_DESC',
INDEX_IN_FILE_ASC : 'INDEX_IN_FILE_ASC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
SEVERITY_DESC : 'SEVERITY_DESC',
SEVERITY_ASC : 'SEVERITY_ASC',
};

module.exports.IngestEpgProgramStatus = {
FAILURE : 'FAILURE',
WARNING : 'WARNING',
SUCCESS : 'SUCCESS',
};

module.exports.IngestProfileAutofillPolicy = {
REJECT : 'REJECT',
AUTOFILL : 'AUTOFILL',
KEEP_HOLES : 'KEEP_HOLES',
};

module.exports.IngestProfileOverlapPolicy = {
REJECT : 'REJECT',
CUT_SOURCE : 'CUT_SOURCE',
CUT_TARGET : 'CUT_TARGET',
};

module.exports.IngestStatus = {
TOTAL_FAILURE : 'TOTAL_FAILURE',
PARTIAL_FAILURE : 'PARTIAL_FAILURE',
WARNING : 'WARNING',
IN_PROGRESS : 'IN_PROGRESS',
SUCCESS : 'SUCCESS',
};

module.exports.IotOrderBy = {
NONE : 'NONE',
};

module.exports.IotProfileOrderBy = {
NONE : 'NONE',
};

module.exports.LabelOrderBy = {
NONE : 'NONE',
};

module.exports.LanguageOrderBy = {
SYSTEM_NAME_ASC : 'SYSTEM_NAME_ASC',
SYSTEM_NAME_DESC : 'SYSTEM_NAME_DESC',
CODE_ASC : 'CODE_ASC',
CODE_DESC : 'CODE_DESC',
};

module.exports.LinearChannelType = {
UNKNOWN : 'UNKNOWN',
DTT : 'DTT',
OTT : 'OTT',
DTT_AND_OTT : 'DTT_AND_OTT',
VRM_EXPORT : 'VRM_EXPORT',
};

module.exports.LineupRegionalChannelOrderBy = {
LCN_ASC : 'LCN_ASC',
LCN_DESC : 'LCN_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
};

module.exports.ListGroupsRepresentativesOrderBy = {
NONE : 'None',
};

module.exports.ManualCollectionAssetType = {
MEDIA : 'media',
EPG : 'epg',
};

module.exports.MathemticalOperatorType = {
COUNT : 'count',
SUM : 'sum',
AVG : 'avg',
};

module.exports.MediaFileDynamicDataOrderBy = {
NONE : 'NONE',
};

module.exports.MediaFileOrderBy = {
NONE : 'NONE',
};

module.exports.MediaFileStreamerType = {
APPLE_HTTP : 'APPLE_HTTP',
MPEG_DASH : 'MPEG_DASH',
URL : 'URL',
SMOOTH_STREAMING : 'SMOOTH_STREAMING',
MULTICAST : 'MULTICAST',
NONE : 'NONE',
};

module.exports.MediaFileTypeQuality = {
ADAPTIVE : 'ADAPTIVE',
SD : 'SD',
HD_720 : 'HD_720',
HD_1080 : 'HD_1080',
UHD_4K : 'UHD_4K',
};

module.exports.MessageTemplateType = {
SERIES : 'Series',
REMINDER : 'Reminder',
CHURN : 'Churn',
SERIESREMINDER : 'SeriesReminder',
INTERESTVOD : 'InterestVod',
INTERESTEPG : 'InterestEPG',
};

module.exports.MetaDataType = {
STRING : 'STRING',
MULTILINGUAL_STRING : 'MULTILINGUAL_STRING',
NUMBER : 'NUMBER',
BOOLEAN : 'BOOLEAN',
DATE : 'DATE',
RELEATED_ENTITY : 'RELEATED_ENTITY',
};

module.exports.MetaOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
SYSTEM_NAME_ASC : 'SYSTEM_NAME_ASC',
SYSTEM_NAME_DESC : 'SYSTEM_NAME_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.MetaTagOrderBy = {
META_ASC : 'META_ASC',
META_DESC : 'META_DESC',
};

module.exports.MonetizationType = {
PPV : 'ppv',
SUBSCRIPTION : 'subscription',
BOXSET : 'boxset',
ANY : 'any',
PPV_LIVE : 'ppv_live',
};

module.exports.NotificationType = {
ANNOUNCEMENT : 'announcement',
SYSTEM : 'system',
REMINDER : 'Reminder',
SERIES_REMINDER : 'series_reminder',
};

module.exports.NotWatchedReturnStrategy = {
RETURN_NO_NEXT_EPISODE : 'RETURN_NO_NEXT_EPISODE',
RETURN_FIRST_EPISODE : 'RETURN_FIRST_EPISODE',
};

module.exports.ObjectState = {
INACTIVE : 'INACTIVE',
ACTIVE : 'ACTIVE',
ARCHIVE : 'ARCHIVE',
};

module.exports.ObjectVirtualAssetInfoType = {
SUBSCRIPTION : 'Subscription',
SEGMENT : 'Segment',
CATEGORY : 'Category',
TVOD : 'Tvod',
BOXSET : 'Boxset',
PAGO : 'PAGO',
};

module.exports.OTTUserOrderBy = {
NONE : 'NONE',
};

module.exports.ParentalRuleOrderBy = {
PARTNER_SORT_VALUE : 'PARTNER_SORT_VALUE',
};

module.exports.ParentalRuleType = {
ALL : 'ALL',
MOVIES : 'MOVIES',
TV_SERIES : 'TV_SERIES',
};

module.exports.PartnerConfigurationOrderBy = {
NONE : 'NONE',
};

module.exports.PartnerConfigurationType = {
DEFAULTPAYMENTGATEWAY : 'DefaultPaymentGateway',
ENABLEPAYMENTGATEWAYSELECTION : 'EnablePaymentGatewaySelection',
OSSADAPTER : 'OSSAdapter',
CONCURRENCY : 'Concurrency',
GENERAL : 'General',
OBJECTVIRTUALASSET : 'ObjectVirtualAsset',
COMMERCE : 'Commerce',
PLAYBACK : 'Playback',
PAYMENT : 'Payment',
CATALOG : 'Catalog',
SECURITY : 'Security',
OPC : 'Opc',
BASE : 'Base',
CUSTOMFIELDS : 'CustomFields',
DEFAULTPARENTALSETTINGS : 'DefaultParentalSettings',
CLOUDUPLOADSETTINGS : 'CloudUploadSettings',
};

module.exports.PasswordPolicyOrderBy = {
NONE : 'NONE',
};

module.exports.PaymentMethodProfileOrderBy = {
NONE : 'NONE',
};

module.exports.PaymentMethodType = {
UNKNOWN : 'unknown',
CREDIT_CARD : 'credit_card',
SMS : 'sms',
PAY_PAL : 'pay_pal',
DEBIT_CARD : 'debit_card',
IDEAL : 'ideal',
INCASO : 'incaso',
GIFT : 'gift',
VISA : 'visa',
MASTER_CARD : 'master_card',
IN_APP : 'in_app',
M1 : 'm1',
CHANGE_SUBSCRIPTION : 'change_subscription',
OFFLINE : 'offline',
};

module.exports.PermissionItemOrderBy = {
NONE : 'NONE',
};

module.exports.PermissionOrderBy = {
NONE : 'NONE',
};

module.exports.PermissionType = {
NORMAL : 'NORMAL',
GROUP : 'GROUP',
SPECIAL_FEATURE : 'SPECIAL_FEATURE',
};

module.exports.PersonalAssetSelectionOrderBy = {
ASSET_SELECTION_DATE_DESC : 'ASSET_SELECTION_DATE_DESC',
};

module.exports.PersonalFeedOrderBy = {
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
VIEWS_DESC : 'VIEWS_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
};

module.exports.PersonalListOrderBy = {
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
};

module.exports.PinType = {
PURCHASE : 'purchase',
PARENTAL : 'parental',
};

module.exports.Platform = {
ANDROID : 'Android',
IOS : 'iOS',
WINDOWSPHONE : 'WindowsPhone',
BLACKBERRY : 'Blackberry',
STB : 'STB',
CTV : 'CTV',
OTHER : 'Other',
};

module.exports.PlaybackContextType = {
TRAILER : 'TRAILER',
CATCHUP : 'CATCHUP',
START_OVER : 'START_OVER',
PLAYBACK : 'PLAYBACK',
DOWNLOAD : 'DOWNLOAD',
};

module.exports.PlaybackProfileOrderBy = {
NAME_ASC : 'NAME_ASC',
};

module.exports.PositionOwner = {
HOUSEHOLD : 'household',
USER : 'user',
};

module.exports.PpvOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.PreviewModuleOrderBy = {
NONE : 'NONE',
};

module.exports.PriceDetailsOrderBy = {
NAME_ASC : 'NAME_ASC',
};

module.exports.PricePlanOrderBy = {
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.ProductPriceOrderBy = {
PRODUCT_ID_ASC : 'PRODUCT_ID_ASC',
PRODUCT_ID_DESC : 'PRODUCT_ID_DESC',
};

module.exports.ProgramAssetGroupOfferOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.ProtectionPolicy = {
EXTENDINGRECORDINGLIFETIME : 'ExtendingRecordingLifetime',
LIMITEDBYRECORDINGLIFETIME : 'LimitedByRecordingLifetime',
};

module.exports.PurchaseSettingsType = {
BLOCK : 'block',
ASK : 'ask',
ALLOW : 'allow',
};

module.exports.PurchaseStatus = {
PPV_PURCHASED : 'ppv_purchased',
FREE : 'free',
FOR_PURCHASE_SUBSCRIPTION_ONLY : 'for_purchase_subscription_only',
SUBSCRIPTION_PURCHASED : 'subscription_purchased',
FOR_PURCHASE : 'for_purchase',
SUBSCRIPTION_PURCHASED_WRONG_CURRENCY : 'subscription_purchased_wrong_currency',
PRE_PAID_PURCHASED : 'pre_paid_purchased',
GEO_COMMERCE_BLOCKED : 'geo_commerce_blocked',
ENTITLED_TO_PREVIEW_MODULE : 'entitled_to_preview_module',
FIRST_DEVICE_LIMITATION : 'first_device_limitation',
COLLECTION_PURCHASED : 'collection_purchased',
USER_SUSPENDED : 'user_suspended',
NOT_FOR_PURCHASE : 'not_for_purchase',
INVALID_CURRENCY : 'invalid_currency',
CURRENCY_NOT_DEFINED_ON_PRICE_CODE : 'currency_not_defined_on_price_code',
PENDING_ENTITLEMENT : 'pending_entitlement',
PROGRAM_ASSET_GROUP_OFFER_PURCHASED : 'program_asset_group_offer_purchased',
};

module.exports.QuotaOveragePolicy = {
STOPATQUOTA : 'StopAtQuota',
FIFOAUTODELETE : 'FIFOAutoDelete',
};

module.exports.RecordingContextOrderBy = {
NONE : 'NONE',
};

module.exports.RecordingOrderBy = {
TITLE_ASC : 'TITLE_ASC',
TITLE_DESC : 'TITLE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
START_DATE_DESC : 'START_DATE_DESC',
};

module.exports.RecordingStatus = {
SCHEDULED : 'SCHEDULED',
RECORDING : 'RECORDING',
RECORDED : 'RECORDED',
CANCELED : 'CANCELED',
FAILED : 'FAILED',
DELETED : 'DELETED',
};

module.exports.RecordingType = {
SINGLE : 'SINGLE',
SEASON : 'SEASON',
SERIES : 'SERIES',
ORIGINALBROADCAST : 'OriginalBroadcast',
};

module.exports.RegionOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.RelatedEntityType = {
CHANNEL : 'CHANNEL',
EXTERNAL_CHANNEL : 'EXTERNAL_CHANNEL',
MEDIA : 'MEDIA',
PROGRAM : 'PROGRAM',
};

module.exports.ReminderType = {
ASSET : 'ASSET',
SERIES : 'SERIES',
};

module.exports.ReportOrderBy = {
NONE : 'NONE',
};

module.exports.ResponseType = {
JSON : 1,
XML : 2,
JSONP : 9,
ASSET_XML : 30,
EXCEL : 31,
};

module.exports.RollingDevicePolicy = {
NONE : 'NONE',
LIFO : 'LIFO',
FIFO : 'FIFO',
ACTIVE_DEVICE_ASCENDING : 'ACTIVE_DEVICE_ASCENDING',
};

module.exports.RuleActionType = {
BLOCK : 'BLOCK',
START_DATE_OFFSET : 'START_DATE_OFFSET',
END_DATE_OFFSET : 'END_DATE_OFFSET',
USER_BLOCK : 'USER_BLOCK',
ALLOW_PLAYBACK : 'ALLOW_PLAYBACK',
BLOCK_PLAYBACK : 'BLOCK_PLAYBACK',
APPLY_DISCOUNT_MODULE : 'APPLY_DISCOUNT_MODULE',
APPLY_PLAYBACK_ADAPTER : 'APPLY_PLAYBACK_ADAPTER',
FILTER : 'FILTER',
ASSET_LIFE_CYCLE_TRANSITION : 'ASSET_LIFE_CYCLE_TRANSITION',
APPLY_FREE_PLAYBACK : 'APPLY_FREE_PLAYBACK',
FILTERASSETBYKSQL : 'FilterAssetByKsql',
FILTERFILEBYQUALITYINDISCOVERY : 'FilterFileByQualityInDiscovery',
FILTERFILEBYQUALITYINPLAYBACK : 'FilterFileByQualityInPlayback',
FILTERFILEBYFILETYPEIDFORASSETTYPEINDISCOVERY : 'FilterFileByFileTypeIdForAssetTypeInDiscovery',
FILTERFILEBYFILETYPEIDFORASSETTYPEINPLAYBACK : 'FilterFileByFileTypeIdForAssetTypeInPlayback',
FILTERFILEBYFILETYPEIDINDISCOVERY : 'FilterFileByFileTypeIdInDiscovery',
FILTERFILEBYFILETYPEIDINPLAYBACK : 'FilterFileByFileTypeIdInPlayback',
FILTERFILEBYAUDIOCODECINDISCOVERY : 'FilterFileByAudioCodecInDiscovery',
FILTERFILEBYAUDIOCODECINPLAYBACK : 'FilterFileByAudioCodecInPlayback',
FILTERFILEBYVIDEOCODECINDISCOVERY : 'FilterFileByVideoCodecInDiscovery',
FILTERFILEBYVIDEOCODECINPLAYBACK : 'FilterFileByVideoCodecInPlayback',
FILTERFILEBYSTREAMERTYPEINDISCOVERY : 'FilterFileByStreamerTypeInDiscovery',
FILTERFILEBYSTREAMERTYPEINPLAYBACK : 'FilterFileByStreamerTypeInPlayback',
FILTERFILEBYLABELINDISCOVERY : 'FilterFileByLabelInDiscovery',
FILTERFILEBYLABELINPLAYBACK : 'FilterFileByLabelInPlayback',
FILTERFILEBYDYNAMICDATAINDISCOVERY : 'FilterFileByDynamicDataInDiscovery',
FILTERFILEBYDYNAMICDATAINPLAYBACK : 'FilterFileByDynamicDataInPlayback',
};

module.exports.RuleConditionType = {
ASSET : 'ASSET',
COUNTRY : 'COUNTRY',
CONCURRENCY : 'CONCURRENCY',
IP_RANGE : 'IP_RANGE',
BUSINESS_MODULE : 'BUSINESS_MODULE',
SEGMENTS : 'SEGMENTS',
DATE : 'DATE',
OR : 'OR',
HEADER : 'HEADER',
USER_SUBSCRIPTION : 'USER_SUBSCRIPTION',
ASSET_SUBSCRIPTION : 'ASSET_SUBSCRIPTION',
USER_ROLE : 'USER_ROLE',
DEVICE_BRAND : 'DEVICE_BRAND',
DEVICE_FAMILY : 'DEVICE_FAMILY',
DEVICE_MANUFACTURER : 'DEVICE_MANUFACTURER',
DEVICE_MODEL : 'DEVICE_MODEL',
DEVICE_UDID_DYNAMIC_LIST : 'DEVICE_UDID_DYNAMIC_LIST',
DYNAMIC_KEYS : 'DYNAMIC_KEYS',
USER_SESSION_PROFILE : 'USER_SESSION_PROFILE',
DEVICE_DYNAMIC_DATA : 'DEVICE_DYNAMIC_DATA',
IP_V6_RANGE : 'IP_V6_RANGE',
ASSET_SHOP : 'ASSET_SHOP',
CHANNEL : 'CHANNEL',
FILE_TYPE : 'FILE_TYPE',
};

module.exports.RuleLevel = {
INVALID : 'invalid',
USER : 'user',
HOUSEHOLD : 'household',
ACCOUNT : 'account',
};

module.exports.RuleType = {
PARENTAL : 'parental',
GEO : 'geo',
USER_TYPE : 'user_type',
DEVICE : 'device',
ASSETUSER : 'assetUser',
NETWORK : 'network',
};

module.exports.ScheduledRecordingAssetType = {
SINGLE : 'single',
SERIES : 'series',
ALL : 'all',
};

module.exports.SearchHistoryOrderBy = {
NONE : 'NONE',
};

module.exports.SearchPriorityCriteriaType = {
KSQL : 'KSql',
};

module.exports.SearchPriorityGroupOrderBy = {
PRIORITY_DESC : 'PRIORITY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
};

module.exports.SegmentationTypeOrderBy = {
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
EXECUTE_DATE_DESC : 'EXECUTE_DATE_DESC',
EXECUTE_DATE_ASC : 'EXECUTE_DATE_ASC',
AFFECTED_USERS_DESC : 'AFFECTED_USERS_DESC',
AFFECTED_USERS_ASC : 'AFFECTED_USERS_ASC',
AFFECTED_HOUSEHOLDS_DESC : 'AFFECTED_HOUSEHOLDS_DESC',
AFFECTED_HOUSEHOLDS_ASC : 'AFFECTED_HOUSEHOLDS_ASC',
};

module.exports.SeriesRecordingOrderBy = {
START_DATE_ASC : 'START_DATE_ASC',
START_DATE_DESC : 'START_DATE_DESC',
ID_ASC : 'ID_ASC',
ID_DESC : 'ID_DESC',
SERIES_ID_ASC : 'SERIES_ID_ASC',
SERIES_ID_DESC : 'SERIES_ID_DESC',
};

module.exports.SeriesReminderOrderBy = {
NONE : 'NONE',
};

module.exports.SkipOperators = {
EQUAL : 'Equal',
UNEQUAL : 'UnEqual',
LESSTHAN : 'LessThan',
GREATERTHAN : 'GreaterThan',
};

module.exports.SkipOptions = {
NO : 'No',
PREVIOUS : 'Previous',
ANY : 'Any',
};

module.exports.SmsAdapterProfileOrderBy = {
NONE : 'NONE',
};

module.exports.SocialActionOrderBy = {
NONE : 'NONE',
};

module.exports.SocialActionPrivacy = {
ALLOW : 'ALLOW',
DONT_ALLOW : 'DONT_ALLOW',
};

module.exports.SocialActionType = {
LIKE : 'LIKE',
WATCH : 'WATCH',
RATE : 'RATE',
SHARE : 'SHARE',
};

module.exports.SocialCommentOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.SocialFriendActivityOrderBy = {
NONE : 'NONE',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.SocialNetwork = {
FACEBOOK : 'facebook',
};

module.exports.SocialPlatform = {
IN_APP : 'IN_APP',
FACEBOOK : 'FACEBOOK',
TWITTER : 'TWITTER',
};

module.exports.SocialPrivacy = {
UNKNOWN : 'UNKNOWN',
EVERYONE : 'EVERYONE',
ALL_FRIENDS : 'ALL_FRIENDS',
FRIENDS_OF_FRIENDS : 'FRIENDS_OF_FRIENDS',
SELF : 'SELF',
CUSTOM : 'CUSTOM',
};

module.exports.SocialStatus = {
ERROR : 'error',
OK : 'ok',
USER_DOES_NOT_EXIST : 'user_does_not_exist',
NO_USER_SOCIAL_SETTINGS_FOUND : 'no_user_social_settings_found',
ASSET_ALREADY_LIKED : 'asset_already_liked',
NOT_ALLOWED : 'not_allowed',
INVALID_PARAMETERS : 'invalid_parameters',
NO_FACEBOOK_ACTION : 'no_facebook_action',
ASSET_ALREADY_RATED : 'asset_already_rated',
ASSET_DOSE_NOT_EXISTS : 'asset_dose_not_exists',
INVALID_PLATFORM_REQUEST : 'invalid_platform_request',
INVALID_ACCESS_TOKEN : 'invalid_access_token',
};

module.exports.StreamingDeviceOrderBy = {
NONE : 'NONE',
};

module.exports.StreamType = {
CATCHUP : 'catchup',
START_OVER : 'start_over',
TRICK_PLAY : 'trick_play',
};

module.exports.SubscriptionDependencyType = {
NOTAPPLICABLE : 'NOTAPPLICABLE',
BASE : 'BASE',
ADDON : 'ADDON',
};

module.exports.SubscriptionOrderBy = {
START_DATE_ASC : 'START_DATE_ASC',
START_DATE_DESC : 'START_DATE_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
};

module.exports.SubscriptionSetOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
};

module.exports.SubscriptionSetType = {
SWITCH : 'SWITCH',
DEPENDENCY : 'DEPENDENCY',
};

module.exports.SubscriptionTriggerType = {
START_DATE : 'START_DATE',
END_DATE : 'END_DATE',
};

module.exports.SubtitlesType = {
TEXT : 'Text',
SRT : 'SRT',
WEBVTT : 'WebVTT',
};

module.exports.SuspensionProfileInheritanceType = {
ALWAYS : 'ALWAYS',
NEVER : 'NEVER',
DEFAULT : 'DEFAULT',
};

module.exports.TagOrderBy = {
NONE : 'NONE',
};

module.exports.TimeShiftedTvState = {
INHERITED : 'INHERITED',
ENABLED : 'ENABLED',
DISABLED : 'DISABLED',
};

module.exports.TokenDeliveryMethod = {
EMAIL : 'Email',
SSO : 'Sso',
};

module.exports.TopicAutomaticIssueNotification = {
INHERIT : 'Inherit',
YES : 'Yes',
NO : 'No',
};

module.exports.TopicNotificationMessageOrderBy = {
NONE : 'NONE',
};

module.exports.TopicNotificationOrderBy = {
NONE : 'NONE',
};

module.exports.TopicOrderBy = {
NONE : 'NONE',
};

module.exports.TransactionAdapterStatus = {
OK : 'OK',
PENDING : 'PENDING',
FAILED : 'FAILED',
};

module.exports.TransactionHistoryOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.TransactionType = {
PPV : 'ppv',
SUBSCRIPTION : 'subscription',
COLLECTION : 'collection',
PROGRAMASSETGROUPOFFER : 'programAssetGroupOffer',
};

module.exports.TvmRuleOrderBy = {
NONE : 'NONE',
};

module.exports.TvmRuleType = {
GEO : 'Geo',
DEVICE : 'Device',
};

module.exports.UnmatchedItemsPolicy = {
OMIT : 'OMIT',
GROUP : 'GROUP',
INCLUDE_AND_MERGE : 'INCLUDE_AND_MERGE',
};

module.exports.UploadTokenStatus = {
PENDING : 'PENDING',
FULL_UPLOAD : 'FULL_UPLOAD',
CLOSED : 'CLOSED',
};

module.exports.UrlType = {
PLAYMANIFEST : 'PLAYMANIFEST',
DIRECT : 'DIRECT',
};

module.exports.UserAssetRuleOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
};

module.exports.UserAssetsListItemType = {
ALL : 'all',
MEDIA : 'media',
};

module.exports.UserAssetsListType = {
ALL : 'all',
WATCH : 'watch',
PURCHASE : 'purchase',
LIBRARY : 'library',
};

module.exports.UserLogOrderBy = {
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.UserRoleOrderBy = {
NONE : 'NONE',
};

module.exports.UserRoleProfile = {
USER : 'USER',
PARTNER : 'PARTNER',
PROFILE : 'PROFILE',
SYSTEM : 'SYSTEM',
PERMISSION_EMBEDDED : 'PERMISSION_EMBEDDED',
};

module.exports.UserRoleType = {
SYSTEM : 'SYSTEM',
CUSTOM : 'CUSTOM',
};

module.exports.UserState = {
OK : 'ok',
USER_WITH_NO_HOUSEHOLD : 'user_with_no_household',
USER_CREATED_WITH_NO_ROLE : 'user_created_with_no_role',
USER_NOT_ACTIVATED : 'user_not_activated',
};

module.exports.VodIngestAssetResultOrderBy = {
FILE_NAME_ASC : 'FILE_NAME_ASC',
FILE_NAME_DESC : 'FILE_NAME_DESC',
ASSET_NAME_ASC : 'ASSET_NAME_ASC',
ASSET_NAME_DESC : 'ASSET_NAME_DESC',
INGEST_DATE_ASC : 'INGEST_DATE_ASC',
INGEST_DATE_DESC : 'INGEST_DATE_DESC',
STATUS_ASC : 'STATUS_ASC',
STATUS_DESC : 'STATUS_DESC',
};

module.exports.VodIngestAssetResultStatus = {
FAILURE : 'FAILURE',
EXTERNAL_FAILURE : 'EXTERNAL_FAILURE',
SUCCESS_WARNING : 'SUCCESS_WARNING',
SUCCESS : 'SUCCESS',
};

module.exports.WatchBasedRecommendationsProfileOrderBy = {
NONE : 'NONE',
};

module.exports.WatchedAllReturnStrategy = {
RETURN_NO_NEXT_EPISODE : 'RETURN_NO_NEXT_EPISODE',
RETURN_FIRST_EPISODE : 'RETURN_FIRST_EPISODE',
RETURN_LAST_EPISODE : 'RETURN_LAST_EPISODE',
};

module.exports.WatchStatus = {
PROGRESS : 'progress',
DONE : 'done',
ALL : 'all',
};
