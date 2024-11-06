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
const kaltura = require('./KalturaClientBase');

/**
 *Class definition for the Kaltura service: announcement.
 * The available service actions:
 * @action add Add a new future scheduled system announcement push notification.
 * @action delete Delete an existing announcing. Announcement cannot be delete while being sent.
 * @action enableSystemAnnouncements Enable system announcements.
 * @action list Lists all announcements in the system.
 * @action update Update an existing future system announcement push notification. Announcement can only be updated only before sending.
 * @action updateStatus Update a system announcement status.
 */
class announcement{
	
	/**
	 * Add a new future scheduled system announcement push notification.
	 * @param announcement Announcement The announcement to be added.
 * timezone parameter should be taken from the 'name of timezone' from: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
 * Recipients values: All, LoggedIn, Guests
	 * @return KalturaAnnouncement
	 */
	static add(announcement){
		let kparams = {};
		kparams.announcement = announcement;
		return new kaltura.RequestBuilder('announcement', 'add', kparams);
	};
	
	/**
	 * Delete an existing announcing. Announcement cannot be delete while being sent.
	 * @param id int Id of the announcement
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('announcement', 'delete', kparams);
	};
	
	/**
	 * Enable system announcements.
	 * @return bool
	 */
	static enableSystemAnnouncements(){
		let kparams = {};
		return new kaltura.RequestBuilder('announcement', 'enableSystemAnnouncements', kparams);
	};
	
	/**
	 * Lists all announcements in the system.
	 * @param filter AnnouncementFilter Filter object
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaAnnouncementListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('announcement', 'list', kparams);
	};
	
	/**
	 * Update an existing future system announcement push notification. Announcement can only be updated only before sending.
	 * @param announcementId int The announcement identifier
	 * @param announcement Announcement The announcement to update.
 * timezone parameter should be taken from the 'name of timezone' from: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
 * Recipients values: All, LoggedIn, Guests
	 * @return KalturaAnnouncement
	 */
	static update(announcementId, announcement){
		let kparams = {};
		kparams.announcementId = announcementId;
		kparams.announcement = announcement;
		return new kaltura.RequestBuilder('announcement', 'update', kparams);
	};
	
	/**
	 * Update a system announcement status.
	 * @param id int Id of the announcement
	 * @param status bool Status to update to
	 * @return bool
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('announcement', 'updateStatus', kparams);
	};
}
module.exports.announcement = announcement;


/**
 *Class definition for the Kaltura service: appToken.
 * The available service actions:
 * @action add Add new application authentication token.
 * @action delete Delete application authentication token by id.
 * @action get Get application authentication token by id.
 * @action startSession Starts a new KS (Kaltura Session) based on application authentication token id.
 */
class appToken{
	
	/**
	 * Add new application authentication token.
	 * @param appToken AppToken Application token
	 * @return KalturaAppToken
	 */
	static add(appToken){
		let kparams = {};
		kparams.appToken = appToken;
		return new kaltura.RequestBuilder('apptoken', 'add', kparams);
	};
	
	/**
	 * Delete application authentication token by id.
	 * @param id string Application token identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('apptoken', 'delete', kparams);
	};
	
	/**
	 * Get application authentication token by id.
	 * @param id string Application token identifier
	 * @return KalturaAppToken
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('apptoken', 'get', kparams);
	};
	
	/**
	 * Starts a new KS (Kaltura Session) based on application authentication token id.
	 * @param id string application token id
	 * @param tokenHash string hashed token - current KS concatenated with the application token hashed using the application token ‘hashType’
	 * @param userId string session user id, will be ignored if a different user id already defined on the application token (optional, default: null)
	 * @param expiry int session expiry (in seconds), could be overwritten by shorter expiry of the application token and the session-expiry that defined on the application token (optional, default: null)
	 * @param udid string Device UDID (optional, default: null)
	 * @return KalturaSessionInfo
	 */
	static startSession(id, tokenHash, userId = null, expiry = null, udid = null){
		let kparams = {};
		kparams.id = id;
		kparams.tokenHash = tokenHash;
		kparams.userId = userId;
		kparams.expiry = expiry;
		kparams.udid = udid;
		return new kaltura.RequestBuilder('apptoken', 'startSession', kparams);
	};
}
module.exports.appToken = appToken;


/**
 *Class definition for the Kaltura service: assetComment.
 * The available service actions:
 * @action add Add asset comments by asset id.
 * @action list Returns asset comments by asset id.
 */
class assetComment{
	
	/**
	 * Add asset comments by asset id.
	 * @param comment AssetComment comment
	 * @return KalturaAssetComment
	 */
	static add(comment){
		let kparams = {};
		kparams.comment = comment;
		return new kaltura.RequestBuilder('assetcomment', 'add', kparams);
	};
	
	/**
	 * Returns asset comments by asset id.
	 * @param filter AssetCommentFilter Filtering the assets comments request
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaAssetCommentListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('assetcomment', 'list', kparams);
	};
}
module.exports.assetComment = assetComment;


/**
 *Class definition for the Kaltura service: asset.
 * The available service actions:
 * @action add Add a new asset.
 * For metas of type bool-&gt; use kalturaBoolValue, type number-&gt; KalturaDoubleValue, type date -&gt; KalturaLongValue, type string -&gt; KalturaStringValue.
 * @action addFromBulkUpload Add new bulk upload batch job Conversion profile id can be specified in the API (note that the total request body size is limited to 10MB).
 * @action count Returns a group-by result for media or EPG according to given filter. Lists values of each field and their respective count.
 * @action delete Delete an existing asset.
 * @action get Returns media or EPG asset by media / EPG internal or external identifier.
 * Note: OPC accounts asset.get for internal identifier doesn&#39;t take under consideration personalized aspects neither shop limitations.
 * @action getAdsContext Returns the data for ads control.
 * @action getPlaybackContext This action delivers all data relevant for player.
 * @action getPlaybackManifest This action delivers all data relevant for player.
 * @action groupRepresentativeList Returns assets deduplicated by asset metadata (or supported asset&#39;s property).
 * @action list Returns media or EPG assets. Filters by media identifiers or by EPG internal or external identifier.
 * @action listPersonalSelection Returns recent selected assets.
 * @action removeMetasAndTags remove metas and tags from asset.
 * @action update update an existing asset.
 * For metas of type bool-&gt; use kalturaBoolValue, type number-&gt; KalturaDoubleValue, type date -&gt; KalturaLongValue, type string -&gt; KalturaStringValue.
 * @action watchBasedRecommendationsList Return list of assets - assets are personal recommendations for the caller.
 */
class asset{
	
	/**
	 * Add a new asset.
 * For metas of type bool-&gt; use kalturaBoolValue, type number-&gt; KalturaDoubleValue, type date -&gt; KalturaLongValue, type string -&gt; KalturaStringValue.
	 * @param asset Asset Asset object
	 * @return KalturaAsset
	 */
	static add(asset){
		let kparams = {};
		kparams.asset = asset;
		return new kaltura.RequestBuilder('asset', 'add', kparams);
	};
	
	/**
	 * Add new bulk upload batch job Conversion profile id can be specified in the API (note that the total request body size is limited to 10MB).
	 * @param fileData file fileData
	 * @param bulkUploadJobData BulkUploadJobData bulkUploadJobData
	 * @param bulkUploadAssetData BulkUploadAssetData bulkUploadAssetData
	 * @return KalturaBulkUpload
	 */
	static addFromBulkUpload(fileData, bulkUploadJobData, bulkUploadAssetData){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.bulkUploadJobData = bulkUploadJobData;
		kparams.bulkUploadAssetData = bulkUploadAssetData;
		return new kaltura.RequestBuilder('asset', 'addFromBulkUpload', kparams, kfiles);
	};
	
	/**
	 * Returns a group-by result for media or EPG according to given filter. Lists values of each field and their respective count.
	 * @param filter SearchAssetFilter Filtering the assets request (optional, default: null)
	 * @return KalturaAssetCount
	 */
	static count(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('asset', 'count', kparams);
	};
	
	/**
	 * Delete an existing asset.
	 * @param id int Asset Identifier
	 * @param assetReferenceType string Type of asset (enum: KalturaAssetReferenceType)
	 * @return bool
	 */
	static deleteAction(id, assetReferenceType){
		let kparams = {};
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		return new kaltura.RequestBuilder('asset', 'delete', kparams);
	};
	
	/**
	 * Returns media or EPG asset by media / EPG internal or external identifier.
 * Note: OPC accounts asset.get for internal identifier doesn&#39;t take under consideration personalized aspects neither shop limitations.
	 * @param id string Asset identifier
	 * @param assetReferenceType string Asset type (enum: KalturaAssetReferenceType)
	 * @return KalturaAsset
	 */
	static get(id, assetReferenceType){
		let kparams = {};
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		return new kaltura.RequestBuilder('asset', 'get', kparams);
	};
	
	/**
	 * Returns the data for ads control.
	 * @param assetId string Asset identifier
	 * @param assetType string Asset type (enum: KalturaAssetType)
	 * @param contextDataParams PlaybackContextOptions Parameters for the request
	 * @return KalturaAdsContext
	 */
	static getAdsContext(assetId, assetType, contextDataParams){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.contextDataParams = contextDataParams;
		return new kaltura.RequestBuilder('asset', 'getAdsContext', kparams);
	};
	
	/**
	 * This action delivers all data relevant for player.
	 * @param assetId string Asset identifier
	 * @param assetType string Asset type (enum: KalturaAssetType)
	 * @param contextDataParams PlaybackContextOptions Parameters for the request
	 * @param sourceType string Filter sources by type (optional, default: null)
	 * @return KalturaPlaybackContext
	 */
	static getPlaybackContext(assetId, assetType, contextDataParams, sourceType = null){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.contextDataParams = contextDataParams;
		kparams.sourceType = sourceType;
		return new kaltura.RequestBuilder('asset', 'getPlaybackContext', kparams);
	};
	
	/**
	 * This action delivers all data relevant for player.
	 * @param assetId string Asset identifier
	 * @param assetType string Asset type (enum: KalturaAssetType)
	 * @param contextDataParams PlaybackContextOptions Parameters for the request
	 * @param sourceType string Filter sources by type (optional, default: null)
	 * @return KalturaPlaybackContext
	 */
	static getPlaybackManifest(assetId, assetType, contextDataParams, sourceType = null){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.contextDataParams = contextDataParams;
		kparams.sourceType = sourceType;
		return new kaltura.RequestBuilder('asset', 'getPlaybackManifest', kparams);
	};
	
	/**
	 * Returns assets deduplicated by asset metadata (or supported asset&#39;s property).
	 * @param groupBy AssetGroupBy A metadata (or supported asset's property) to group by the assets
	 * @param unmatchedItemsPolicy string Defines the policy to handle assets that don't have groupBy property (enum: KalturaUnmatchedItemsPolicy)
	 * @param orderBy BaseAssetOrder A metadata or supported asset's property to sort by (optional, default: null)
	 * @param filter ListGroupsRepresentativesFilter Filtering the assets request (optional, default: null)
	 * @param selectionPolicy RepresentativeSelectionPolicy A policy that implements a well defined parametric process to select an asset out of group (optional, default: null)
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaAssetListResponse
	 */
	static groupRepresentativeList(groupBy, unmatchedItemsPolicy, orderBy = null, filter = null, selectionPolicy = null, pager = null){
		let kparams = {};
		kparams.groupBy = groupBy;
		kparams.unmatchedItemsPolicy = unmatchedItemsPolicy;
		kparams.orderBy = orderBy;
		kparams.filter = filter;
		kparams.selectionPolicy = selectionPolicy;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('asset', 'groupRepresentativeList', kparams);
	};
	
	/**
	 * Returns media or EPG assets. Filters by media identifiers or by EPG internal or external identifier.
	 * @param filter AssetFilter Filtering the assets request (optional, default: null)
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaAssetListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('asset', 'list', kparams);
	};
	
	/**
	 * Returns recent selected assets.
	 * @param filter PersonalAssetSelectionFilter Filtering the assets request
	 * @return KalturaAssetListResponse
	 */
	static listPersonalSelection(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('asset', 'listPersonalSelection', kparams);
	};
	
	/**
	 * remove metas and tags from asset.
	 * @param id int Asset Identifier
	 * @param assetReferenceType string Type of asset (enum: KalturaAssetReferenceType)
	 * @param idIn string comma separated ids of metas and tags
	 * @return bool
	 */
	static removeMetasAndTags(id, assetReferenceType, idIn){
		let kparams = {};
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		kparams.idIn = idIn;
		return new kaltura.RequestBuilder('asset', 'removeMetasAndTags', kparams);
	};
	
	/**
	 * update an existing asset.
 * For metas of type bool-&gt; use kalturaBoolValue, type number-&gt; KalturaDoubleValue, type date -&gt; KalturaLongValue, type string -&gt; KalturaStringValue.
	 * @param id int Asset Identifier
	 * @param asset Asset Asset object
	 * @return KalturaAsset
	 */
	static update(id, asset){
		let kparams = {};
		kparams.id = id;
		kparams.asset = asset;
		return new kaltura.RequestBuilder('asset', 'update', kparams);
	};
	
	/**
	 * Return list of assets - assets are personal recommendations for the caller.
	 * @param profileId int WatchBasedRecommendations profile id
	 * @return KalturaAssetListResponse
	 */
	static watchBasedRecommendationsList(profileId){
		let kparams = {};
		kparams.profileId = profileId;
		return new kaltura.RequestBuilder('asset', 'watchBasedRecommendationsList', kparams);
	};
}
module.exports.asset = asset;


/**
 *Class definition for the Kaltura service: assetFile.
 * The available service actions:
 * @action getContext get KalturaAssetFileContext.
 * @action playManifest Redirects to play manifest.
 */
class assetFile{
	
	/**
	 * get KalturaAssetFileContext.
	 * @param id string Asset file identifier
	 * @param contextType string Kaltura Context Type (none = 0, recording = 1) (enum: KalturaContextType)
	 * @return KalturaAssetFileContext
	 */
	static getContext(id, contextType){
		let kparams = {};
		kparams.id = id;
		kparams.contextType = contextType;
		return new kaltura.RequestBuilder('assetfile', 'getContext', kparams);
	};
	
	/**
	 * Redirects to play manifest.
	 * @param partnerId int Partner identifier
	 * @param assetId string Asset identifier
	 * @param assetType string Asset type (enum: KalturaAssetType)
	 * @param assetFileId int Asset file identifier
	 * @param contextType string Playback context type (enum: KalturaPlaybackContextType)
	 * @param ks string Kaltura session for the user, not mandatory for anonymous user (optional, default: null)
	 * @param tokenizedUrl string Tokenized Url, not mandatory (optional, default: null)
	 * @param isAltUrl bool Is alternative url (optional, default: false)
	 * @return KalturaAssetFile
	 */
	static playManifest(partnerId, assetId, assetType, assetFileId, contextType, ks = null, tokenizedUrl = null, isAltUrl = false){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.assetFileId = assetFileId;
		kparams.contextType = contextType;
		kparams.ks = ks;
		kparams.tokenizedUrl = tokenizedUrl;
		kparams.isAltUrl = isAltUrl;
		return new kaltura.RequestBuilder('assetfile', 'playManifest', kparams);
	};
}
module.exports.assetFile = assetFile;


/**
 *Class definition for the Kaltura service: assetFilePpv.
 * The available service actions:
 * @action add Add asset file ppv.
 * @action delete Delete asset file ppv.
 * @action list Return a list of asset files ppvs for the account with optional filter.
 * @action update Update assetFilePpv.
 */
class assetFilePpv{
	
	/**
	 * Add asset file ppv.
	 * @param assetFilePpv AssetFilePpv asset file ppv
	 * @return KalturaAssetFilePpv
	 */
	static add(assetFilePpv){
		let kparams = {};
		kparams.assetFilePpv = assetFilePpv;
		return new kaltura.RequestBuilder('assetfileppv', 'add', kparams);
	};
	
	/**
	 * Delete asset file ppv.
	 * @param assetFileId int Asset file id
	 * @param ppvModuleId int Ppv module id
	 * @return bool
	 */
	static deleteAction(assetFileId, ppvModuleId){
		let kparams = {};
		kparams.assetFileId = assetFileId;
		kparams.ppvModuleId = ppvModuleId;
		return new kaltura.RequestBuilder('assetfileppv', 'delete', kparams);
	};
	
	/**
	 * Return a list of asset files ppvs for the account with optional filter.
	 * @param filter AssetFilePpvFilter Filter parameters for filtering out the result
	 * @return KalturaAssetFilePpvListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('assetfileppv', 'list', kparams);
	};
	
	/**
	 * Update assetFilePpv.
	 * @param assetFileId int Asset file id
	 * @param ppvModuleId int Ppv module id
	 * @param assetFilePpv AssetFilePpv assetFilePpv
	 * @return KalturaAssetFilePpv
	 */
	static update(assetFileId, ppvModuleId, assetFilePpv){
		let kparams = {};
		kparams.assetFileId = assetFileId;
		kparams.ppvModuleId = ppvModuleId;
		kparams.assetFilePpv = assetFilePpv;
		return new kaltura.RequestBuilder('assetfileppv', 'update', kparams);
	};
}
module.exports.assetFilePpv = assetFilePpv;


/**
 *Class definition for the Kaltura service: assetHistory.
 * The available service actions:
 * @action clean Clean the user’s viewing history.
 * @action getNextEpisode Get next episode by last watch asset in given assetId.
 * @action list Get recently watched media for user, ordered by recently watched first.
 */
class assetHistory{
	
	/**
	 * Clean the user’s viewing history.
	 * @param filter AssetHistoryFilter List of assets identifier (optional, default: null)
	 */
	static clean(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('assethistory', 'clean', kparams);
	};
	
	/**
	 * Get next episode by last watch asset in given assetId.
	 * @param assetId int asset Id of series to search for next episode (optional, default: null)
	 * @param seriesIdArguments SeriesIdArguments series Id arguments (optional, default: null)
	 * @param notWatchedReturnStrategy string not watched any episode strategy (optional, enum: KalturaNotWatchedReturnStrategy, default: null)
	 * @param watchedAllReturnStrategy string watched all series episodes strategy (optional, enum: KalturaWatchedAllReturnStrategy, default: null)
	 * @return KalturaAssetHistory
	 */
	static getNextEpisode(assetId = null, seriesIdArguments = null, notWatchedReturnStrategy = null, watchedAllReturnStrategy = null){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.seriesIdArguments = seriesIdArguments;
		kparams.notWatchedReturnStrategy = notWatchedReturnStrategy;
		kparams.watchedAllReturnStrategy = watchedAllReturnStrategy;
		return new kaltura.RequestBuilder('assethistory', 'getNextEpisode', kparams);
	};
	
	/**
	 * Get recently watched media for user, ordered by recently watched first.
	 * @param filter AssetHistoryFilter Filter parameters for filtering out the result (optional, default: null)
	 * @param pager FilterPager Page size and index. Number of assets to return per page. Possible range 5 ≤ size ≥ 50. If omitted - will be set to 25. If a value > 50 provided – will set to 50 (optional, default: null)
	 * @return KalturaAssetHistoryListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('assethistory', 'list', kparams);
	};
}
module.exports.assetHistory = assetHistory;


/**
 *Class definition for the Kaltura service: assetPersonalMarkup.
 * The available service actions:
 * @action list Response with list of assetPersonalMarkup.
 */
class assetPersonalMarkup{
	
	/**
	 * Response with list of assetPersonalMarkup.
	 * @param filter AssetPersonalMarkupSearchFilter Filter pager
	 * @return KalturaAssetPersonalMarkupListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('assetpersonalmarkup', 'list', kparams);
	};
}
module.exports.assetPersonalMarkup = assetPersonalMarkup;


/**
 *Class definition for the Kaltura service: assetPersonalSelection.
 * The available service actions:
 * @action delete Remove asset selection in slot.
 * @action deleteAll Remove asset selection in slot.
 * @action upsert Add or update asset selection in slot.
 */
class assetPersonalSelection{
	
	/**
	 * Remove asset selection in slot.
	 * @param assetId int asset id
	 * @param assetType string asset type: media/epg (enum: KalturaAssetType)
	 * @param slotNumber int slot number
	 */
	static deleteAction(assetId, assetType, slotNumber){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.slotNumber = slotNumber;
		return new kaltura.RequestBuilder('assetpersonalselection', 'delete', kparams);
	};
	
	/**
	 * Remove asset selection in slot.
	 * @param slotNumber int slot number
	 */
	static deleteAll(slotNumber){
		let kparams = {};
		kparams.slotNumber = slotNumber;
		return new kaltura.RequestBuilder('assetpersonalselection', 'deleteAll', kparams);
	};
	
	/**
	 * Add or update asset selection in slot.
	 * @param assetId int asset id
	 * @param assetType string asset type: media/epg (enum: KalturaAssetType)
	 * @param slotNumber int slot number
	 * @return KalturaAssetPersonalSelection
	 */
	static upsert(assetId, assetType, slotNumber){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.slotNumber = slotNumber;
		return new kaltura.RequestBuilder('assetpersonalselection', 'upsert', kparams);
	};
}
module.exports.assetPersonalSelection = assetPersonalSelection;


/**
 *Class definition for the Kaltura service: assetRule.
 * The available service actions:
 * @action add Add asset rule.
 * @action delete Delete asset rule.
 * @action list Get the list of asset rules for the partner.
 * @action update Update asset rule.
 */
class assetRule{
	
	/**
	 * Add asset rule.
	 * @param assetRule AssetRule Asset rule
	 * @return KalturaAssetRule
	 */
	static add(assetRule){
		let kparams = {};
		kparams.assetRule = assetRule;
		return new kaltura.RequestBuilder('assetrule', 'add', kparams);
	};
	
	/**
	 * Delete asset rule.
	 * @param id int Asset rule ID
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('assetrule', 'delete', kparams);
	};
	
	/**
	 * Get the list of asset rules for the partner.
	 * @param filter AssetRuleFilter filter by condition name (optional, default: null)
	 * @return KalturaAssetRuleListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('assetrule', 'list', kparams);
	};
	
	/**
	 * Update asset rule.
	 * @param id int Asset rule ID to update
	 * @param assetRule AssetRule Asset rule
	 * @return KalturaAssetRule
	 */
	static update(id, assetRule){
		let kparams = {};
		kparams.id = id;
		kparams.assetRule = assetRule;
		return new kaltura.RequestBuilder('assetrule', 'update', kparams);
	};
}
module.exports.assetRule = assetRule;


/**
 *Class definition for the Kaltura service: assetStatistics.
 * The available service actions:
 * @action query Returns statistics for given list of assets by type and / or time period.
 * Supported values for KalturaAssetStatisticsQuery.assetTypeEqual : KalturaAssetType.media, KalturaAssetType.epg.
 */
class assetStatistics{
	
	/**
	 * Returns statistics for given list of assets by type and / or time period.
 * Supported values for KalturaAssetStatisticsQuery.assetTypeEqual : KalturaAssetType.media, KalturaAssetType.epg.
	 * @param query AssetStatisticsQuery Query for assets statistics
	 * @return KalturaAssetStatisticsListResponse
	 */
	static query(query){
		let kparams = {};
		kparams.query = query;
		return new kaltura.RequestBuilder('assetstatistics', 'query', kparams);
	};
}
module.exports.assetStatistics = assetStatistics;


/**
 *Class definition for the Kaltura service: assetStruct.
 * The available service actions:
 * @action add Add a new assetStruct.
 * @action delete Delete an existing assetStruct.
 * @action get Get AssetStruct by ID.
 * @action list Return a list of asset structs for the account with optional filter.
 * @action update Update an existing assetStruct.
 */
class assetStruct{
	
	/**
	 * Add a new assetStruct.
	 * @param assetStruct AssetStruct AssetStruct Object
	 * @return KalturaAssetStruct
	 */
	static add(assetStruct){
		let kparams = {};
		kparams.assetStruct = assetStruct;
		return new kaltura.RequestBuilder('assetstruct', 'add', kparams);
	};
	
	/**
	 * Delete an existing assetStruct.
	 * @param id int AssetStruct Identifier, id = 0 is identified as program AssetStruct
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('assetstruct', 'delete', kparams);
	};
	
	/**
	 * Get AssetStruct by ID.
	 * @param id int ID to get
	 * @return KalturaAssetStruct
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('assetstruct', 'get', kparams);
	};
	
	/**
	 * Return a list of asset structs for the account with optional filter.
	 * @param filter BaseAssetStructFilter Filter parameters for filtering out the result (optional, default: null)
	 * @return KalturaAssetStructListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('assetstruct', 'list', kparams);
	};
	
	/**
	 * Update an existing assetStruct.
	 * @param id int AssetStruct Identifier, id = 0 is identified as program AssetStruct
	 * @param assetStruct AssetStruct AssetStruct Object
	 * @return KalturaAssetStruct
	 */
	static update(id, assetStruct){
		let kparams = {};
		kparams.id = id;
		kparams.assetStruct = assetStruct;
		return new kaltura.RequestBuilder('assetstruct', 'update', kparams);
	};
}
module.exports.assetStruct = assetStruct;


/**
 *Class definition for the Kaltura service: assetStructMeta.
 * The available service actions:
 * @action list Return a list of asset struct metas for the account with optional filter.
 * @action update Update Asset struct meta.
 */
class assetStructMeta{
	
	/**
	 * Return a list of asset struct metas for the account with optional filter.
	 * @param filter AssetStructMetaFilter Filter parameters for filtering out the result
	 * @return KalturaAssetStructMetaListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('assetstructmeta', 'list', kparams);
	};
	
	/**
	 * Update Asset struct meta.
	 * @param assetStructId int AssetStruct Identifier
	 * @param metaId int Meta Identifier
	 * @param assetStructMeta AssetStructMeta AssetStructMeta Object
	 * @return KalturaAssetStructMeta
	 */
	static update(assetStructId, metaId, assetStructMeta){
		let kparams = {};
		kparams.assetStructId = assetStructId;
		kparams.metaId = metaId;
		kparams.assetStructMeta = assetStructMeta;
		return new kaltura.RequestBuilder('assetstructmeta', 'update', kparams);
	};
}
module.exports.assetStructMeta = assetStructMeta;


/**
 *Class definition for the Kaltura service: assetUserRule.
 * The available service actions:
 * @action add Add asset user rule.
 * @action attachUser Attach AssetUserRule To User.
 * @action delete Delete asset user rule.
 * @action detachUser Detach AssetUserRule from user.
 * @action list Get the list of asset user rules for the partner.
 * @action update Update asset user rule.
 */
class assetUserRule{
	
	/**
	 * Add asset user rule.
	 * @param assetUserRule AssetUserRule Asset user rule
	 * @return KalturaAssetUserRule
	 */
	static add(assetUserRule){
		let kparams = {};
		kparams.assetUserRule = assetUserRule;
		return new kaltura.RequestBuilder('assetuserrule', 'add', kparams);
	};
	
	/**
	 * Attach AssetUserRule To User.
	 * @param ruleId int AssetUserRule id to add
	 */
	static attachUser(ruleId){
		let kparams = {};
		kparams.ruleId = ruleId;
		return new kaltura.RequestBuilder('assetuserrule', 'attachUser', kparams);
	};
	
	/**
	 * Delete asset user rule.
	 * @param id int Asset user rule ID
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('assetuserrule', 'delete', kparams);
	};
	
	/**
	 * Detach AssetUserRule from user.
	 * @param ruleId int AssetUserRule id to remove
	 */
	static detachUser(ruleId){
		let kparams = {};
		kparams.ruleId = ruleId;
		return new kaltura.RequestBuilder('assetuserrule', 'detachUser', kparams);
	};
	
	/**
	 * Get the list of asset user rules for the partner.
	 * @param filter AssetUserRuleFilter AssetUserRule Filter (optional, default: null)
	 * @return KalturaAssetUserRuleListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('assetuserrule', 'list', kparams);
	};
	
	/**
	 * Update asset user rule.
	 * @param id int Asset user rule ID to update
	 * @param assetUserRule AssetUserRule Asset user rule
	 * @return KalturaAssetUserRule
	 */
	static update(id, assetUserRule){
		let kparams = {};
		kparams.id = id;
		kparams.assetUserRule = assetUserRule;
		return new kaltura.RequestBuilder('assetuserrule', 'update', kparams);
	};
}
module.exports.assetUserRule = assetUserRule;


/**
 *Class definition for the Kaltura service: bookmark.
 * The available service actions:
 * @action add Report player position and action for the user on the watched asset. Player position is used to later allow resume watching.
 * @action list Returns player position record/s for the requested asset and the requesting user.
 * If default user makes the request – player position records are provided for all of the users in the household.
 * If non-default user makes the request - player position records are provided for the requesting user and the default user of the household.
 */
class bookmark{
	
	/**
	 * Report player position and action for the user on the watched asset. Player position is used to later allow resume watching.
	 * @param bookmark Bookmark Bookmark details
	 * @return bool
	 */
	static add(bookmark){
		let kparams = {};
		kparams.bookmark = bookmark;
		return new kaltura.RequestBuilder('bookmark', 'add', kparams);
	};
	
	/**
	 * Returns player position record/s for the requested asset and the requesting user.
 * If default user makes the request – player position records are provided for all of the users in the household.
 * If non-default user makes the request - player position records are provided for the requesting user and the default user of the household.
	 * @param filter BookmarkFilter Filter option for the last position
	 * @return KalturaBookmarkListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('bookmark', 'list', kparams);
	};
}
module.exports.bookmark = bookmark;


/**
 *Class definition for the Kaltura service: bulkUpload.
 * The available service actions:
 * @action get Get BulkUpload by ID.
 * @action list Get list of KalturaBulkUpload by filter.
 */
class bulkUpload{
	
	/**
	 * Get BulkUpload by ID.
	 * @param id int ID to get
	 * @return KalturaBulkUpload
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('bulkupload', 'get', kparams);
	};
	
	/**
	 * Get list of KalturaBulkUpload by filter.
	 * @param filter BulkUploadFilter Filtering the bulk action request
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaBulkUploadListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('bulkupload', 'list', kparams);
	};
}
module.exports.bulkUpload = bulkUpload;


/**
 *Class definition for the Kaltura service: bulkUploadStatistics.
 * The available service actions:
 * @action get Get BulkUploadStatistics count summary by status.
 */
class bulkUploadStatistics{
	
	/**
	 * Get BulkUploadStatistics count summary by status.
	 * @param bulkObjectTypeEqual string bulkUploadObject for status summary
	 * @param createDateGreaterThanOrEqual int date created filter
	 * @return KalturaBulkUploadStatistics
	 */
	static get(bulkObjectTypeEqual, createDateGreaterThanOrEqual){
		let kparams = {};
		kparams.bulkObjectTypeEqual = bulkObjectTypeEqual;
		kparams.createDateGreaterThanOrEqual = createDateGreaterThanOrEqual;
		return new kaltura.RequestBuilder('bulkuploadstatistics', 'get', kparams);
	};
}
module.exports.bulkUploadStatistics = bulkUploadStatistics;


/**
 *Class definition for the Kaltura service: businessModuleRule.
 * The available service actions:
 * @action add Add business module rule.
 * @action delete Delete business module rule.
 * @action get Get business module rule by ID.
 * @action list Get the list of business module rules for the partner.
 * @action update Update business module rule.
 */
class businessModuleRule{
	
	/**
	 * Add business module rule.
	 * @param businessModuleRule BusinessModuleRule Business module rule
	 * @return KalturaBusinessModuleRule
	 */
	static add(businessModuleRule){
		let kparams = {};
		kparams.businessModuleRule = businessModuleRule;
		return new kaltura.RequestBuilder('businessmodulerule', 'add', kparams);
	};
	
	/**
	 * Delete business module rule.
	 * @param id int Business module rule ID
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('businessmodulerule', 'delete', kparams);
	};
	
	/**
	 * Get business module rule by ID.
	 * @param id int ID to get
	 * @return KalturaBusinessModuleRule
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('businessmodulerule', 'get', kparams);
	};
	
	/**
	 * Get the list of business module rules for the partner.
	 * @param filter BusinessModuleRuleFilter filter by condition name (optional, default: null)
	 * @return KalturaBusinessModuleRuleListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('businessmodulerule', 'list', kparams);
	};
	
	/**
	 * Update business module rule.
	 * @param id int Business module rule ID to update
	 * @param businessModuleRule BusinessModuleRule Business module rule
	 * @return KalturaBusinessModuleRule
	 */
	static update(id, businessModuleRule){
		let kparams = {};
		kparams.id = id;
		kparams.businessModuleRule = businessModuleRule;
		return new kaltura.RequestBuilder('businessmodulerule', 'update', kparams);
	};
}
module.exports.businessModuleRule = businessModuleRule;


/**
 *Class definition for the Kaltura service: campaign.
 * The available service actions:
 * @action add Add new Campaign.
 * @action delete Delete existing Campaign.
 * @action list Returns the list of available Campaigns.
 * @action setState Set campaign&#39;s state.
 * @action update Update existing Campaign.
 */
class campaign{
	
	/**
	 * Add new Campaign.
	 * @param objectToAdd Campaign Campaign Object to add
	 * @return KalturaCampaign
	 */
	static add(objectToAdd){
		let kparams = {};
		kparams.objectToAdd = objectToAdd;
		return new kaltura.RequestBuilder('campaign', 'add', kparams);
	};
	
	/**
	 * Delete existing Campaign.
	 * @param id int Campaign identifier
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('campaign', 'delete', kparams);
	};
	
	/**
	 * Returns the list of available Campaigns.
	 * @param filter CampaignFilter Filter
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaCampaignListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('campaign', 'list', kparams);
	};
	
	/**
	 * Set campaign&#39;s state.
	 * @param campaignId int campaign Id
	 * @param newState string new campaign state (enum: KalturaObjectState)
	 */
	static setState(campaignId, newState){
		let kparams = {};
		kparams.campaignId = campaignId;
		kparams.newState = newState;
		return new kaltura.RequestBuilder('campaign', 'setState', kparams);
	};
	
	/**
	 * Update existing Campaign.
	 * @param id int id of Campaign to update
	 * @param objectToUpdate Campaign Campaign Object to update
	 * @return KalturaCampaign
	 */
	static update(id, objectToUpdate){
		let kparams = {};
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new kaltura.RequestBuilder('campaign', 'update', kparams);
	};
}
module.exports.campaign = campaign;


/**
 *Class definition for the Kaltura service: categoryItem.
 * The available service actions:
 * @action add categoryItem add.
 * @action delete Remove category.
 * @action list Gets all categoryItem items.
 * @action update categoryItem update.
 */
class categoryItem{
	
	/**
	 * categoryItem add.
	 * @param objectToAdd CategoryItem categoryItem details
	 * @return KalturaCategoryItem
	 */
	static add(objectToAdd){
		let kparams = {};
		kparams.objectToAdd = objectToAdd;
		return new kaltura.RequestBuilder('categoryitem', 'add', kparams);
	};
	
	/**
	 * Remove category.
	 * @param id int Category identifier
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('categoryitem', 'delete', kparams);
	};
	
	/**
	 * Gets all categoryItem items.
	 * @param filter CategoryItemFilter Filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaCategoryItemListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('categoryitem', 'list', kparams);
	};
	
	/**
	 * categoryItem update.
	 * @param id int Category identifier
	 * @param objectToUpdate CategoryItem categoryItem details
	 * @return KalturaCategoryItem
	 */
	static update(id, objectToUpdate){
		let kparams = {};
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new kaltura.RequestBuilder('categoryitem', 'update', kparams);
	};
}
module.exports.categoryItem = categoryItem;


/**
 *Class definition for the Kaltura service: categoryTree.
 * The available service actions:
 * @action duplicate Duplicate category Item.
 * @action get Retrive category tree.
 * @action getByVersion Retrieve default category tree of deviceFamilyId by KS or specific one if versionId is set.
 */
class categoryTree{
	
	/**
	 * Duplicate category Item.
	 * @param categoryItemId int Category item identifier
	 * @param name string Root category name
	 * @return KalturaCategoryTree
	 */
	static duplicate(categoryItemId, name){
		let kparams = {};
		kparams.categoryItemId = categoryItemId;
		kparams.name = name;
		return new kaltura.RequestBuilder('categorytree', 'duplicate', kparams);
	};
	
	/**
	 * Retrive category tree.
	 * @param categoryItemId int Category item identifier
	 * @param filter bool filter categories dates (optional, default: false)
	 * @return KalturaCategoryTree
	 */
	static get(categoryItemId, filter = false){
		let kparams = {};
		kparams.categoryItemId = categoryItemId;
		kparams.filter = filter;
		return new kaltura.RequestBuilder('categorytree', 'get', kparams);
	};
	
	/**
	 * Retrieve default category tree of deviceFamilyId by KS or specific one if versionId is set.
	 * @param versionId int Category version id of tree (optional, default: null)
	 * @param deviceFamilyId int deviceFamilyId related to category tree (optional, default: null)
	 * @param filter bool filter=true excludes items for which the start date has not been reached yet; default is false (optional, default: false)
	 * @return KalturaCategoryTree
	 */
	static getByVersion(versionId = null, deviceFamilyId = null, filter = false){
		let kparams = {};
		kparams.versionId = versionId;
		kparams.deviceFamilyId = deviceFamilyId;
		kparams.filter = filter;
		return new kaltura.RequestBuilder('categorytree', 'getByVersion', kparams);
	};
}
module.exports.categoryTree = categoryTree;


/**
 *Class definition for the Kaltura service: categoryVersion.
 * The available service actions:
 * @action add categoryVersion add.
 * @action createTree Acreate new tree for this categoryItem.
 * @action delete Remove category version.
 * @action list Gets all category versions.
 * @action setDefault Set new default category version.
 * @action update categoryVersion update.
 */
class categoryVersion{
	
	/**
	 * categoryVersion add.
	 * @param objectToAdd CategoryVersion categoryVersion details
	 * @return KalturaCategoryVersion
	 */
	static add(objectToAdd){
		let kparams = {};
		kparams.objectToAdd = objectToAdd;
		return new kaltura.RequestBuilder('categoryversion', 'add', kparams);
	};
	
	/**
	 * Acreate new tree for this categoryItem.
	 * @param categoryItemId int the categoryItemId to create the tree accordingly
	 * @param name string Name of version
	 * @param comment string Comment of version
	 * @return KalturaCategoryVersion
	 */
	static createTree(categoryItemId, name, comment){
		let kparams = {};
		kparams.categoryItemId = categoryItemId;
		kparams.name = name;
		kparams.comment = comment;
		return new kaltura.RequestBuilder('categoryversion', 'createTree', kparams);
	};
	
	/**
	 * Remove category version.
	 * @param id int Category version identifier
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('categoryversion', 'delete', kparams);
	};
	
	/**
	 * Gets all category versions.
	 * @param filter CategoryVersionFilter Filter
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaCategoryVersionListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('categoryversion', 'list', kparams);
	};
	
	/**
	 * Set new default category version.
	 * @param id int category version id to set as default
	 * @param force bool force to set even if version is older then currenct version (optional, default: false)
	 */
	static setDefault(id, force = false){
		let kparams = {};
		kparams.id = id;
		kparams.force = force;
		return new kaltura.RequestBuilder('categoryversion', 'setDefault', kparams);
	};
	
	/**
	 * categoryVersion update.
	 * @param id int Category version identifier
	 * @param objectToUpdate CategoryVersion categoryVersion details
	 * @return KalturaCategoryVersion
	 */
	static update(id, objectToUpdate){
		let kparams = {};
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new kaltura.RequestBuilder('categoryversion', 'update', kparams);
	};
}
module.exports.categoryVersion = categoryVersion;


/**
 *Class definition for the Kaltura service: cdnAdapterProfile.
 * The available service actions:
 * @action add Insert new CDN adapter for partner.
 * @action delete Delete CDN adapter by CDN adapter id.
 * @action generateSharedSecret Generate CDN adapter shared secret.
 * @action list Returns all CDN adapters for partner.
 * @action update Update CDN adapter details.
 */
class cdnAdapterProfile{
	
	/**
	 * Insert new CDN adapter for partner.
	 * @param adapter CDNAdapterProfile CDN adapter object
	 * @return KalturaCDNAdapterProfile
	 */
	static add(adapter){
		let kparams = {};
		kparams.adapter = adapter;
		return new kaltura.RequestBuilder('cdnadapterprofile', 'add', kparams);
	};
	
	/**
	 * Delete CDN adapter by CDN adapter id.
	 * @param adapterId int CDN adapter identifier
	 * @return bool
	 */
	static deleteAction(adapterId){
		let kparams = {};
		kparams.adapterId = adapterId;
		return new kaltura.RequestBuilder('cdnadapterprofile', 'delete', kparams);
	};
	
	/**
	 * Generate CDN adapter shared secret.
	 * @param adapterId int CDN adapter identifier
	 * @return KalturaCDNAdapterProfile
	 */
	static generateSharedSecret(adapterId){
		let kparams = {};
		kparams.adapterId = adapterId;
		return new kaltura.RequestBuilder('cdnadapterprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Returns all CDN adapters for partner.
	 * @return KalturaCDNAdapterProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('cdnadapterprofile', 'list', kparams);
	};
	
	/**
	 * Update CDN adapter details.
	 * @param adapterId int CDN adapter id to update
	 * @param adapter CDNAdapterProfile CDN adapter Object
	 * @return KalturaCDNAdapterProfile
	 */
	static update(adapterId, adapter){
		let kparams = {};
		kparams.adapterId = adapterId;
		kparams.adapter = adapter;
		return new kaltura.RequestBuilder('cdnadapterprofile', 'update', kparams);
	};
}
module.exports.cdnAdapterProfile = cdnAdapterProfile;


/**
 *Class definition for the Kaltura service: cdnPartnerSettings.
 * The available service actions:
 * @action get Retrieve the partner’s CDN settings (default adapters).
 * @action update Configure the partner’s CDN settings (default adapters).
 */
class cdnPartnerSettings{
	
	/**
	 * Retrieve the partner’s CDN settings (default adapters).
	 * @return KalturaCDNPartnerSettings
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('cdnpartnersettings', 'get', kparams);
	};
	
	/**
	 * Configure the partner’s CDN settings (default adapters).
	 * @param settings CDNPartnerSettings CDN partner settings
	 * @return KalturaCDNPartnerSettings
	 */
	static update(settings){
		let kparams = {};
		kparams.settings = settings;
		return new kaltura.RequestBuilder('cdnpartnersettings', 'update', kparams);
	};
}
module.exports.cdnPartnerSettings = cdnPartnerSettings;


/**
 *Class definition for the Kaltura service: cDVRAdapterProfile.
 * The available service actions:
 * @action add Insert new C-DVR adapter for partner.
 * @action delete Delete C-DVR adapter by C-DVR adapter id.
 * @action generateSharedSecret Generate C-DVR adapter shared secret.
 * @action list Returns all C-DVR adapters for partner.
 * @action update Update C-DVR adapter details.
 */
class cDVRAdapterProfile{
	
	/**
	 * Insert new C-DVR adapter for partner.
	 * @param adapter CDVRAdapterProfile C-DVR adapter object
	 * @return KalturaCDVRAdapterProfile
	 */
	static add(adapter){
		let kparams = {};
		kparams.adapter = adapter;
		return new kaltura.RequestBuilder('cdvradapterprofile', 'add', kparams);
	};
	
	/**
	 * Delete C-DVR adapter by C-DVR adapter id.
	 * @param adapterId int C-DVR adapter identifier
	 * @return bool
	 */
	static deleteAction(adapterId){
		let kparams = {};
		kparams.adapterId = adapterId;
		return new kaltura.RequestBuilder('cdvradapterprofile', 'delete', kparams);
	};
	
	/**
	 * Generate C-DVR adapter shared secret.
	 * @param adapterId int C-DVR adapter identifier
	 * @return KalturaCDVRAdapterProfile
	 */
	static generateSharedSecret(adapterId){
		let kparams = {};
		kparams.adapterId = adapterId;
		return new kaltura.RequestBuilder('cdvradapterprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Returns all C-DVR adapters for partner.
	 * @return KalturaCDVRAdapterProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('cdvradapterprofile', 'list', kparams);
	};
	
	/**
	 * Update C-DVR adapter details.
	 * @param adapterId int C-DVR adapter identifier
	 * @param adapter CDVRAdapterProfile C-DVR adapter Object
	 * @return KalturaCDVRAdapterProfile
	 */
	static update(adapterId, adapter){
		let kparams = {};
		kparams.adapterId = adapterId;
		kparams.adapter = adapter;
		return new kaltura.RequestBuilder('cdvradapterprofile', 'update', kparams);
	};
}
module.exports.cDVRAdapterProfile = cDVRAdapterProfile;


/**
 *Class definition for the Kaltura service: channel.
 * The available service actions:
 * @action add Insert new channel for partner. Supports KalturaDynamicChannel or KalturaManualChannel.
 * @action delete Delete channel by its channel id.
 * @action get Returns channel.
 * @action list Get the list of tags for the partner.
 * @action update Update channel details. Supports KalturaDynamicChannel or KalturaManualChannel.
 */
class channel{
	
	/**
	 * Insert new channel for partner. Supports KalturaDynamicChannel or KalturaManualChannel.
	 * @param channel Channel KSQL channel Object
	 * @return KalturaChannel
	 */
	static add(channel){
		let kparams = {};
		kparams.channel = channel;
		return new kaltura.RequestBuilder('channel', 'add', kparams);
	};
	
	/**
	 * Delete channel by its channel id.
	 * @param channelId int channel identifier
	 * @return bool
	 */
	static deleteAction(channelId){
		let kparams = {};
		kparams.channelId = channelId;
		return new kaltura.RequestBuilder('channel', 'delete', kparams);
	};
	
	/**
	 * Returns channel.
	 * @param id int Channel Identifier
	 * @return KalturaChannel
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('channel', 'get', kparams);
	};
	
	/**
	 * Get the list of tags for the partner.
	 * @param filter ChannelsBaseFilter Filter (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaChannelListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('channel', 'list', kparams);
	};
	
	/**
	 * Update channel details. Supports KalturaDynamicChannel or KalturaManualChannel.
	 * @param id int Channel identifier
	 * @param channel Channel KSQL channel Object
	 * @return KalturaChannel
	 */
	static update(id, channel){
		let kparams = {};
		kparams.id = id;
		kparams.channel = channel;
		return new kaltura.RequestBuilder('channel', 'update', kparams);
	};
}
module.exports.channel = channel;


/**
 *Class definition for the Kaltura service: collection.
 * The available service actions:
 * @action add Insert new collection for partner.
 * @action delete Delete collection.
 * @action list Returns a list of collections requested by Collection IDs or file identifier or coupon group identifier.
 * @action update Update Collection.
 */
class collection{
	
	/**
	 * Insert new collection for partner.
	 * @param collection Collection collection object
	 * @return KalturaCollection
	 */
	static add(collection){
		let kparams = {};
		kparams.collection = collection;
		return new kaltura.RequestBuilder('collection', 'add', kparams);
	};
	
	/**
	 * Delete collection.
	 * @param id int Collection id
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('collection', 'delete', kparams);
	};
	
	/**
	 * Returns a list of collections requested by Collection IDs or file identifier or coupon group identifier.
	 * @param filter CollectionFilter Filter request (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaCollectionListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('collection', 'list', kparams);
	};
	
	/**
	 * Update Collection.
	 * @param id int Collection id
	 * @param collection Collection Collection
	 * @return KalturaCollection
	 */
	static update(id, collection){
		let kparams = {};
		kparams.id = id;
		kparams.collection = collection;
		return new kaltura.RequestBuilder('collection', 'update', kparams);
	};
}
module.exports.collection = collection;


/**
 *Class definition for the Kaltura service: compensation.
 * The available service actions:
 * @action add Adds a new compensation for a household for a given number of iterations of a subscription renewal for a fixed amount / percentage of the renewal price.
 * @action delete Delete a compensation by identifier.
 * @action get Get a compensation by identifier.
 */
class compensation{
	
	/**
	 * Adds a new compensation for a household for a given number of iterations of a subscription renewal for a fixed amount / percentage of the renewal price.
	 * @param compensation Compensation Compensation parameters
	 * @return KalturaCompensation
	 */
	static add(compensation){
		let kparams = {};
		kparams.compensation = compensation;
		return new kaltura.RequestBuilder('compensation', 'add', kparams);
	};
	
	/**
	 * Delete a compensation by identifier.
	 * @param id int Compensation identifier
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('compensation', 'delete', kparams);
	};
	
	/**
	 * Get a compensation by identifier.
	 * @param id int Compensation identifier
	 * @return KalturaCompensation
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('compensation', 'get', kparams);
	};
}
module.exports.compensation = compensation;


/**
 *Class definition for the Kaltura service: configurationGroup.
 * The available service actions:
 * @action add Add a new configuration group.
 * @action delete Remove a configuration group, including its tags, device configurations and devices associations.
 * @action get Return the configuration group details, including group identifiers, tags, and number of associated devices, and list of device configuration.
 * @action list Return the list of configuration groups.
 * @action update Update configuration group name.
 */
class configurationGroup{
	
	/**
	 * Add a new configuration group.
	 * @param configurationGroup ConfigurationGroup Configuration group
	 * @return KalturaConfigurationGroup
	 */
	static add(configurationGroup){
		let kparams = {};
		kparams.configurationGroup = configurationGroup;
		return new kaltura.RequestBuilder('configurationgroup', 'add', kparams);
	};
	
	/**
	 * Remove a configuration group, including its tags, device configurations and devices associations.
	 * @param id string Configuration group identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('configurationgroup', 'delete', kparams);
	};
	
	/**
	 * Return the configuration group details, including group identifiers, tags, and number of associated devices, and list of device configuration.
	 * @param id string Configuration group identifier
	 * @return KalturaConfigurationGroup
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('configurationgroup', 'get', kparams);
	};
	
	/**
	 * Return the list of configuration groups.
	 * @return KalturaConfigurationGroupListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('configurationgroup', 'list', kparams);
	};
	
	/**
	 * Update configuration group name.
	 * @param id string Configuration group identifier
	 * @param configurationGroup ConfigurationGroup Configuration group
	 * @return KalturaConfigurationGroup
	 */
	static update(id, configurationGroup){
		let kparams = {};
		kparams.id = id;
		kparams.configurationGroup = configurationGroup;
		return new kaltura.RequestBuilder('configurationgroup', 'update', kparams);
	};
}
module.exports.configurationGroup = configurationGroup;


/**
 *Class definition for the Kaltura service: configurationGroupDevice.
 * The available service actions:
 * @action add Associate a collection of devices to a configuration group. If a device is already associated to another group – old association is replaced.
 * @action delete Remove a device association.
 * @action get Return the configuration group to which a specific device is associated to.
 * @action list Return the list of associated devices for a given configuration group.
 */
class configurationGroupDevice{
	
	/**
	 * Associate a collection of devices to a configuration group. If a device is already associated to another group – old association is replaced.
	 * @param configurationGroupDevice ConfigurationGroupDevice Configuration group device
	 * @return bool
	 */
	static add(configurationGroupDevice){
		let kparams = {};
		kparams.configurationGroupDevice = configurationGroupDevice;
		return new kaltura.RequestBuilder('configurationgroupdevice', 'add', kparams);
	};
	
	/**
	 * Remove a device association.
	 * @param udid string Device UDID
	 * @return bool
	 */
	static deleteAction(udid){
		let kparams = {};
		kparams.udid = udid;
		return new kaltura.RequestBuilder('configurationgroupdevice', 'delete', kparams);
	};
	
	/**
	 * Return the configuration group to which a specific device is associated to.
	 * @param udid string Device UDID
	 * @return KalturaConfigurationGroupDevice
	 */
	static get(udid){
		let kparams = {};
		kparams.udid = udid;
		return new kaltura.RequestBuilder('configurationgroupdevice', 'get', kparams);
	};
	
	/**
	 * Return the list of associated devices for a given configuration group.
	 * @param filter ConfigurationGroupDeviceFilter Filter option for configuration group identifier
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaConfigurationGroupDeviceListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('configurationgroupdevice', 'list', kparams);
	};
}
module.exports.configurationGroupDevice = configurationGroupDevice;


/**
 *Class definition for the Kaltura service: configurationGroupTag.
 * The available service actions:
 * @action add Add a new tag to a configuration group. If this tag is already associated to another group, request fails.
 * @action delete Remove a tag association from configuration group.
 * @action get Return the configuration group the tag is associated to.
 * @action list Return list of tags for a configuration group.
 */
class configurationGroupTag{
	
	/**
	 * Add a new tag to a configuration group. If this tag is already associated to another group, request fails.
	 * @param configurationGroupTag ConfigurationGroupTag Configuration group tag
	 * @return KalturaConfigurationGroupTag
	 */
	static add(configurationGroupTag){
		let kparams = {};
		kparams.configurationGroupTag = configurationGroupTag;
		return new kaltura.RequestBuilder('configurationgrouptag', 'add', kparams);
	};
	
	/**
	 * Remove a tag association from configuration group.
	 * @param tag string Tag
	 * @return bool
	 */
	static deleteAction(tag){
		let kparams = {};
		kparams.tag = tag;
		return new kaltura.RequestBuilder('configurationgrouptag', 'delete', kparams);
	};
	
	/**
	 * Return the configuration group the tag is associated to.
	 * @param tag string Tag
	 * @return KalturaConfigurationGroupTag
	 */
	static get(tag){
		let kparams = {};
		kparams.tag = tag;
		return new kaltura.RequestBuilder('configurationgrouptag', 'get', kparams);
	};
	
	/**
	 * Return list of tags for a configuration group.
	 * @param filter ConfigurationGroupTagFilter Filter option for configuration group identifier
	 * @return KalturaConfigurationGroupTagListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('configurationgrouptag', 'list', kparams);
	};
}
module.exports.configurationGroupTag = configurationGroupTag;


/**
 *Class definition for the Kaltura service: configurations.
 * The available service actions:
 * @action add Add a new device configuration to a configuration group.
 * @action delete Delete a device configuration.
 * @action get Return the device configuration.
 * @action list Return a list of device configurations of a configuration group.
 * @action update Update device configuration.
 */
class configurations{
	
	/**
	 * Add a new device configuration to a configuration group.
	 * @param configurations Configurations Device configuration
	 * @return KalturaConfigurations
	 */
	static add(configurations){
		let kparams = {};
		kparams.configurations = configurations;
		return new kaltura.RequestBuilder('configurations', 'add', kparams);
	};
	
	/**
	 * Delete a device configuration.
	 * @param id string Configuration identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('configurations', 'delete', kparams);
	};
	
	/**
	 * Return the device configuration.
	 * @param id string Configuration identifier
	 * @return KalturaConfigurations
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('configurations', 'get', kparams);
	};
	
	/**
	 * Return a list of device configurations of a configuration group.
	 * @param filter ConfigurationsFilter Filter option for configuration group id
	 * @return KalturaConfigurationsListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('configurations', 'list', kparams);
	};
	
	/**
	 * Update device configuration.
	 * @param id string Configuration identifier
	 * @param configurations Configurations configuration to update
	 * @return KalturaConfigurations
	 */
	static update(id, configurations){
		let kparams = {};
		kparams.id = id;
		kparams.configurations = configurations;
		return new kaltura.RequestBuilder('configurations', 'update', kparams);
	};
}
module.exports.configurations = configurations;


/**
 *Class definition for the Kaltura service: country.
 * The available service actions:
 * @action list Get the list of countries for the partner with option to filter by countries identifiers.
 */
class country{
	
	/**
	 * Get the list of countries for the partner with option to filter by countries identifiers.
	 * @param filter CountryFilter Country filter
	 * @return KalturaCountryListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('country', 'list', kparams);
	};
}
module.exports.country = country;


/**
 *Class definition for the Kaltura service: coupon.
 * The available service actions:
 * @action get Returns information about a coupon.
 * @action getFilesLinks get all coupon codes of a specific couponGroup.
 */
class coupon{
	
	/**
	 * Returns information about a coupon.
	 * @param code string Coupon code
	 * @return KalturaCoupon
	 */
	static get(code){
		let kparams = {};
		kparams.code = code;
		return new kaltura.RequestBuilder('coupon', 'get', kparams);
	};
	
	/**
	 * get all coupon codes of a specific couponGroup.
	 * @param couponsGroupId int The couponsGroup ID for which its file links will be listed
	 * @return KalturaCouponFilesLinks
	 */
	static getFilesLinks(couponsGroupId){
		let kparams = {};
		kparams.couponsGroupId = couponsGroupId;
		return new kaltura.RequestBuilder('coupon', 'getFilesLinks', kparams);
	};
}
module.exports.coupon = coupon;


/**
 *Class definition for the Kaltura service: couponsGroup.
 * The available service actions:
 * @action add Add coupons group.
 * @action delete Delete a coupons group.
 * @action generate Generate a coupon.
 * @action get Returns information about coupons group.
 * @action list Returns information about partner coupons groups.
 * @action update Update coupons group.
 */
class couponsGroup{
	
	/**
	 * Add coupons group.
	 * @param couponsGroup CouponsGroup Coupons group
	 * @return KalturaCouponsGroup
	 */
	static add(couponsGroup){
		let kparams = {};
		kparams.couponsGroup = couponsGroup;
		return new kaltura.RequestBuilder('couponsgroup', 'add', kparams);
	};
	
	/**
	 * Delete a coupons group.
	 * @param id int Coupons group identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('couponsgroup', 'delete', kparams);
	};
	
	/**
	 * Generate a coupon.
	 * @param id int Coupon group identifier
	 * @param couponGenerationOptions CouponGenerationOptions Coupon generation options
	 * @return KalturaStringValueArray
	 */
	static generate(id, couponGenerationOptions){
		let kparams = {};
		kparams.id = id;
		kparams.couponGenerationOptions = couponGenerationOptions;
		return new kaltura.RequestBuilder('couponsgroup', 'generate', kparams);
	};
	
	/**
	 * Returns information about coupons group.
	 * @param id int Coupons group ID
	 * @return KalturaCouponsGroup
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('couponsgroup', 'get', kparams);
	};
	
	/**
	 * Returns information about partner coupons groups.
	 * @return KalturaCouponsGroupListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('couponsgroup', 'list', kparams);
	};
	
	/**
	 * Update coupons group.
	 * @param id int Coupons group identifier
	 * @param couponsGroup CouponsGroup Coupons group
	 * @return KalturaCouponsGroup
	 */
	static update(id, couponsGroup){
		let kparams = {};
		kparams.id = id;
		kparams.couponsGroup = couponsGroup;
		return new kaltura.RequestBuilder('couponsgroup', 'update', kparams);
	};
}
module.exports.couponsGroup = couponsGroup;


/**
 *Class definition for the Kaltura service: currency.
 * The available service actions:
 * @action list Get the list of currencies for the partner with option to filter by currency codes.
 */
class currency{
	
	/**
	 * Get the list of currencies for the partner with option to filter by currency codes.
	 * @param filter CurrencyFilter currency filter
	 * @return KalturaCurrencyListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('currency', 'list', kparams);
	};
}
module.exports.currency = currency;


/**
 *Class definition for the Kaltura service: deviceBrand.
 * The available service actions:
 * @action add Adds a new device brand which belongs to a specific group.
 * @action list Return a list of the available device brands.
 * @action update Updates an existing device brand which belongs to a specific group.
 */
class deviceBrand{
	
	/**
	 * Adds a new device brand which belongs to a specific group.
	 * @param deviceBrand DeviceBrand Device brand
	 * @return KalturaDeviceBrand
	 */
	static add(deviceBrand){
		let kparams = {};
		kparams.deviceBrand = deviceBrand;
		return new kaltura.RequestBuilder('devicebrand', 'add', kparams);
	};
	
	/**
	 * Return a list of the available device brands.
	 * @param filter DeviceBrandFilter Filter with no more than one condition specified (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaDeviceBrandListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('devicebrand', 'list', kparams);
	};
	
	/**
	 * Updates an existing device brand which belongs to a specific group.
	 * @param id int Device brand's identifier
	 * @param deviceBrand DeviceBrand Device brand
	 * @return KalturaDeviceBrand
	 */
	static update(id, deviceBrand){
		let kparams = {};
		kparams.id = id;
		kparams.deviceBrand = deviceBrand;
		return new kaltura.RequestBuilder('devicebrand', 'update', kparams);
	};
}
module.exports.deviceBrand = deviceBrand;


/**
 *Class definition for the Kaltura service: deviceFamily.
 * The available service actions:
 * @action add Adds a new device family which belongs to a specific group.
 * @action list Return a list of the available device families.
 * @action update Updates an existing device family which belongs to a specific group.
 */
class deviceFamily{
	
	/**
	 * Adds a new device family which belongs to a specific group.
	 * @param deviceFamily DeviceFamily Device family
	 * @return KalturaDeviceFamily
	 */
	static add(deviceFamily){
		let kparams = {};
		kparams.deviceFamily = deviceFamily;
		return new kaltura.RequestBuilder('devicefamily', 'add', kparams);
	};
	
	/**
	 * Return a list of the available device families.
	 * @param filter DeviceFamilyFilter Filter with no more than one condition specified (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaDeviceFamilyListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('devicefamily', 'list', kparams);
	};
	
	/**
	 * Updates an existing device family which belongs to a specific group.
	 * @param id int Device family's identifier
	 * @param deviceFamily DeviceFamily Device family
	 * @return KalturaDeviceFamily
	 */
	static update(id, deviceFamily){
		let kparams = {};
		kparams.id = id;
		kparams.deviceFamily = deviceFamily;
		return new kaltura.RequestBuilder('devicefamily', 'update', kparams);
	};
}
module.exports.deviceFamily = deviceFamily;


/**
 *Class definition for the Kaltura service: deviceReferenceData.
 * The available service actions:
 * @action add add DeviceReferenceData.
 * @action delete Delete existing DeviceReferenceData.
 * @action list Returns the list of available DeviceReferenceData.
 * @action update Update existing DeviceReferenceData.
 */
class deviceReferenceData{
	
	/**
	 * add DeviceReferenceData.
	 * @param objectToAdd DeviceReferenceData DeviceReferenceData details
	 * @return KalturaDeviceReferenceData
	 */
	static add(objectToAdd){
		let kparams = {};
		kparams.objectToAdd = objectToAdd;
		return new kaltura.RequestBuilder('devicereferencedata', 'add', kparams);
	};
	
	/**
	 * Delete existing DeviceReferenceData.
	 * @param id int DeviceReferenceData identifier
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('devicereferencedata', 'delete', kparams);
	};
	
	/**
	 * Returns the list of available DeviceReferenceData.
	 * @param filter DeviceReferenceDataFilter Filter
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaDeviceReferenceDataListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('devicereferencedata', 'list', kparams);
	};
	
	/**
	 * Update existing DeviceReferenceData.
	 * @param id int id of DeviceReferenceData to update
	 * @param objectToUpdate DeviceReferenceData DeviceReferenceData Object to update
	 * @return KalturaDeviceReferenceData
	 */
	static update(id, objectToUpdate){
		let kparams = {};
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new kaltura.RequestBuilder('devicereferencedata', 'update', kparams);
	};
}
module.exports.deviceReferenceData = deviceReferenceData;


/**
 *Class definition for the Kaltura service: discountDetails.
 * The available service actions:
 * @action add Internal API !!! Insert new DiscountDetails for partner.
 * @action delete Internal API !!! Delete DiscountDetails.
 * @action list Returns the list of available discounts details, can be filtered by discount codes.
 * @action update Update discount details.
 */
class discountDetails{
	
	/**
	 * Internal API !!! Insert new DiscountDetails for partner.
	 * @param discountDetails DiscountDetails Discount details Object
	 * @return KalturaDiscountDetails
	 */
	static add(discountDetails){
		let kparams = {};
		kparams.discountDetails = discountDetails;
		return new kaltura.RequestBuilder('discountdetails', 'add', kparams);
	};
	
	/**
	 * Internal API !!! Delete DiscountDetails.
	 * @param id int DiscountDetails id
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('discountdetails', 'delete', kparams);
	};
	
	/**
	 * Returns the list of available discounts details, can be filtered by discount codes.
	 * @param filter DiscountDetailsFilter Filter (optional, default: null)
	 * @return KalturaDiscountDetailsListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('discountdetails', 'list', kparams);
	};
	
	/**
	 * Update discount details.
	 * @param id int DiscountDetails id
	 * @param discountDetails DiscountDetails Discount details Object
	 * @return KalturaDiscountDetails
	 */
	static update(id, discountDetails){
		let kparams = {};
		kparams.id = id;
		kparams.discountDetails = discountDetails;
		return new kaltura.RequestBuilder('discountdetails', 'update', kparams);
	};
}
module.exports.discountDetails = discountDetails;


/**
 *Class definition for the Kaltura service: drmProfile.
 * The available service actions:
 * @action add Internal API !!! Insert new DrmProfile.
 * @action delete Internal API !!! Delete DrmProfile.
 * @action list Returns all DRM adapters for partner.
 */
class drmProfile{
	
	/**
	 * Internal API !!! Insert new DrmProfile.
	 * @param drmProfile DrmProfile Drm adapter Object
	 * @return KalturaDrmProfile
	 */
	static add(drmProfile){
		let kparams = {};
		kparams.drmProfile = drmProfile;
		return new kaltura.RequestBuilder('drmprofile', 'add', kparams);
	};
	
	/**
	 * Internal API !!! Delete DrmProfile.
	 * @param id int Drm adapter id
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('drmprofile', 'delete', kparams);
	};
	
	/**
	 * Returns all DRM adapters for partner.
	 * @return KalturaDrmProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('drmprofile', 'list', kparams);
	};
}
module.exports.drmProfile = drmProfile;


/**
 *Class definition for the Kaltura service: duration.
 * The available service actions:
 * @action list Get the list of optinal Duration codes.
 */
class duration{
	
	/**
	 * Get the list of optinal Duration codes.
	 * @return KalturaDurationListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('duration', 'list', kparams);
	};
}
module.exports.duration = duration;


/**
 *Class definition for the Kaltura service: dynamicList.
 * The available service actions:
 * @action add Add new KalturaDynamicList.
 * @action addFromBulkUpload Add new bulk upload batch job Conversion profile id can be specified in the API (note that the total request body size is limited to 10MB).
 * @action delete Delete existing DynamicList.
 * @action list Returns the list of available DynamicList.
 * @action update Update existing KalturaDynamicList.
 */
class dynamicList{
	
	/**
	 * Add new KalturaDynamicList.
	 * @param objectToAdd DynamicList KalturaDynamicList Object to add
	 * @return KalturaDynamicList
	 */
	static add(objectToAdd){
		let kparams = {};
		kparams.objectToAdd = objectToAdd;
		return new kaltura.RequestBuilder('dynamiclist', 'add', kparams);
	};
	
	/**
	 * Add new bulk upload batch job Conversion profile id can be specified in the API (note that the total request body size is limited to 10MB).
	 * @param fileData file fileData
	 * @param jobData BulkUploadExcelJobData jobData
	 * @param bulkUploadData BulkUploadDynamicListData bulkUploadData
	 * @return KalturaBulkUpload
	 */
	static addFromBulkUpload(fileData, jobData, bulkUploadData){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.jobData = jobData;
		kparams.bulkUploadData = bulkUploadData;
		return new kaltura.RequestBuilder('dynamiclist', 'addFromBulkUpload', kparams, kfiles);
	};
	
	/**
	 * Delete existing DynamicList.
	 * @param id int DynamicList identifier
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('dynamiclist', 'delete', kparams);
	};
	
	/**
	 * Returns the list of available DynamicList.
	 * @param filter DynamicListFilter Filter
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaDynamicListListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('dynamiclist', 'list', kparams);
	};
	
	/**
	 * Update existing KalturaDynamicList.
	 * @param id int id of KalturaDynamicList to update
	 * @param objectToUpdate DynamicList KalturaDynamicList Object to update
	 * @return KalturaDynamicList
	 */
	static update(id, objectToUpdate){
		let kparams = {};
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new kaltura.RequestBuilder('dynamiclist', 'update', kparams);
	};
}
module.exports.dynamicList = dynamicList;


/**
 *Class definition for the Kaltura service: email.
 * The available service actions:
 * @action send Sends email notification.
 */
class email{
	
	/**
	 * Sends email notification.
	 * @param emailMessage EmailMessage email details
	 * @return bool
	 */
	static send(emailMessage){
		let kparams = {};
		kparams.emailMessage = emailMessage;
		return new kaltura.RequestBuilder('email', 'send', kparams);
	};
}
module.exports.email = email;


/**
 *Class definition for the Kaltura service: engagementAdapter.
 * The available service actions:
 * @action add Insert new Engagement adapter for partner.
 * @action delete Delete Engagement adapter by Engagement adapter id.
 * @action generateSharedSecret Generate engagement adapter shared secret.
 * @action get Returns all Engagement adapters for partner : id + name.
 * @action list Returns all Engagement adapters for partner : id + name.
 * @action update Update Engagement adapter details.
 */
class engagementAdapter{
	
	/**
	 * Insert new Engagement adapter for partner.
	 * @param engagementAdapter EngagementAdapter Engagement adapter Object
	 * @return KalturaEngagementAdapter
	 */
	static add(engagementAdapter){
		let kparams = {};
		kparams.engagementAdapter = engagementAdapter;
		return new kaltura.RequestBuilder('engagementadapter', 'add', kparams);
	};
	
	/**
	 * Delete Engagement adapter by Engagement adapter id.
	 * @param id int Engagement adapter identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('engagementadapter', 'delete', kparams);
	};
	
	/**
	 * Generate engagement adapter shared secret.
	 * @param id int Engagement adapter identifier
	 * @return KalturaEngagementAdapter
	 */
	static generateSharedSecret(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('engagementadapter', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Returns all Engagement adapters for partner : id + name.
	 * @param id int Engagement adapter identifier
	 * @return KalturaEngagementAdapter
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('engagementadapter', 'get', kparams);
	};
	
	/**
	 * Returns all Engagement adapters for partner : id + name.
	 * @return KalturaEngagementAdapterListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('engagementadapter', 'list', kparams);
	};
	
	/**
	 * Update Engagement adapter details.
	 * @param id int Engagement adapter identifier
	 * @param engagementAdapter EngagementAdapter Engagement adapter Object
	 * @return KalturaEngagementAdapter
	 */
	static update(id, engagementAdapter){
		let kparams = {};
		kparams.id = id;
		kparams.engagementAdapter = engagementAdapter;
		return new kaltura.RequestBuilder('engagementadapter', 'update', kparams);
	};
}
module.exports.engagementAdapter = engagementAdapter;


/**
 *Class definition for the Kaltura service: engagement.
 * The available service actions:
 * @action add Insert new Engagement for partner.
 * @action delete Delete engagement by engagement adapter id.
 * @action get Return engagement.
 * @action list Returns all Engagement for partner.
 */
class engagement{
	
	/**
	 * Insert new Engagement for partner.
	 * @param engagement Engagement Engagement adapter Object
	 * @return KalturaEngagement
	 */
	static add(engagement){
		let kparams = {};
		kparams.engagement = engagement;
		return new kaltura.RequestBuilder('engagement', 'add', kparams);
	};
	
	/**
	 * Delete engagement by engagement adapter id.
	 * @param id int Engagement identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('engagement', 'delete', kparams);
	};
	
	/**
	 * Return engagement.
	 * @param id int Engagement identifier
	 * @return KalturaEngagement
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('engagement', 'get', kparams);
	};
	
	/**
	 * Returns all Engagement for partner.
	 * @param filter EngagementFilter filter
	 * @return KalturaEngagementListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('engagement', 'list', kparams);
	};
}
module.exports.engagement = engagement;


/**
 *Class definition for the Kaltura service: entitlement.
 * The available service actions:
 * @action applyCoupon Apply new coupon for existing subscription.
 * @action cancel Immediately cancel a subscription, PPV, collection or programAssetGroupOffer. Cancel is possible only if within cancellation window and content not already consumed.
 * @action cancelRenewal Cancel a household service subscription at the next renewal. The subscription stays valid till the next renewal.
 * @action cancelScheduledSubscription Cancel Scheduled Subscription.
 * @action externalReconcile Reconcile the user household&#39;s entitlements with an external entitlements source. This request is frequency protected to avoid too frequent calls per household.
 * @action forceCancel Immediately cancel a subscription, PPV, collection or programAssetGroupOffer. Cancel applies regardless of cancellation window and content consumption status.
 * @action getNextRenewal Returns the data about the next renewal.
 * @action grant Grant household for an entitlement for a PPV, Subscription or programAssetGroupOffer.
 * @action list Gets all the entitled media items for a household.
 * @action swap Swap current entitlement (subscription) with new entitlement (subscription) - only Grant.
 * @action update Update Kaltura Entitelment by Purchase id.
 */
class entitlement{
	
	/**
	 * Apply new coupon for existing subscription.
	 * @param purchaseId int purchase Id
	 * @param couponCode string coupon Code
	 */
	static applyCoupon(purchaseId, couponCode){
		let kparams = {};
		kparams.purchaseId = purchaseId;
		kparams.couponCode = couponCode;
		return new kaltura.RequestBuilder('entitlement', 'applyCoupon', kparams);
	};
	
	/**
	 * Immediately cancel a subscription, PPV, collection or programAssetGroupOffer. Cancel is possible only if within cancellation window and content not already consumed.
	 * @param assetId int The mediaFileID to cancel
	 * @param productType string The product type for the cancelation (enum: KalturaTransactionType)
	 * @return bool
	 */
	static cancel(assetId, productType){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.productType = productType;
		return new kaltura.RequestBuilder('entitlement', 'cancel', kparams);
	};
	
	/**
	 * Cancel a household service subscription at the next renewal. The subscription stays valid till the next renewal.
	 * @param subscriptionId string Subscription Code
	 */
	static cancelRenewal(subscriptionId){
		let kparams = {};
		kparams.subscriptionId = subscriptionId;
		return new kaltura.RequestBuilder('entitlement', 'cancelRenewal', kparams);
	};
	
	/**
	 * Cancel Scheduled Subscription.
	 * @param scheduledSubscriptionId int Scheduled Subscription Identifier
	 * @return bool
	 */
	static cancelScheduledSubscription(scheduledSubscriptionId){
		let kparams = {};
		kparams.scheduledSubscriptionId = scheduledSubscriptionId;
		return new kaltura.RequestBuilder('entitlement', 'cancelScheduledSubscription', kparams);
	};
	
	/**
	 * Reconcile the user household&#39;s entitlements with an external entitlements source. This request is frequency protected to avoid too frequent calls per household.
	 * @return bool
	 */
	static externalReconcile(){
		let kparams = {};
		return new kaltura.RequestBuilder('entitlement', 'externalReconcile', kparams);
	};
	
	/**
	 * Immediately cancel a subscription, PPV, collection or programAssetGroupOffer. Cancel applies regardless of cancellation window and content consumption status.
	 * @param assetId int The mediaFileID to cancel
	 * @param productType string The product type for the cancelation (enum: KalturaTransactionType)
	 * @return bool
	 */
	static forceCancel(assetId, productType){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.productType = productType;
		return new kaltura.RequestBuilder('entitlement', 'forceCancel', kparams);
	};
	
	/**
	 * Returns the data about the next renewal.
	 * @param id int Purchase Id
	 * @return KalturaEntitlementRenewal
	 */
	static getNextRenewal(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('entitlement', 'getNextRenewal', kparams);
	};
	
	/**
	 * Grant household for an entitlement for a PPV, Subscription or programAssetGroupOffer.
	 * @param productId int Identifier for the product package from which this content is offered
	 * @param productType string Product package type. Possible values: PPV, Subscription, Collection (enum: KalturaTransactionType)
	 * @param history bool Controls if the new entitlements grant will appear in the user’s history. True – will add a history entry. False (or if ommited) – no history entry will be added
	 * @param contentId int Identifier for the content. Relevant only if Product type = PPV (optional)
	 * @return bool
	 */
	static grant(productId, productType, history, contentId = 0){
		let kparams = {};
		kparams.productId = productId;
		kparams.productType = productType;
		kparams.history = history;
		kparams.contentId = contentId;
		return new kaltura.RequestBuilder('entitlement', 'grant', kparams);
	};
	
	/**
	 * Gets all the entitled media items for a household.
	 * @param filter EntitlementFilter Request filter
	 * @param pager FilterPager Request pager (optional, default: null)
	 * @return KalturaEntitlementListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('entitlement', 'list', kparams);
	};
	
	/**
	 * Swap current entitlement (subscription) with new entitlement (subscription) - only Grant.
	 * @param currentProductId int Identifier for the current product package
	 * @param newProductId int Identifier for the new product package
	 * @param history bool Controls if the new entitlements swap will appear in the user’s history. True – will add a history entry. False (or if ommited) – no history entry will be added
	 * @return bool
	 */
	static swap(currentProductId, newProductId, history){
		let kparams = {};
		kparams.currentProductId = currentProductId;
		kparams.newProductId = newProductId;
		kparams.history = history;
		return new kaltura.RequestBuilder('entitlement', 'swap', kparams);
	};
	
	/**
	 * Update Kaltura Entitelment by Purchase id.
	 * @param id int Purchase Id
	 * @param entitlement Entitlement KalturaEntitlement object
	 * @return KalturaEntitlement
	 */
	static update(id, entitlement){
		let kparams = {};
		kparams.id = id;
		kparams.entitlement = entitlement;
		return new kaltura.RequestBuilder('entitlement', 'update', kparams);
	};
}
module.exports.entitlement = entitlement;


/**
 *Class definition for the Kaltura service: epg.
 * The available service actions:
 * @action list Returns EPG assets.
 */
class epg{
	
	/**
	 * Returns EPG assets.
	 * @param filter EpgFilter Filters by EPG live asset identifier and date in unix timestamp, e.g. 1610928000(January 18, 2021 0:00:00), 1611014400(January 19, 2021 0:00:00) (optional, default: null)
	 * @return KalturaEpgListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('epg', 'list', kparams);
	};
}
module.exports.epg = epg;


/**
 *Class definition for the Kaltura service: epgServicePartnerConfiguration.
 * The available service actions:
 * @action get Returns EPG cache service partner configurations.
 * @action update Returns EPG cache service partner configurations.
 */
class epgServicePartnerConfiguration{
	
	/**
	 * Returns EPG cache service partner configurations.
	 * @return KalturaEpgServicePartnerConfiguration
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('epgservicepartnerconfiguration', 'get', kparams);
	};
	
	/**
	 * Returns EPG cache service partner configurations.
	 * @param config EpgServicePartnerConfiguration the partner config updates
	 */
	static update(config){
		let kparams = {};
		kparams.config = config;
		return new kaltura.RequestBuilder('epgservicepartnerconfiguration', 'update', kparams);
	};
}
module.exports.epgServicePartnerConfiguration = epgServicePartnerConfiguration;


/**
 *Class definition for the Kaltura service: eventNotificationAction.
 * The available service actions:
 * @action dispatch Dispatches event notification.
 */
class eventNotificationAction{
	
	/**
	 * Dispatches event notification.
	 * @param scope EventNotificationScope Scope
	 * @return bool
	 */
	static dispatch(scope){
		let kparams = {};
		kparams.scope = scope;
		return new kaltura.RequestBuilder('eventnotificationaction', 'dispatch', kparams);
	};
}
module.exports.eventNotificationAction = eventNotificationAction;


/**
 *Class definition for the Kaltura service: eventNotification.
 * The available service actions:
 * @action list Gets all EventNotification items for a given Object id and type.
 * @action update eventNotification update.
 */
class eventNotification{
	
	/**
	 * Gets all EventNotification items for a given Object id and type.
	 * @param filter EventNotificationFilter Filter
	 * @return KalturaEventNotificationListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('eventnotification', 'list', kparams);
	};
	
	/**
	 * eventNotification update.
	 * @param id string id of eventNotification
	 * @param objectToUpdate EventNotification eventNotification details
	 * @return KalturaEventNotification
	 */
	static update(id, objectToUpdate){
		let kparams = {};
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new kaltura.RequestBuilder('eventnotification', 'update', kparams);
	};
}
module.exports.eventNotification = eventNotification;


/**
 *Class definition for the Kaltura service: exportTask.
 * The available service actions:
 * @action add Adds a new bulk export task.
 * @action delete Deletes an existing bulk export task by task identifier.
 * @action get Gets an existing bulk export task by task identifier.
 * @action list Returns bulk export tasks by tasks identifiers.
 * @action update Updates an existing bulk export task by task identifier.
 */
class exportTask{
	
	/**
	 * Adds a new bulk export task.
	 * @param task ExportTask The task model to add
	 * @return KalturaExportTask
	 */
	static add(task){
		let kparams = {};
		kparams.task = task;
		return new kaltura.RequestBuilder('exporttask', 'add', kparams);
	};
	
	/**
	 * Deletes an existing bulk export task by task identifier.
	 * @param id int The identifier of the task to delete
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('exporttask', 'delete', kparams);
	};
	
	/**
	 * Gets an existing bulk export task by task identifier.
	 * @param id int The identifier of the task to get
	 * @return KalturaExportTask
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('exporttask', 'get', kparams);
	};
	
	/**
	 * Returns bulk export tasks by tasks identifiers.
	 * @param filter ExportTaskFilter Bulk export tasks filter (optional, default: null)
	 * @return KalturaExportTaskListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('exporttask', 'list', kparams);
	};
	
	/**
	 * Updates an existing bulk export task by task identifier.
	 * @param id int The task id to update
	 * @param task ExportTask The task model to update
	 * @return KalturaExportTask
	 */
	static update(id, task){
		let kparams = {};
		kparams.id = id;
		kparams.task = task;
		return new kaltura.RequestBuilder('exporttask', 'update', kparams);
	};
}
module.exports.exportTask = exportTask;


/**
 *Class definition for the Kaltura service: externalChannelProfile.
 * The available service actions:
 * @action add Insert new External channel for partner.
 * @action delete Delete External channel by External channel id.
 * @action list Returns all External channels for partner.
 * @action update Update External channel details.
 */
class externalChannelProfile{
	
	/**
	 * Insert new External channel for partner.
	 * @param externalChannel ExternalChannelProfile External channel Object
	 * @return KalturaExternalChannelProfile
	 */
	static add(externalChannel){
		let kparams = {};
		kparams.externalChannel = externalChannel;
		return new kaltura.RequestBuilder('externalchannelprofile', 'add', kparams);
	};
	
	/**
	 * Delete External channel by External channel id.
	 * @param externalChannelId int External channel identifier
	 * @return bool
	 */
	static deleteAction(externalChannelId){
		let kparams = {};
		kparams.externalChannelId = externalChannelId;
		return new kaltura.RequestBuilder('externalchannelprofile', 'delete', kparams);
	};
	
	/**
	 * Returns all External channels for partner.
	 * @param filter ExternalChannelProfileFilter External channel profile filter (optional, default: null)
	 * @return KalturaExternalChannelProfileListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('externalchannelprofile', 'list', kparams);
	};
	
	/**
	 * Update External channel details.
	 * @param externalChannelId int External channel identifier
	 * @param externalChannel ExternalChannelProfile External channel Object
	 * @return KalturaExternalChannelProfile
	 */
	static update(externalChannelId, externalChannel){
		let kparams = {};
		kparams.externalChannelId = externalChannelId;
		kparams.externalChannel = externalChannel;
		return new kaltura.RequestBuilder('externalchannelprofile', 'update', kparams);
	};
}
module.exports.externalChannelProfile = externalChannelProfile;


/**
 *Class definition for the Kaltura service: favorite.
 * The available service actions:
 * @action add Add media to user&#39;s favorite list.
 * @action delete Remove media from user&#39;s favorite list.
 * @action list Retrieving users&#39; favorites.
 */
class favorite{
	
	/**
	 * Add media to user&#39;s favorite list.
	 * @param favorite Favorite Favorite details
	 * @return KalturaFavorite
	 */
	static add(favorite){
		let kparams = {};
		kparams.favorite = favorite;
		return new kaltura.RequestBuilder('favorite', 'add', kparams);
	};
	
	/**
	 * Remove media from user&#39;s favorite list.
	 * @param id int Media identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('favorite', 'delete', kparams);
	};
	
	/**
	 * Retrieving users&#39; favorites.
	 * @param filter FavoriteFilter Request filter (optional, default: null)
	 * @return KalturaFavoriteListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('favorite', 'list', kparams);
	};
}
module.exports.favorite = favorite;


/**
 *Class definition for the Kaltura service: followTvSeries.
 * The available service actions:
 * @action add Add a user&#39;s tv series follow.
 * Possible status codes: UserAlreadyFollowing = 8013, NotFound = 500007, InvalidAssetId = 4024.
 * @action delete Delete a user&#39;s tv series follow.
 * @action deleteWithToken Delete a user&#39;s tv series follow.
 * @action list List user&#39;s tv series follows.
 * Possible status codes:.
 */
class followTvSeries{
	
	/**
	 * Add a user&#39;s tv series follow.
 * Possible status codes: UserAlreadyFollowing = 8013, NotFound = 500007, InvalidAssetId = 4024.
	 * @param followTvSeries FollowTvSeries Follow series request parameters
	 * @return KalturaFollowTvSeries
	 */
	static add(followTvSeries){
		let kparams = {};
		kparams.followTvSeries = followTvSeries;
		return new kaltura.RequestBuilder('followtvseries', 'add', kparams);
	};
	
	/**
	 * Delete a user&#39;s tv series follow.
	 * @param assetId int Asset identifier
	 * @return bool
	 */
	static deleteAction(assetId){
		let kparams = {};
		kparams.assetId = assetId;
		return new kaltura.RequestBuilder('followtvseries', 'delete', kparams);
	};
	
	/**
	 * Delete a user&#39;s tv series follow.
	 * @param assetId int Asset identifier
	 * @param token string User's token identifier
	 * @param partnerId int Partner identifier
	 */
	static deleteWithToken(assetId, token, partnerId){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.token = token;
		kparams.partnerId = partnerId;
		return new kaltura.RequestBuilder('followtvseries', 'deleteWithToken', kparams);
	};
	
	/**
	 * List user&#39;s tv series follows.
 * Possible status codes:.
	 * @param filter FollowTvSeriesFilter Follow TV series filter
	 * @param pager FilterPager pager (optional, default: null)
	 * @return KalturaFollowTvSeriesListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('followtvseries', 'list', kparams);
	};
}
module.exports.followTvSeries = followTvSeries;


/**
 *Class definition for the Kaltura service: homeNetwork.
 * The available service actions:
 * @action add Add a new home network to a household.
 * @action delete Delete household’s existing home network.
 * @action list Retrieve the household’s home networks.
 * @action update Update and existing home network for a household.
 */
class homeNetwork{
	
	/**
	 * Add a new home network to a household.
	 * @param homeNetwork HomeNetwork Home network to add
	 * @return KalturaHomeNetwork
	 */
	static add(homeNetwork){
		let kparams = {};
		kparams.homeNetwork = homeNetwork;
		return new kaltura.RequestBuilder('homenetwork', 'add', kparams);
	};
	
	/**
	 * Delete household’s existing home network.
	 * @param externalId string The network to update
	 * @return bool
	 */
	static deleteAction(externalId){
		let kparams = {};
		kparams.externalId = externalId;
		return new kaltura.RequestBuilder('homenetwork', 'delete', kparams);
	};
	
	/**
	 * Retrieve the household’s home networks.
	 * @return KalturaHomeNetworkListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('homenetwork', 'list', kparams);
	};
	
	/**
	 * Update and existing home network for a household.
	 * @param externalId string Home network identifier
	 * @param homeNetwork HomeNetwork Home network to update
	 * @return KalturaHomeNetwork
	 */
	static update(externalId, homeNetwork){
		let kparams = {};
		kparams.externalId = externalId;
		kparams.homeNetwork = homeNetwork;
		return new kaltura.RequestBuilder('homenetwork', 'update', kparams);
	};
}
module.exports.homeNetwork = homeNetwork;


/**
 *Class definition for the Kaltura service: household.
 * The available service actions:
 * @action add Creates a household for the user.
 * @action delete Fully delete a household. Delete all of the household information, including users, devices, entitlements, payment methods and notification date.
 * @action get Returns the household model.
 * @action getPartnerConfiguration Get household partner configuration.
 * @action list Retrive household for the partner filter by external identifier.
 * @action purge Purge a household. Delete all of the household information, including users, devices, entitlements, payment methods and notification date.
 * @action resetFrequency Reset a household’s time limitation for removing user or device.
 * @action resume Resumed a given household service to its previous service settings.
 * @action retryDelete Retry delete household entities by retention.
 * @action suspend Suspend a given household service. Sets the household status to “suspended&quot;.The household service settings are maintained for later resume.
 * @action update Update the household name and description.
 * @action updatePartnerConfiguration Update household partner configuration.
 */
class household{
	
	/**
	 * Creates a household for the user.
	 * @param household Household Household object
	 * @return KalturaHousehold
	 */
	static add(household){
		let kparams = {};
		kparams.household = household;
		return new kaltura.RequestBuilder('household', 'add', kparams);
	};
	
	/**
	 * Fully delete a household. Delete all of the household information, including users, devices, entitlements, payment methods and notification date.
	 * @param id int Household identifier (optional, default: null)
	 * @return bool
	 */
	static deleteAction(id = null){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('household', 'delete', kparams);
	};
	
	/**
	 * Returns the household model.
	 * @param id int Household identifier (optional, default: null)
	 * @return KalturaHousehold
	 */
	static get(id = null){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('household', 'get', kparams);
	};
	
	/**
	 * Get household partner configuration.
	 * @return KalturaHouseholdPartnerConfiguration
	 */
	static getPartnerConfiguration(){
		let kparams = {};
		return new kaltura.RequestBuilder('household', 'getPartnerConfiguration', kparams);
	};
	
	/**
	 * Retrive household for the partner filter by external identifier.
	 * @param filter HouseholdFilter Filter parameters for filtering out the result
	 * @param pager FilterPager Page size and index. Number of assets to return per page. Possible range 5 ≤ size ≥ 50. If omitted - will be set to 25. If a value > 50 provided – will set to 50 (optional, default: null)
	 * @return KalturaHouseholdListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('household', 'list', kparams);
	};
	
	/**
	 * Purge a household. Delete all of the household information, including users, devices, entitlements, payment methods and notification date.
	 * @param id int Household identifier
	 * @return bool
	 */
	static purge(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('household', 'purge', kparams);
	};
	
	/**
	 * Reset a household’s time limitation for removing user or device.
	 * @param frequencyType string Possible values: devices – reset the device change frequency.
 * users – reset the user add/remove frequency (enum: KalturaHouseholdFrequencyType)
	 * @return KalturaHousehold
	 */
	static resetFrequency(frequencyType){
		let kparams = {};
		kparams.frequencyType = frequencyType;
		return new kaltura.RequestBuilder('household', 'resetFrequency', kparams);
	};
	
	/**
	 * Resumed a given household service to its previous service settings.
	 * @return bool
	 */
	static resume(){
		let kparams = {};
		return new kaltura.RequestBuilder('household', 'resume', kparams);
	};
	
	/**
	 * Retry delete household entities by retention.
	 * @param request RetryDeleteRequest Request data
	 */
	static retryDelete(request){
		let kparams = {};
		kparams.request = request;
		return new kaltura.RequestBuilder('household', 'retryDelete', kparams);
	};
	
	/**
	 * Suspend a given household service. Sets the household status to “suspended&quot;.The household service settings are maintained for later resume.
	 * @param roleId int roleId (optional, default: null)
	 * @return bool
	 */
	static suspend(roleId = null){
		let kparams = {};
		kparams.roleId = roleId;
		return new kaltura.RequestBuilder('household', 'suspend', kparams);
	};
	
	/**
	 * Update the household name and description.
	 * @param household Household Household object
	 * @return KalturaHousehold
	 */
	static update(household){
		let kparams = {};
		kparams.household = household;
		return new kaltura.RequestBuilder('household', 'update', kparams);
	};
	
	/**
	 * Update household partner configuration.
	 * @param configuration HouseholdPartnerConfiguration Household partner configuration details
	 */
	static updatePartnerConfiguration(configuration){
		let kparams = {};
		kparams.configuration = configuration;
		return new kaltura.RequestBuilder('household', 'updatePartnerConfiguration', kparams);
	};
}
module.exports.household = household;


/**
 *Class definition for the Kaltura service: householdCoupon.
 * The available service actions:
 * @action add householdCoupon add.
 * @action delete Remove coupon from household.
 * @action list Gets all HouseholdCoupon items for a household.
 */
class householdCoupon{
	
	/**
	 * householdCoupon add.
	 * @param objectToAdd HouseholdCoupon householdCoupon details
	 * @return KalturaHouseholdCoupon
	 */
	static add(objectToAdd){
		let kparams = {};
		kparams.objectToAdd = objectToAdd;
		return new kaltura.RequestBuilder('householdcoupon', 'add', kparams);
	};
	
	/**
	 * Remove coupon from household.
	 * @param id string Coupon code
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('householdcoupon', 'delete', kparams);
	};
	
	/**
	 * Gets all HouseholdCoupon items for a household.
	 * @param filter HouseholdCouponFilter Filter (optional, default: null)
	 * @return KalturaHouseholdCouponListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('householdcoupon', 'list', kparams);
	};
}
module.exports.householdCoupon = householdCoupon;


/**
 *Class definition for the Kaltura service: householdDevice.
 * The available service actions:
 * @action add Add device to household.
 * @action addByPin Registers a device to a household using pin code.
 * @action delete Removes a device from household.
 * @action deleteDynamicData Deletes dynamic data item with key  for device with identifier.
 * @action generatePin Generates device pin to use when adding a device to household by pin.
 * @action get Returns device registration status to the supplied household.
 * @action list Returns the devices within the household.
 * @action loginWithPin User sign-in via a time-expired sign-in PIN.
 * @action retryDelete Retry delete household device entities by retention.
 * @action update Update the name of the device by UDID.
 * @action updateStatus Update the name of the device by UDID.
 * @action upsertDynamicData Adds or updates dynamic data item for device with identifier udid. If it is needed to update several items, use a multi-request to avoid race conditions.
 */
class householdDevice{
	
	/**
	 * Add device to household.
	 * @param device HouseholdDevice Device
	 * @return KalturaHouseholdDevice
	 */
	static add(device){
		let kparams = {};
		kparams.device = device;
		return new kaltura.RequestBuilder('householddevice', 'add', kparams);
	};
	
	/**
	 * Registers a device to a household using pin code.
	 * @param deviceName string Device name
	 * @param pin string Pin code
	 * @return KalturaHouseholdDevice
	 */
	static addByPin(deviceName, pin){
		let kparams = {};
		kparams.deviceName = deviceName;
		kparams.pin = pin;
		return new kaltura.RequestBuilder('householddevice', 'addByPin', kparams);
	};
	
	/**
	 * Removes a device from household.
	 * @param udid string device UDID
	 * @return bool
	 */
	static deleteAction(udid){
		let kparams = {};
		kparams.udid = udid;
		return new kaltura.RequestBuilder('householddevice', 'delete', kparams);
	};
	
	/**
	 * Deletes dynamic data item with key  for device with identifier.
	 * @param udid string Unique identifier of device
	 * @param key string Key of dynamic data item
	 * @return bool
	 */
	static deleteDynamicData(udid, key){
		let kparams = {};
		kparams.udid = udid;
		kparams.key = key;
		return new kaltura.RequestBuilder('householddevice', 'deleteDynamicData', kparams);
	};
	
	/**
	 * Generates device pin to use when adding a device to household by pin.
	 * @param udid string Device UDID
	 * @param brandId int Device brand identifier
	 * @return KalturaDevicePin
	 */
	static generatePin(udid, brandId){
		let kparams = {};
		kparams.udid = udid;
		kparams.brandId = brandId;
		return new kaltura.RequestBuilder('householddevice', 'generatePin', kparams);
	};
	
	/**
	 * Returns device registration status to the supplied household.
	 * @param udid string device id (optional, default: null)
	 * @return KalturaHouseholdDevice
	 */
	static get(udid = null){
		let kparams = {};
		kparams.udid = udid;
		return new kaltura.RequestBuilder('householddevice', 'get', kparams);
	};
	
	/**
	 * Returns the devices within the household.
	 * @param filter HouseholdDeviceFilter Household devices filter (optional, default: null)
	 * @return KalturaHouseholdDeviceListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('householddevice', 'list', kparams);
	};
	
	/**
	 * User sign-in via a time-expired sign-in PIN.
	 * @param partnerId int Partner Identifier
	 * @param pin string pin code
	 * @param udid string Device UDID (optional, default: null)
	 * @param extraParams map extra params (optional, default: null)
	 * @return KalturaLoginResponse
	 */
	static loginWithPin(partnerId, pin, udid = null, extraParams = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.pin = pin;
		kparams.udid = udid;
		kparams.extraParams = extraParams;
		return new kaltura.RequestBuilder('householddevice', 'loginWithPin', kparams);
	};
	
	/**
	 * Retry delete household device entities by retention.
	 * @param request RetryDeleteRequest Request data
	 */
	static retryDelete(request){
		let kparams = {};
		kparams.request = request;
		return new kaltura.RequestBuilder('householddevice', 'retryDelete', kparams);
	};
	
	/**
	 * Update the name of the device by UDID.
	 * @param udid string Device UDID
	 * @param device HouseholdDevice Device object
	 * @return KalturaHouseholdDevice
	 */
	static update(udid, device){
		let kparams = {};
		kparams.udid = udid;
		kparams.device = device;
		return new kaltura.RequestBuilder('householddevice', 'update', kparams);
	};
	
	/**
	 * Update the name of the device by UDID.
	 * @param udid string Device UDID
	 * @param status string Device status (enum: KalturaDeviceStatus)
	 * @return bool
	 */
	static updateStatus(udid, status){
		let kparams = {};
		kparams.udid = udid;
		kparams.status = status;
		return new kaltura.RequestBuilder('householddevice', 'updateStatus', kparams);
	};
	
	/**
	 * Adds or updates dynamic data item for device with identifier udid. If it is needed to update several items, use a multi-request to avoid race conditions.
	 * @param udid string Unique identifier of device
	 * @param key string Key of dynamic data item. Max length of key is 125 characters
	 * @param value StringValue Value of dynamic data item. Max length of value is 255 characters
	 * @return KalturaDynamicData
	 */
	static upsertDynamicData(udid, key, value){
		let kparams = {};
		kparams.udid = udid;
		kparams.key = key;
		kparams.value = value;
		return new kaltura.RequestBuilder('householddevice', 'upsertDynamicData', kparams);
	};
}
module.exports.householdDevice = householdDevice;


/**
 *Class definition for the Kaltura service: householdLimitations.
 * The available service actions:
 * @action add Add household limitation.
 * @action delete Delete household limitation.
 * @action get Get the limitation module by id.
 * @action isUsed Checks if the DLM is used.
 * @action list Get the list of PartnerConfiguration.
 * @action update Updates household limitation.
 */
class householdLimitations{
	
	/**
	 * Add household limitation.
	 * @param householdLimitations HouseholdLimitations Household limitations
	 * @return KalturaHouseholdLimitations
	 */
	static add(householdLimitations){
		let kparams = {};
		kparams.householdLimitations = householdLimitations;
		return new kaltura.RequestBuilder('householdlimitations', 'add', kparams);
	};
	
	/**
	 * Delete household limitation.
	 * @param householdLimitationsId int Id of household limitation
	 * @return bool
	 */
	static deleteAction(householdLimitationsId){
		let kparams = {};
		kparams.householdLimitationsId = householdLimitationsId;
		return new kaltura.RequestBuilder('householdlimitations', 'delete', kparams);
	};
	
	/**
	 * Get the limitation module by id.
	 * @param id int Household limitations module identifier
	 * @return KalturaHouseholdLimitations
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('householdlimitations', 'get', kparams);
	};
	
	/**
	 * Checks if the DLM is used.
	 * @param dlmId int Household limitations module identifier
	 * @return bool
	 */
	static isUsed(dlmId){
		let kparams = {};
		kparams.dlmId = dlmId;
		return new kaltura.RequestBuilder('householdlimitations', 'isUsed', kparams);
	};
	
	/**
	 * Get the list of PartnerConfiguration.
	 * @return KalturaHouseholdLimitationsListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('householdlimitations', 'list', kparams);
	};
	
	/**
	 * Updates household limitation.
	 * @param dlmId int Id of household limitation
	 * @param householdLimitation HouseholdLimitations household limitation
	 * @return KalturaHouseholdLimitations
	 */
	static update(dlmId, householdLimitation){
		let kparams = {};
		kparams.dlmId = dlmId;
		kparams.householdLimitation = householdLimitation;
		return new kaltura.RequestBuilder('householdlimitations', 'update', kparams);
	};
}
module.exports.householdLimitations = householdLimitations;


/**
 *Class definition for the Kaltura service: householdPaymentGateway.
 * The available service actions:
 * @action disable Disable payment-gateway on the household.
 * @action enable Enable a payment-gateway provider for the household.
 * @action getChargeID Get a household’s billing account identifier (charge ID) for a given payment gateway.
 * @action invoke Gets the Payment Gateway Configuration for the payment gateway identifier given.
 * @action list Get a list of all configured Payment Gateways providers available for the account. For each payment is provided with the household associated payment methods.
 * @action resume Resumes all the entitlements of the given payment gateway.
 * @action setChargeID Set user billing account identifier (charge ID), for a specific household and a specific payment gateway.
 * @action suspend Suspends all the entitlements of the given payment gateway.
 */
class householdPaymentGateway{
	
	/**
	 * Disable payment-gateway on the household.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @return bool
	 */
	static disable(paymentGatewayId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'disable', kparams);
	};
	
	/**
	 * Enable a payment-gateway provider for the household.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @return bool
	 */
	static enable(paymentGatewayId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'enable', kparams);
	};
	
	/**
	 * Get a household’s billing account identifier (charge ID) for a given payment gateway.
	 * @param paymentGatewayExternalId string External identifier for the payment gateway
	 * @return string
	 */
	static getChargeID(paymentGatewayExternalId){
		let kparams = {};
		kparams.paymentGatewayExternalId = paymentGatewayExternalId;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'getChargeID', kparams);
	};
	
	/**
	 * Gets the Payment Gateway Configuration for the payment gateway identifier given.
	 * @param paymentGatewayId int The payemnt gateway for which to return the registration URL/s for the household. If omitted – return the regisration URL for the household for the default payment gateway
	 * @param intent string Represent the client’s intent for working with the payment gateway. Intent options to be coordinated with the applicable payment gateway adapter
	 * @param extraParameters array Additional parameters to send to the payment gateway adapter
	 * @return KalturaPaymentGatewayConfiguration
	 */
	static invoke(paymentGatewayId, intent, extraParameters){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.intent = intent;
		kparams.extraParameters = extraParameters;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'invoke', kparams);
	};
	
	/**
	 * Get a list of all configured Payment Gateways providers available for the account. For each payment is provided with the household associated payment methods.
	 * @return KalturaHouseholdPaymentGatewayListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('householdpaymentgateway', 'list', kparams);
	};
	
	/**
	 * Resumes all the entitlements of the given payment gateway.
	 * @param paymentGatewayId int Payment gateway ID
	 * @param adapterData array Adapter data (optional, default: null)
	 */
	static resume(paymentGatewayId, adapterData = null){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.adapterData = adapterData;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'resume', kparams);
	};
	
	/**
	 * Set user billing account identifier (charge ID), for a specific household and a specific payment gateway.
	 * @param paymentGatewayExternalId string External identifier for the payment gateway
	 * @param chargeId string The billing user account identifier for this household at the given payment gateway
	 * @return bool
	 */
	static setChargeID(paymentGatewayExternalId, chargeId){
		let kparams = {};
		kparams.paymentGatewayExternalId = paymentGatewayExternalId;
		kparams.chargeId = chargeId;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'setChargeID', kparams);
	};
	
	/**
	 * Suspends all the entitlements of the given payment gateway.
	 * @param paymentGatewayId int Payment gateway ID
	 * @param suspendSettings SuspendSettings suspend settings (optional, default: null)
	 */
	static suspend(paymentGatewayId, suspendSettings = null){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.suspendSettings = suspendSettings;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'suspend', kparams);
	};
}
module.exports.householdPaymentGateway = householdPaymentGateway;


/**
 *Class definition for the Kaltura service: householdPaymentMethod.
 * The available service actions:
 * @action add Add a new payment method for household.
 * @action forceRemove Force remove of a payment method of the household.
 * @action list Get a list of all payment methods of the household.
 * @action remove Removes a payment method of the household.
 * @action setAsDefault Set a payment method as default for the household.
 */
class householdPaymentMethod{
	
	/**
	 * Add a new payment method for household.
	 * @param householdPaymentMethod HouseholdPaymentMethod Household payment method
	 * @return KalturaHouseholdPaymentMethod
	 */
	static add(householdPaymentMethod){
		let kparams = {};
		kparams.householdPaymentMethod = householdPaymentMethod;
		return new kaltura.RequestBuilder('householdpaymentmethod', 'add', kparams);
	};
	
	/**
	 * Force remove of a payment method of the household.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @param paymentMethodId int Payment method Identifier
	 * @return bool
	 */
	static forceRemove(paymentGatewayId, paymentMethodId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new kaltura.RequestBuilder('householdpaymentmethod', 'forceRemove', kparams);
	};
	
	/**
	 * Get a list of all payment methods of the household.
	 * @return KalturaHouseholdPaymentMethodListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('householdpaymentmethod', 'list', kparams);
	};
	
	/**
	 * Removes a payment method of the household.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @param paymentMethodId int Payment method Identifier
	 * @return bool
	 */
	static remove(paymentGatewayId, paymentMethodId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new kaltura.RequestBuilder('householdpaymentmethod', 'remove', kparams);
	};
	
	/**
	 * Set a payment method as default for the household.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @param paymentMethodId int Payment method Identifier
	 * @return bool
	 */
	static setAsDefault(paymentGatewayId, paymentMethodId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new kaltura.RequestBuilder('householdpaymentmethod', 'setAsDefault', kparams);
	};
}
module.exports.householdPaymentMethod = householdPaymentMethod;


/**
 *Class definition for the Kaltura service: householdPremiumService.
 * The available service actions:
 * @action list Returns all the premium services allowed for the household.
 */
class householdPremiumService{
	
	/**
	 * Returns all the premium services allowed for the household.
	 * @return KalturaHouseholdPremiumServiceListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('householdpremiumservice', 'list', kparams);
	};
}
module.exports.householdPremiumService = householdPremiumService;


/**
 *Class definition for the Kaltura service: householdQuota.
 * The available service actions:
 * @action get Returns the household&#39;s quota data.
 */
class householdQuota{
	
	/**
	 * Returns the household&#39;s quota data.
	 * @return KalturaHouseholdQuota
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('householdquota', 'get', kparams);
	};
}
module.exports.householdQuota = householdQuota;


/**
 *Class definition for the Kaltura service: householdSegment.
 * The available service actions:
 * @action add householdSegment add.
 * @action delete Remove segment from household.
 * @action list Gets all HouseholdSegment items for a household.
 */
class householdSegment{
	
	/**
	 * householdSegment add.
	 * @param objectToAdd HouseholdSegment householdSegment details
	 * @return KalturaHouseholdSegment
	 */
	static add(objectToAdd){
		let kparams = {};
		kparams.objectToAdd = objectToAdd;
		return new kaltura.RequestBuilder('householdsegment', 'add', kparams);
	};
	
	/**
	 * Remove segment from household.
	 * @param id int Segment identifier
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('householdsegment', 'delete', kparams);
	};
	
	/**
	 * Gets all HouseholdSegment items for a household.
	 * @param filter HouseholdSegmentFilter Filter (optional, default: null)
	 * @return KalturaHouseholdSegmentListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('householdsegment', 'list', kparams);
	};
}
module.exports.householdSegment = householdSegment;


/**
 *Class definition for the Kaltura service: householdUser.
 * The available service actions:
 * @action add Adds a user to household.
 * @action delete Removes a user from household.
 * @action list Returns the users within the household.
 */
class householdUser{
	
	/**
	 * Adds a user to household.
	 * @param householdUser HouseholdUser User details to add
	 * @return KalturaHouseholdUser
	 */
	static add(householdUser){
		let kparams = {};
		kparams.householdUser = householdUser;
		return new kaltura.RequestBuilder('householduser', 'add', kparams);
	};
	
	/**
	 * Removes a user from household.
	 * @param id string The identifier of the user to delete
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('householduser', 'delete', kparams);
	};
	
	/**
	 * Returns the users within the household.
	 * @param filter HouseholdUserFilter Household user filter (optional, default: null)
	 * @return KalturaHouseholdUserListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('householduser', 'list', kparams);
	};
}
module.exports.householdUser = householdUser;


/**
 *Class definition for the Kaltura service: image.
 * The available service actions:
 * @action add Add a new image.
 * @action delete Delete an existing image.
 * @action list Get the list of images by different filtering.
 * @action setContent Sets the content of an existing image.
 */
class image{
	
	/**
	 * Add a new image.
	 * @param image Image Image
	 * @return KalturaImage
	 */
	static add(image){
		let kparams = {};
		kparams.image = image;
		return new kaltura.RequestBuilder('image', 'add', kparams);
	};
	
	/**
	 * Delete an existing image.
	 * @param id int Image ID
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('image', 'delete', kparams);
	};
	
	/**
	 * Get the list of images by different filtering.
	 * @param filter ImageFilter Filter
	 * @return KalturaImageListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('image', 'list', kparams);
	};
	
	/**
	 * Sets the content of an existing image.
	 * @param id int Image ID
	 * @param content ContentResource Content of the image to set
	 */
	static setContent(id, content){
		let kparams = {};
		kparams.id = id;
		kparams.content = content;
		return new kaltura.RequestBuilder('image', 'setContent', kparams);
	};
}
module.exports.image = image;


/**
 *Class definition for the Kaltura service: imageType.
 * The available service actions:
 * @action add Add a new image type.
 * @action delete Delete an existing image type.
 * @action list Get the list of image types for the partner.
 * @action update Update an existing image type.
 */
class imageType{
	
	/**
	 * Add a new image type.
	 * @param imageType ImageType Image type object
	 * @return KalturaImageType
	 */
	static add(imageType){
		let kparams = {};
		kparams.imageType = imageType;
		return new kaltura.RequestBuilder('imagetype', 'add', kparams);
	};
	
	/**
	 * Delete an existing image type.
	 * @param id int Image type ID
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('imagetype', 'delete', kparams);
	};
	
	/**
	 * Get the list of image types for the partner.
	 * @param filter ImageTypeFilter Filter (optional, default: null)
	 * @return KalturaImageTypeListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('imagetype', 'list', kparams);
	};
	
	/**
	 * Update an existing image type.
	 * @param id int Image type ID
	 * @param imageType ImageType Image type object
	 * @return KalturaImageType
	 */
	static update(id, imageType){
		let kparams = {};
		kparams.id = id;
		kparams.imageType = imageType;
		return new kaltura.RequestBuilder('imagetype', 'update', kparams);
	};
}
module.exports.imageType = imageType;


/**
 *Class definition for the Kaltura service: inboxMessage.
 * The available service actions:
 * @action get TBD.
 * @action list List inbox messages.
 * @action updateStatus Updates the message status.
 */
class inboxMessage{
	
	/**
	 * TBD.
	 * @param id string message id
	 * @return KalturaInboxMessage
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('inboxmessage', 'get', kparams);
	};
	
	/**
	 * List inbox messages.
	 * @param filter InboxMessageFilter filter (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaInboxMessageListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('inboxmessage', 'list', kparams);
	};
	
	/**
	 * Updates the message status.
	 * @param id string Message identifier
	 * @param status string Message status (enum: KalturaInboxMessageStatus)
	 * @return bool
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('inboxmessage', 'updateStatus', kparams);
	};
}
module.exports.inboxMessage = inboxMessage;


/**
 *Class definition for the Kaltura service: IngestProfile.
 * The available service actions:
 * @action add Insert new ingest profile for partner.
 * @action delete Delete ingest profiles by ingest profiles id.
 * @action list Returns all ingest profiles for partner.
 * @action update Update ingest profile details.
 */
class IngestProfile{
	
	/**
	 * Insert new ingest profile for partner.
	 * @param ingestProfile IngestProfile ingest profile Object to be added
	 * @return KalturaIngestProfile
	 */
	static add(ingestProfile){
		let kparams = {};
		kparams.ingestProfile = ingestProfile;
		return new kaltura.RequestBuilder('ingestprofile', 'add', kparams);
	};
	
	/**
	 * Delete ingest profiles by ingest profiles id.
	 * @param ingestProfileId int ingest profile Identifier
	 * @return bool
	 */
	static deleteAction(ingestProfileId){
		let kparams = {};
		kparams.ingestProfileId = ingestProfileId;
		return new kaltura.RequestBuilder('ingestprofile', 'delete', kparams);
	};
	
	/**
	 * Returns all ingest profiles for partner.
	 * @return KalturaIngestProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('ingestprofile', 'list', kparams);
	};
	
	/**
	 * Update ingest profile details.
	 * @param ingestProfileId int ingest profile Identifier
	 * @param ingestProfile IngestProfile ingest profile Object
	 * @return KalturaIngestProfile
	 */
	static update(ingestProfileId, ingestProfile){
		let kparams = {};
		kparams.ingestProfileId = ingestProfileId;
		kparams.ingestProfile = ingestProfile;
		return new kaltura.RequestBuilder('ingestprofile', 'update', kparams);
	};
}
module.exports.IngestProfile = IngestProfile;


/**
 *Class definition for the Kaltura service: ingestStatus.
 * The available service actions:
 * @action getEpgDetails Returns information about specific Ingest job.
 * @action getEpgList Response with list of ingest jobs.
 * @action getEpgProgramResultList Get as input ingest job id, filter and pager and response with page of filtered detailed ingest job results.
 * @action getPartnerConfiguration Returns Core Ingest service partner configurations.
 * @action getVodAssetResult List detailed results of ingested assets.
 * @action updatePartnerConfiguration Returns Core Ingest service partner configurations.
 */
class ingestStatus{
	
	/**
	 * Returns information about specific Ingest job.
	 * @param ingestId int The id of the requested ingest job
	 * @return KalturaIngestEpgDetails
	 */
	static getEpgDetails(ingestId){
		let kparams = {};
		kparams.ingestId = ingestId;
		return new kaltura.RequestBuilder('ingeststatus', 'getEpgDetails', kparams);
	};
	
	/**
	 * Response with list of ingest jobs.
	 * @param idsFilter IngestByIdsFilter Filter pager (optional, default: null)
	 * @param filter IngestByCompoundFilter Filter pager (optional, default: null)
	 * @param pager FilterPager Filter pager (optional, default: null)
	 * @return KalturaIngestStatusEpgListResponse
	 */
	static getEpgList(idsFilter = null, filter = null, pager = null){
		let kparams = {};
		kparams.idsFilter = idsFilter;
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('ingeststatus', 'getEpgList', kparams);
	};
	
	/**
	 * Get as input ingest job id, filter and pager and response with page of filtered detailed ingest job results.
	 * @param ingestId int The id of the requested ingest job
	 * @param filter IngestEpgProgramResultFilter Filter for Ingest program, results (optional, default: null)
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaIngestStatusEpgProgramResultListResponse
	 */
	static getEpgProgramResultList(ingestId, filter = null, pager = null){
		let kparams = {};
		kparams.ingestId = ingestId;
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('ingeststatus', 'getEpgProgramResultList', kparams);
	};
	
	/**
	 * Returns Core Ingest service partner configurations.
	 * @return KalturaIngestStatusPartnerConfiguration
	 */
	static getPartnerConfiguration(){
		let kparams = {};
		return new kaltura.RequestBuilder('ingeststatus', 'getPartnerConfiguration', kparams);
	};
	
	/**
	 * List detailed results of ingested assets.
	 * @param filter VodIngestAssetResultFilter Filter object with parameters to filter selected ingest processes and assets (optional, default: null)
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaVodIngestAssetResultResponse
	 */
	static getVodAssetResult(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('ingeststatus', 'getVodAssetResult', kparams);
	};
	
	/**
	 * Returns Core Ingest service partner configurations.
	 * @param config IngestStatusPartnerConfiguration the partner config updates
	 */
	static updatePartnerConfiguration(config){
		let kparams = {};
		kparams.config = config;
		return new kaltura.RequestBuilder('ingeststatus', 'updatePartnerConfiguration', kparams);
	};
}
module.exports.ingestStatus = ingestStatus;


/**
 *Class definition for the Kaltura service: iot.
 * The available service actions:
 * @action getClientConfiguration Get iot Client Configuration.
 * @action register Register IOT device.
 */
class iot{
	
	/**
	 * Get iot Client Configuration.
	 * @return KalturaIotClientConfiguration
	 */
	static getClientConfiguration(){
		let kparams = {};
		return new kaltura.RequestBuilder('iot', 'getClientConfiguration', kparams);
	};
	
	/**
	 * Register IOT device.
	 * @return bool
	 */
	static register(){
		let kparams = {};
		return new kaltura.RequestBuilder('iot', 'register', kparams);
	};
}
module.exports.iot = iot;


/**
 *Class definition for the Kaltura service: iotProfile.
 * The available service actions:
 * @action add Add new environment in aws.
 */
class iotProfile{
	
	/**
	 * Add new environment in aws.
	 * @return bool
	 */
	static add(){
		let kparams = {};
		return new kaltura.RequestBuilder('iotprofile', 'add', kparams);
	};
}
module.exports.iotProfile = iotProfile;


/**
 *Class definition for the Kaltura service: label.
 * The available service actions:
 * @action add Create a new label associated with a predefined entity attribute. Currently supports only labels on KalturaMediaFile.
 * @action delete Deletes the existing label by its identifier.
 * @action list Gets list of labels which meet the filter criteria.
 * @action update Updates the existing label with a new value.
 */
class label{
	
	/**
	 * Create a new label associated with a predefined entity attribute. Currently supports only labels on KalturaMediaFile.
	 * @param label Label KalturaLabel object with defined Value
	 * @return KalturaLabel
	 */
	static add(label){
		let kparams = {};
		kparams.label = label;
		return new kaltura.RequestBuilder('label', 'add', kparams);
	};
	
	/**
	 * Deletes the existing label by its identifier.
	 * @param id int The identifier of label
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('label', 'delete', kparams);
	};
	
	/**
	 * Gets list of labels which meet the filter criteria.
	 * @param filter LabelFilter Filter
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaLabelListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('label', 'list', kparams);
	};
	
	/**
	 * Updates the existing label with a new value.
	 * @param id int The identifier of label
	 * @param label Label KalturaLabel object with new Value
	 * @return KalturaLabel
	 */
	static update(id, label){
		let kparams = {};
		kparams.id = id;
		kparams.label = label;
		return new kaltura.RequestBuilder('label', 'update', kparams);
	};
}
module.exports.label = label;


/**
 *Class definition for the Kaltura service: language.
 * The available service actions:
 * @action list Get the list of languages for the partner with option to filter by language codes.
 */
class language{
	
	/**
	 * Get the list of languages for the partner with option to filter by language codes.
	 * @param filter LanguageFilter language filter
	 * @return KalturaLanguageListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('language', 'list', kparams);
	};
}
module.exports.language = language;


/**
 *Class definition for the Kaltura service: licensedUrl.
 * The available service actions:
 * @action get Get the URL for playing an asset - program, media or recording.
 */
class licensedUrl{
	
	/**
	 * Get the URL for playing an asset - program, media or recording.
	 * @param request LicensedUrlBaseRequest Licensed URL request parameters
	 * @return KalturaLicensedUrl
	 */
	static get(request){
		let kparams = {};
		kparams.request = request;
		return new kaltura.RequestBuilder('licensedurl', 'get', kparams);
	};
}
module.exports.licensedUrl = licensedUrl;


/**
 *Class definition for the Kaltura service: lineup.
 * The available service actions:
 * @action get Returns regional lineup (list of lineup channel asset objects) based on the requester session characteristics and his region.
 * NOTE: Calling lineup.get action using HTTP POST is supported only for tests (non production environment) and is rate limited or blocked.
 * For production, HTTP GET shall be used: GET https://{Host_IP}/{build version}/api_v3/service/lineup/action/get.
 * @action invalidate Sends lineup requested invalidation.
 * @action list Returns list of lineup regional linear channels associated with one LCN and its region information. Allows to apply sorting and filtering by LCN and linear channels.
 * @action sendUpdatedNotification Sends lineup update requested notification.
 */
class lineup{
	
	/**
	 * Returns regional lineup (list of lineup channel asset objects) based on the requester session characteristics and his region.
 * NOTE: Calling lineup.get action using HTTP POST is supported only for tests (non production environment) and is rate limited or blocked.
 * For production, HTTP GET shall be used: GET https://{Host_IP}/{build version}/api_v3/service/lineup/action/get.
	 * @param pageIndex int Page index - The page index to retrieve, (if it is not sent the default page size is 1)
	 * @param pageSize int Page size - The page size to retrieve. Must be one of the follow numbers: 100, 200, 800, 1200, 1600 (if it is not sent the default page size is 500)
	 * @return KalturaLineupChannelAssetListResponse
	 */
	static get(pageIndex, pageSize){
		let kparams = {};
		kparams.pageIndex = pageIndex;
		kparams.pageSize = pageSize;
		return new kaltura.RequestBuilder('lineup', 'get', kparams);
	};
	
	/**
	 * Sends lineup requested invalidation.
	 * @return bool
	 */
	static invalidate(){
		let kparams = {};
		return new kaltura.RequestBuilder('lineup', 'invalidate', kparams);
	};
	
	/**
	 * Returns list of lineup regional linear channels associated with one LCN and its region information. Allows to apply sorting and filtering by LCN and linear channels.
	 * @param filter LineupRegionalChannelFilter Request filter
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaLineupChannelAssetListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('lineup', 'list', kparams);
	};
	
	/**
	 * Sends lineup update requested notification.
	 * @param regionIds string Region IDs separated by commas
	 * @return bool
	 */
	static sendUpdatedNotification(regionIds){
		let kparams = {};
		kparams.regionIds = regionIds;
		return new kaltura.RequestBuilder('lineup', 'sendUpdatedNotification', kparams);
	};
}
module.exports.lineup = lineup;


/**
 *Class definition for the Kaltura service: liveToVod.
 * The available service actions:
 * @action getConfiguration Get existing L2V configuration for both the partner level and all channels level.
 * @action getLinearAssetConfiguration Get existing L2V configuration for a specific linear asset.
 * @action getPartnerConfiguration Get existing L2V partner configuration.
 * @action updateLinearAssetConfiguration Set L2V configuration for a specific Linear channel.
 * @action updatePartnerConfiguration Set L2V configuration on the partner level.
 */
class liveToVod{
	
	/**
	 * Get existing L2V configuration for both the partner level and all channels level.
	 * @return KalturaLiveToVodFullConfiguration
	 */
	static getConfiguration(){
		let kparams = {};
		return new kaltura.RequestBuilder('livetovod', 'getConfiguration', kparams);
	};
	
	/**
	 * Get existing L2V configuration for a specific linear asset.
	 * @param linearAssetId int Linear asset's identifier
	 * @return KalturaLiveToVodLinearAssetConfiguration
	 */
	static getLinearAssetConfiguration(linearAssetId){
		let kparams = {};
		kparams.linearAssetId = linearAssetId;
		return new kaltura.RequestBuilder('livetovod', 'getLinearAssetConfiguration', kparams);
	};
	
	/**
	 * Get existing L2V partner configuration.
	 * @return KalturaLiveToVodPartnerConfiguration
	 */
	static getPartnerConfiguration(){
		let kparams = {};
		return new kaltura.RequestBuilder('livetovod', 'getPartnerConfiguration', kparams);
	};
	
	/**
	 * Set L2V configuration for a specific Linear channel.
	 * @param configuration LiveToVodLinearAssetConfiguration Live to VOD linear asset (live channel) configuration object
	 * @return KalturaLiveToVodLinearAssetConfiguration
	 */
	static updateLinearAssetConfiguration(configuration){
		let kparams = {};
		kparams.configuration = configuration;
		return new kaltura.RequestBuilder('livetovod', 'updateLinearAssetConfiguration', kparams);
	};
	
	/**
	 * Set L2V configuration on the partner level.
	 * @param configuration LiveToVodPartnerConfiguration Live to VOD configuration object
	 * @return KalturaLiveToVodPartnerConfiguration
	 */
	static updatePartnerConfiguration(configuration){
		let kparams = {};
		kparams.configuration = configuration;
		return new kaltura.RequestBuilder('livetovod', 'updatePartnerConfiguration', kparams);
	};
}
module.exports.liveToVod = liveToVod;


/**
 *Class definition for the Kaltura service: mediaConcurrencyRule.
 * The available service actions:
 * @action list Get the list of meta mappings for the partner.
 */
class mediaConcurrencyRule{
	
	/**
	 * Get the list of meta mappings for the partner.
	 * @return KalturaMediaConcurrencyRuleListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('mediaconcurrencyrule', 'list', kparams);
	};
}
module.exports.mediaConcurrencyRule = mediaConcurrencyRule;


/**
 *Class definition for the Kaltura service: mediaFile.
 * The available service actions:
 * @action add Add a new media file.
 * @action delete Delete an existing media file.
 * @action list Returns a list of media-file.
 * @action update update an existing media file.
 */
class mediaFile{
	
	/**
	 * Add a new media file.
	 * @param mediaFile MediaFile Media file object
	 * @return KalturaMediaFile
	 */
	static add(mediaFile){
		let kparams = {};
		kparams.mediaFile = mediaFile;
		return new kaltura.RequestBuilder('mediafile', 'add', kparams);
	};
	
	/**
	 * Delete an existing media file.
	 * @param id int Media file identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('mediafile', 'delete', kparams);
	};
	
	/**
	 * Returns a list of media-file.
	 * @param filter MediaFileFilter Filter (optional, default: null)
	 * @return KalturaMediaFileListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('mediafile', 'list', kparams);
	};
	
	/**
	 * update an existing media file.
	 * @param id int Media file identifier
	 * @param mediaFile MediaFile Media file object
	 * @return KalturaMediaFile
	 */
	static update(id, mediaFile){
		let kparams = {};
		kparams.id = id;
		kparams.mediaFile = mediaFile;
		return new kaltura.RequestBuilder('mediafile', 'update', kparams);
	};
}
module.exports.mediaFile = mediaFile;


/**
 *Class definition for the Kaltura service: mediaFileDynamicData.
 * The available service actions:
 * @action add Add a dynamicData value to the values list of a specific key name in a specific mediaFileTypeId.
 * @action delete Delete an existing DynamicData value.
 * @action list List and filter existing mediaFile dynamicData values.
 */
class mediaFileDynamicData{
	
	/**
	 * Add a dynamicData value to the values list of a specific key name in a specific mediaFileTypeId.
	 * @param dynamicData MediaFileDynamicData DynamicData value
	 * @return KalturaMediaFileDynamicData
	 */
	static add(dynamicData){
		let kparams = {};
		kparams.dynamicData = dynamicData;
		return new kaltura.RequestBuilder('mediafiledynamicdata', 'add', kparams);
	};
	
	/**
	 * Delete an existing DynamicData value.
	 * @param id int DynamicData identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('mediafiledynamicdata', 'delete', kparams);
	};
	
	/**
	 * List and filter existing mediaFile dynamicData values.
	 * @param filter MediaFileDynamicDataFilter Filter
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaMediaFileDynamicDataListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('mediafiledynamicdata', 'list', kparams);
	};
}
module.exports.mediaFileDynamicData = mediaFileDynamicData;


/**
 *Class definition for the Kaltura service: mediaFileType.
 * The available service actions:
 * @action add Add new media-file type.
 * @action delete Delete media-file type by id.
 * @action list Returns a list of media-file types.
 * @action update Update existing media-file type.
 */
class mediaFileType{
	
	/**
	 * Add new media-file type.
	 * @param mediaFileType MediaFileType Media-file type
	 * @return KalturaMediaFileType
	 */
	static add(mediaFileType){
		let kparams = {};
		kparams.mediaFileType = mediaFileType;
		return new kaltura.RequestBuilder('mediafiletype', 'add', kparams);
	};
	
	/**
	 * Delete media-file type by id.
	 * @param id int Media-file type identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('mediafiletype', 'delete', kparams);
	};
	
	/**
	 * Returns a list of media-file types.
	 * @return KalturaMediaFileTypeListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('mediafiletype', 'list', kparams);
	};
	
	/**
	 * Update existing media-file type.
	 * @param id int Media-file type identifier
	 * @param mediaFileType MediaFileType Media-file type
	 * @return KalturaMediaFileType
	 */
	static update(id, mediaFileType){
		let kparams = {};
		kparams.id = id;
		kparams.mediaFileType = mediaFileType;
		return new kaltura.RequestBuilder('mediafiletype', 'update', kparams);
	};
}
module.exports.mediaFileType = mediaFileType;


/**
 *Class definition for the Kaltura service: messageTemplate.
 * The available service actions:
 * @action get Retrieve a message template used in push notifications and inbox.
 * @action update Set the account’s push notifications and inbox messages templates.
 */
class messageTemplate{
	
	/**
	 * Retrieve a message template used in push notifications and inbox.
	 * @param messageType string possible values: Asset type – Series, Reminder,Churn (enum: KalturaMessageTemplateType)
	 * @return KalturaMessageTemplate
	 */
	static get(messageType){
		let kparams = {};
		kparams.messageType = messageType;
		return new kaltura.RequestBuilder('messagetemplate', 'get', kparams);
	};
	
	/**
	 * Set the account’s push notifications and inbox messages templates.
	 * @param messageType string The asset type to update its template (enum: KalturaMessageTemplateType)
	 * @param template MessageTemplate The actual message with placeholders to be presented to the user
	 * @return KalturaMessageTemplate
	 */
	static update(messageType, template){
		let kparams = {};
		kparams.messageType = messageType;
		kparams.template = template;
		return new kaltura.RequestBuilder('messagetemplate', 'update', kparams);
	};
}
module.exports.messageTemplate = messageTemplate;


/**
 *Class definition for the Kaltura service: meta.
 * The available service actions:
 * @action add Add a new meta.
 * @action delete Delete an existing meta.
 * @action list Return a list of metas for the account with optional filter.
 * @action update Update an existing meta.
 */
class meta{
	
	/**
	 * Add a new meta.
	 * @param meta Meta Meta Object
	 * @return KalturaMeta
	 */
	static add(meta){
		let kparams = {};
		kparams.meta = meta;
		return new kaltura.RequestBuilder('meta', 'add', kparams);
	};
	
	/**
	 * Delete an existing meta.
	 * @param id int Meta Identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('meta', 'delete', kparams);
	};
	
	/**
	 * Return a list of metas for the account with optional filter.
	 * @param filter MetaFilter Meta filter (optional, default: null)
	 * @return KalturaMetaListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('meta', 'list', kparams);
	};
	
	/**
	 * Update an existing meta.
	 * @param id int Meta identifier
	 * @param meta Meta Meta
	 * @return KalturaMeta
	 */
	static update(id, meta){
		let kparams = {};
		kparams.id = id;
		kparams.meta = meta;
		return new kaltura.RequestBuilder('meta', 'update', kparams);
	};
}
module.exports.meta = meta;


/**
 *Class definition for the Kaltura service: mfaPartnerConfiguration.
 * The available service actions:
 * @action get Get MFA partner configuration.
 * @action update Update MFA partner configuration.
 */
class mfaPartnerConfiguration{
	
	/**
	 * Get MFA partner configuration.
	 * @return KalturaMultifactorAuthenticationPartnerConfiguration
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('mfapartnerconfiguration', 'get', kparams);
	};
	
	/**
	 * Update MFA partner configuration.
	 * @param configuration MultifactorAuthenticationPartnerConfiguration MFA configuration
	 * @return KalturaMultifactorAuthenticationPartnerConfiguration
	 */
	static update(configuration){
		let kparams = {};
		kparams.configuration = configuration;
		return new kaltura.RequestBuilder('mfapartnerconfiguration', 'update', kparams);
	};
}
module.exports.mfaPartnerConfiguration = mfaPartnerConfiguration;


/**
 *Class definition for the Kaltura service: notification.
 * The available service actions:
 * @action register TBD.
 * @action sendPush Sends push notification to user devices.
 * @action sendSms Sends SMS notification to user.
 * @action setDevicePushToken Registers the device push token to the push service.
 */
class notification{
	
	/**
	 * TBD.
	 * @param identifier string In case type is 'announcement', identifier should be the announcement ID. In case type is 'system', identifier should be 'login' (the login topic)
	 * @param type string 'announcement' - TV-Series topic, 'system' - login topic (enum: KalturaNotificationType)
	 * @return KalturaRegistryResponse
	 */
	static register(identifier, type){
		let kparams = {};
		kparams.identifier = identifier;
		kparams.type = type;
		return new kaltura.RequestBuilder('notification', 'register', kparams);
	};
	
	/**
	 * Sends push notification to user devices.
	 * @param userId int User identifications
	 * @param pushMessage PushMessage Message push data
	 * @return bool
	 */
	static sendPush(userId, pushMessage){
		let kparams = {};
		kparams.userId = userId;
		kparams.pushMessage = pushMessage;
		return new kaltura.RequestBuilder('notification', 'sendPush', kparams);
	};
	
	/**
	 * Sends SMS notification to user.
	 * @param message string Message to send
	 * @param phoneNumber string Optional phoneNumber (optional, default: null)
	 * @param adapterData map Data used by the adapter (optional, default: null)
	 * @return bool
	 */
	static sendSms(message, phoneNumber = null, adapterData = null){
		let kparams = {};
		kparams.message = message;
		kparams.phoneNumber = phoneNumber;
		kparams.adapterData = adapterData;
		return new kaltura.RequestBuilder('notification', 'sendSms', kparams);
	};
	
	/**
	 * Registers the device push token to the push service.
	 * @param pushToken string The device-application pair authentication for push delivery
	 * @return bool
	 */
	static setDevicePushToken(pushToken){
		let kparams = {};
		kparams.pushToken = pushToken;
		return new kaltura.RequestBuilder('notification', 'setDevicePushToken', kparams);
	};
}
module.exports.notification = notification;


/**
 *Class definition for the Kaltura service: notificationsPartnerSettings.
 * The available service actions:
 * @action get Retrieve the partner notification settings.
 * @action update Update the account notification settings.
 */
class notificationsPartnerSettings{
	
	/**
	 * Retrieve the partner notification settings.
	 * @return KalturaNotificationsPartnerSettings
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('notificationspartnersettings', 'get', kparams);
	};
	
	/**
	 * Update the account notification settings.
	 * @param settings NotificationsPartnerSettings Account notification settings model
	 * @return bool
	 */
	static update(settings){
		let kparams = {};
		kparams.settings = settings;
		return new kaltura.RequestBuilder('notificationspartnersettings', 'update', kparams);
	};
}
module.exports.notificationsPartnerSettings = notificationsPartnerSettings;


/**
 *Class definition for the Kaltura service: notificationsSettings.
 * The available service actions:
 * @action get Retrieve the user’s notification settings.
 * @action update Update the user’s notification settings.
 * @action updateWithToken Update the user’s notification settings.
 */
class notificationsSettings{
	
	/**
	 * Retrieve the user’s notification settings.
	 * @return KalturaNotificationsSettings
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('notificationssettings', 'get', kparams);
	};
	
	/**
	 * Update the user’s notification settings.
	 * @param settings NotificationsSettings Notifications settings
	 * @return bool
	 */
	static update(settings){
		let kparams = {};
		kparams.settings = settings;
		return new kaltura.RequestBuilder('notificationssettings', 'update', kparams);
	};
	
	/**
	 * Update the user’s notification settings.
	 * @param settings NotificationsSettings Notifications settings
	 * @param token string User's token identifier
	 * @param partnerId int Partner identifier
	 * @return bool
	 */
	static updateWithToken(settings, token, partnerId){
		let kparams = {};
		kparams.settings = settings;
		kparams.token = token;
		kparams.partnerId = partnerId;
		return new kaltura.RequestBuilder('notificationssettings', 'updateWithToken', kparams);
	};
}
module.exports.notificationsSettings = notificationsSettings;


/**
 *Class definition for the Kaltura service: ossAdapterProfile.
 * The available service actions:
 * @action add Insert new OSS adapter for partner.
 * @action delete Delete OSS adapter by OSS adapter id.
 * @action generateSharedSecret Generate oss adapter shared secret.
 * @action get Returns all OSS adapters for partner : id + name.
 * @action list Returns all OSS adapters for partner : id + name.
 * @action update Update OSS adapter details.
 */
class ossAdapterProfile{
	
	/**
	 * Insert new OSS adapter for partner.
	 * @param ossAdapter OSSAdapterProfile OSS adapter Object
	 * @return KalturaOSSAdapterProfile
	 */
	static add(ossAdapter){
		let kparams = {};
		kparams.ossAdapter = ossAdapter;
		return new kaltura.RequestBuilder('ossadapterprofile', 'add', kparams);
	};
	
	/**
	 * Delete OSS adapter by OSS adapter id.
	 * @param ossAdapterId int OSS adapter identifier
	 * @return bool
	 */
	static deleteAction(ossAdapterId){
		let kparams = {};
		kparams.ossAdapterId = ossAdapterId;
		return new kaltura.RequestBuilder('ossadapterprofile', 'delete', kparams);
	};
	
	/**
	 * Generate oss adapter shared secret.
	 * @param ossAdapterId int OSS adapter identifier
	 * @return KalturaOSSAdapterProfile
	 */
	static generateSharedSecret(ossAdapterId){
		let kparams = {};
		kparams.ossAdapterId = ossAdapterId;
		return new kaltura.RequestBuilder('ossadapterprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Returns all OSS adapters for partner : id + name.
	 * @param id int OSS adapter identifier
	 * @return KalturaOSSAdapterProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('ossadapterprofile', 'get', kparams);
	};
	
	/**
	 * Returns all OSS adapters for partner : id + name.
	 * @return KalturaOSSAdapterProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('ossadapterprofile', 'list', kparams);
	};
	
	/**
	 * Update OSS adapter details.
	 * @param ossAdapterId int OSS adapter identifier
	 * @param ossAdapter OSSAdapterProfile OSS adapter Object
	 * @return KalturaOSSAdapterProfile
	 */
	static update(ossAdapterId, ossAdapter){
		let kparams = {};
		kparams.ossAdapterId = ossAdapterId;
		kparams.ossAdapter = ossAdapter;
		return new kaltura.RequestBuilder('ossadapterprofile', 'update', kparams);
	};
}
module.exports.ossAdapterProfile = ossAdapterProfile;


/**
 *Class definition for the Kaltura service: ottCategory.
 * The available service actions:
 * @action get Retrieve the list of categories (hierarchical) and their associated channels.
 */
class ottCategory{
	
	/**
	 * Retrieve the list of categories (hierarchical) and their associated channels.
	 * @param id int Category Identifier
	 * @return KalturaOTTCategory
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('ottcategory', 'get', kparams);
	};
}
module.exports.ottCategory = ottCategory;


/**
 *Class definition for the Kaltura service: ottUser.
 * The available service actions:
 * @action activate Activate the account by activation token.
 * @action addRole Deprecate - use Register or Update actions instead by setting user.roleIds parameter.
 * @action anonymousLogin Returns tokens (KS and refresh token) for anonymous access.
 * @action delete Permanently delete a user. User to delete cannot be an exclusive household master, and cannot be default user.
 * @action deleteDynamicData Deletes dynamic data item for a user.
 * @action get Retrieving users&#39; data.
 * @action getEncryptedUserId Returns the identifier of the user encrypted with SHA1 using configured key.
 * @action list Returns list of OTTUser (limited to 500 items). Filters by username/external identifier/idIn or roleIdIn.
 * @action login login with user name and password.
 * @action loginWithPin User sign-in via a time-expired sign-in PIN.
 * @action logout Logout the calling user.
 * @action mfaLogin login based on MFA token.
 * @action register Sign up a new user.
 * @action resendActivationToken Resend the activation token to a user.
 * @action resendMfaToken resend MFA Token for the user.
 * @action resetPassword Send an e-mail with URL to enable the user to set new password.
 * @action retryDelete Retry delete OTT user entities by retention.
 * @action setInitialPassword Renew the user&#39;s password after validating the token that sent as part of URL in e-mail.
 * @action update Update user information.
 * @action updateDynamicData Update user dynamic data. If it is needed to update several items, use a multi-request to avoid race conditions.
 * This API endpoint will deprecated soon. Please use UpsertDynamicData instead of it.
 * @action updateLoginData Given a user name and existing password, change to a new password.
 * @action updatePassword Update the user&#39;s existing password.
 * @action upsertDynamicData Adds or updates dynamic data item for a user. If it is needed to update several items, use a multi-request to avoid race conditions.
 */
class ottUser{
	
	/**
	 * Activate the account by activation token.
	 * @param partnerId int The partner ID
	 * @param username string Username of the user to activate
	 * @param activationToken string Activation token of the user
	 * @return KalturaOTTUser
	 */
	static activate(partnerId, username, activationToken){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.username = username;
		kparams.activationToken = activationToken;
		return new kaltura.RequestBuilder('ottuser', 'activate', kparams);
	};
	
	/**
	 * Deprecate - use Register or Update actions instead by setting user.roleIds parameter.
	 * @param roleId int The role identifier to add
	 * @return bool
	 */
	static addRole(roleId){
		let kparams = {};
		kparams.roleId = roleId;
		return new kaltura.RequestBuilder('ottuser', 'addRole', kparams);
	};
	
	/**
	 * Returns tokens (KS and refresh token) for anonymous access.
	 * @param partnerId int The partner ID
	 * @param udid string The caller device's UDID (optional, default: null)
	 * @return KalturaLoginSession
	 */
	static anonymousLogin(partnerId, udid = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.udid = udid;
		return new kaltura.RequestBuilder('ottuser', 'anonymousLogin', kparams);
	};
	
	/**
	 * Permanently delete a user. User to delete cannot be an exclusive household master, and cannot be default user.
	 * @return bool
	 */
	static deleteAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('ottuser', 'delete', kparams);
	};
	
	/**
	 * Deletes dynamic data item for a user.
	 * @param key string Key of dynamic data item
	 * @return bool
	 */
	static deleteDynamicData(key){
		let kparams = {};
		kparams.key = key;
		return new kaltura.RequestBuilder('ottuser', 'deleteDynamicData', kparams);
	};
	
	/**
	 * Retrieving users&#39; data.
	 * @return KalturaOTTUser
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('ottuser', 'get', kparams);
	};
	
	/**
	 * Returns the identifier of the user encrypted with SHA1 using configured key.
	 * @return KalturaStringValue
	 */
	static getEncryptedUserId(){
		let kparams = {};
		return new kaltura.RequestBuilder('ottuser', 'getEncryptedUserId', kparams);
	};
	
	/**
	 * Returns list of OTTUser (limited to 500 items). Filters by username/external identifier/idIn or roleIdIn.
	 * @param filter OTTUserFilter Filter request (optional, default: null)
	 * @return KalturaOTTUserListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('ottuser', 'list', kparams);
	};
	
	/**
	 * login with user name and password.
	 * @param partnerId int Partner Identifier
	 * @param username string user name (optional, default: null)
	 * @param password string password (optional, default: null)
	 * @param extraParams map extra params (optional, default: null)
	 * @param udid string Device UDID (optional, default: null)
	 * @return KalturaLoginResponse
	 */
	static login(partnerId, username = null, password = null, extraParams = null, udid = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.username = username;
		kparams.password = password;
		kparams.extraParams = extraParams;
		kparams.udid = udid;
		return new kaltura.RequestBuilder('ottuser', 'login', kparams);
	};
	
	/**
	 * User sign-in via a time-expired sign-in PIN.
	 * @param partnerId int Partner Identifier
	 * @param pin string pin code
	 * @param udid string Device UDID (optional, default: null)
	 * @param secret string Additional security parameter to validate the login (optional, default: null)
	 * @param extraParams map extra params (optional, default: null)
	 * @return KalturaLoginResponse
	 */
	static loginWithPin(partnerId, pin, udid = null, secret = null, extraParams = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.pin = pin;
		kparams.udid = udid;
		kparams.secret = secret;
		kparams.extraParams = extraParams;
		return new kaltura.RequestBuilder('ottuser', 'loginWithPin', kparams);
	};
	
	/**
	 * Logout the calling user.
	 * @param adapterData map adapter data (optional, default: null)
	 * @return bool
	 */
	static logout(adapterData = null){
		let kparams = {};
		kparams.adapterData = adapterData;
		return new kaltura.RequestBuilder('ottuser', 'logout', kparams);
	};
	
	/**
	 * login based on MFA token.
	 * @param partnerId int Partner identifier
	 * @param token string MFA token
	 * @param username string user name (optional, default: null)
	 * @param password string password (optional, default: null)
	 * @param extraParams map extra params (optional, default: null)
	 * @param udid string Device UDID (optional, default: null)
	 * @return KalturaLoginResponse
	 */
	static mfaLogin(partnerId, token, username = null, password = null, extraParams = null, udid = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.username = username;
		kparams.password = password;
		kparams.extraParams = extraParams;
		kparams.udid = udid;
		return new kaltura.RequestBuilder('ottuser', 'mfaLogin', kparams);
	};
	
	/**
	 * Sign up a new user.
	 * @param partnerId int Partner identifier
	 * @param user OTTUser The user model to add
	 * @param password string password
	 * @return KalturaOTTUser
	 */
	static register(partnerId, user, password){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.user = user;
		kparams.password = password;
		return new kaltura.RequestBuilder('ottuser', 'register', kparams);
	};
	
	/**
	 * Resend the activation token to a user.
	 * @param partnerId int The partner ID
	 * @param username string Username of the user to activate
	 * @return bool
	 */
	static resendActivationToken(partnerId, username){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.username = username;
		return new kaltura.RequestBuilder('ottuser', 'resendActivationToken', kparams);
	};
	
	/**
	 * resend MFA Token for the user.
	 * @param partnerId int Partner identifier
	 * @param username string user name (optional, default: null)
	 * @param password string password (optional, default: null)
	 * @param extraParams map extra params (optional, default: null)
	 * @return KalturaResendMfaTokenResponse
	 */
	static resendMfaToken(partnerId, username = null, password = null, extraParams = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.username = username;
		kparams.password = password;
		kparams.extraParams = extraParams;
		return new kaltura.RequestBuilder('ottuser', 'resendMfaToken', kparams);
	};
	
	/**
	 * Send an e-mail with URL to enable the user to set new password.
	 * @param partnerId int Partner Identifier
	 * @param username string user name
	 * @param templateName string Template name for reset password (optional, default: null)
	 * @return bool
	 */
	static resetPassword(partnerId, username, templateName = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.username = username;
		kparams.templateName = templateName;
		return new kaltura.RequestBuilder('ottuser', 'resetPassword', kparams);
	};
	
	/**
	 * Retry delete OTT user entities by retention.
	 * @param request RetryDeleteRequest Request data
	 */
	static retryDelete(request){
		let kparams = {};
		kparams.request = request;
		return new kaltura.RequestBuilder('ottuser', 'retryDelete', kparams);
	};
	
	/**
	 * Renew the user&#39;s password after validating the token that sent as part of URL in e-mail.
	 * @param partnerId int Partner Identifier
	 * @param token string Token that sent by e-mail
	 * @param password string New password
	 * @return KalturaOTTUser
	 */
	static setInitialPassword(partnerId, token, password){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.password = password;
		return new kaltura.RequestBuilder('ottuser', 'setInitialPassword', kparams);
	};
	
	/**
	 * Update user information.
	 * @param user OTTUser User data (includes basic and dynamic data)
	 * @param id string User ID (optional, default: null)
	 * @return KalturaOTTUser
	 */
	static update(user, id = null){
		let kparams = {};
		kparams.user = user;
		kparams.id = id;
		return new kaltura.RequestBuilder('ottuser', 'update', kparams);
	};
	
	/**
	 * Update user dynamic data. If it is needed to update several items, use a multi-request to avoid race conditions.
 * This API endpoint will deprecated soon. Please use UpsertDynamicData instead of it.
	 * @param key string Type of dynamicData. Max length of key is 50 characters
	 * @param value StringValue Value of dynamicData. Max length of value is 512 characters
	 * @return KalturaOTTUserDynamicData
	 */
	static updateDynamicData(key, value){
		let kparams = {};
		kparams.key = key;
		kparams.value = value;
		return new kaltura.RequestBuilder('ottuser', 'updateDynamicData', kparams);
	};
	
	/**
	 * Given a user name and existing password, change to a new password.
	 * @param username string user name
	 * @param oldPassword string old password
	 * @param newPassword string new password
	 * @return bool
	 */
	static updateLoginData(username, oldPassword, newPassword){
		let kparams = {};
		kparams.username = username;
		kparams.oldPassword = oldPassword;
		kparams.newPassword = newPassword;
		return new kaltura.RequestBuilder('ottuser', 'updateLoginData', kparams);
	};
	
	/**
	 * Update the user&#39;s existing password.
	 * @param userId int User Identifier
	 * @param password string new password
	 */
	static updatePassword(userId, password){
		let kparams = {};
		kparams.userId = userId;
		kparams.password = password;
		return new kaltura.RequestBuilder('ottuser', 'updatePassword', kparams);
	};
	
	/**
	 * Adds or updates dynamic data item for a user. If it is needed to update several items, use a multi-request to avoid race conditions.
	 * @param key string Key of dynamic data item. Max length of key is 50 characters
	 * @param value StringValue Value of dynamic data item. Max length of value is 512 characters
	 * @return KalturaDynamicData
	 */
	static upsertDynamicData(key, value){
		let kparams = {};
		kparams.key = key;
		kparams.value = value;
		return new kaltura.RequestBuilder('ottuser', 'upsertDynamicData', kparams);
	};
}
module.exports.ottUser = ottUser;


/**
 *Class definition for the Kaltura service: parentalRule.
 * The available service actions:
 * @action add Add a new parentalRule.
 * @action delete Delete an existing parentalRule.
 * @action disable Disables a parental rule that was previously defined by the household master. Disable can be at specific user or household level.
 * @action disableDefault Disables a parental rule that was defined at account level. Disable can be at specific user or household level.
 * @action enable Enable a parental rules for a user.
 * @action get Get an existing parentalRule by identifier.
 * @action list Return the parental rules that applies for the user or household. Can include rules that have been associated in account, household, or user level.
 * Association level is also specified in the response.
 * @action update Update an existing parentalRule.
 */
class parentalRule{
	
	/**
	 * Add a new parentalRule.
	 * @param parentalRule ParentalRule parentalRule object
	 * @return KalturaParentalRule
	 */
	static add(parentalRule){
		let kparams = {};
		kparams.parentalRule = parentalRule;
		return new kaltura.RequestBuilder('parentalrule', 'add', kparams);
	};
	
	/**
	 * Delete an existing parentalRule.
	 * @param id int parentalRule identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('parentalrule', 'delete', kparams);
	};
	
	/**
	 * Disables a parental rule that was previously defined by the household master. Disable can be at specific user or household level.
	 * @param ruleId int Rule Identifier
	 * @param entityReference string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @return bool
	 */
	static disable(ruleId, entityReference){
		let kparams = {};
		kparams.ruleId = ruleId;
		kparams.entityReference = entityReference;
		return new kaltura.RequestBuilder('parentalrule', 'disable', kparams);
	};
	
	/**
	 * Disables a parental rule that was defined at account level. Disable can be at specific user or household level.
	 * @param entityReference string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @return bool
	 */
	static disableDefault(entityReference){
		let kparams = {};
		kparams.entityReference = entityReference;
		return new kaltura.RequestBuilder('parentalrule', 'disableDefault', kparams);
	};
	
	/**
	 * Enable a parental rules for a user.
	 * @param ruleId int Rule Identifier
	 * @param entityReference string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @return bool
	 */
	static enable(ruleId, entityReference){
		let kparams = {};
		kparams.ruleId = ruleId;
		kparams.entityReference = entityReference;
		return new kaltura.RequestBuilder('parentalrule', 'enable', kparams);
	};
	
	/**
	 * Get an existing parentalRule by identifier.
	 * @param id int parentalRule identifier
	 * @return KalturaParentalRule
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('parentalrule', 'get', kparams);
	};
	
	/**
	 * Return the parental rules that applies for the user or household. Can include rules that have been associated in account, household, or user level.
 * Association level is also specified in the response.
	 * @param filter ParentalRuleFilter Filter
	 * @return KalturaParentalRuleListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('parentalrule', 'list', kparams);
	};
	
	/**
	 * Update an existing parentalRule.
	 * @param id int parentalRule identifier
	 * @param parentalRule ParentalRule parentalRule object
	 * @return KalturaParentalRule
	 */
	static update(id, parentalRule){
		let kparams = {};
		kparams.id = id;
		kparams.parentalRule = parentalRule;
		return new kaltura.RequestBuilder('parentalrule', 'update', kparams);
	};
}
module.exports.parentalRule = parentalRule;


/**
 *Class definition for the Kaltura service: partnerConfiguration.
 * The available service actions:
 * @action list Get the list of PartnerConfiguration.
 * @action update Update/set Partner Configuration.
 */
class partnerConfiguration{
	
	/**
	 * Get the list of PartnerConfiguration.
	 * @param filter PartnerConfigurationFilter filter by PartnerConfiguration type
	 * @return KalturaPartnerConfigurationListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('partnerconfiguration', 'list', kparams);
	};
	
	/**
	 * Update/set Partner Configuration.
	 * @param configuration PartnerConfiguration Partner Configuration to update
	 * @return bool
	 */
	static update(configuration){
		let kparams = {};
		kparams.configuration = configuration;
		return new kaltura.RequestBuilder('partnerconfiguration', 'update', kparams);
	};
}
module.exports.partnerConfiguration = partnerConfiguration;


/**
 *Class definition for the Kaltura service: partner.
 * The available service actions:
 * @action add Add a partner with default user.
 * @action createIndexes Internal API !!! create ElasticSearch indexes for partner.
 * @action delete Internal API !!! Delete Partner.
 * @action externalLogin Returns a login session for external system (like OVP).
 * @action list Internal API !!! Returns the list of active Partners.
 */
class partner{
	
	/**
	 * Add a partner with default user.
	 * @param partner Partner partner
	 * @param partnerSetup PartnerSetup mandatory parameters to create partner
	 * @return KalturaPartner
	 */
	static add(partner, partnerSetup){
		let kparams = {};
		kparams.partner = partner;
		kparams.partnerSetup = partnerSetup;
		return new kaltura.RequestBuilder('partner', 'add', kparams);
	};
	
	/**
	 * Internal API !!! create ElasticSearch indexes for partner.
	 * @return bool
	 */
	static createIndexes(){
		let kparams = {};
		return new kaltura.RequestBuilder('partner', 'createIndexes', kparams);
	};
	
	/**
	 * Internal API !!! Delete Partner.
	 * @param id int Partner id
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('partner', 'delete', kparams);
	};
	
	/**
	 * Returns a login session for external system (like OVP).
	 * @return KalturaLoginSession
	 */
	static externalLogin(){
		let kparams = {};
		return new kaltura.RequestBuilder('partner', 'externalLogin', kparams);
	};
	
	/**
	 * Internal API !!! Returns the list of active Partners.
	 * @param filter PartnerFilter Filter (optional, default: null)
	 * @return KalturaPartnerListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('partner', 'list', kparams);
	};
}
module.exports.partner = partner;


/**
 *Class definition for the Kaltura service: partnerPremiumServices.
 * The available service actions:
 * @action get Returns list of services.
 * @action update update partnerPremiumServices.
 */
class partnerPremiumServices{
	
	/**
	 * Returns list of services.
	 * @return KalturaPartnerPremiumServices
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('partnerpremiumservices', 'get', kparams);
	};
	
	/**
	 * update partnerPremiumServices.
	 * @param partnerPremiumServices PartnerPremiumServices partnerPremiumServices to update
	 * @return KalturaPartnerPremiumServices
	 */
	static update(partnerPremiumServices){
		let kparams = {};
		kparams.partnerPremiumServices = partnerPremiumServices;
		return new kaltura.RequestBuilder('partnerpremiumservices', 'update', kparams);
	};
}
module.exports.partnerPremiumServices = partnerPremiumServices;


/**
 *Class definition for the Kaltura service: passwordPolicy.
 * The available service actions:
 * @action add Add new KalturaPasswordPolicy.
 * @action delete Delete existing PasswordPolicy.
 * @action list Returns the list of available KalturaPasswordPolicy.
 * @action update Update existing KalturaPasswordPolicy.
 */
class passwordPolicy{
	
	/**
	 * Add new KalturaPasswordPolicy.
	 * @param objectToAdd PasswordPolicy KalturaPasswordPolicy Object to add
	 * @return KalturaPasswordPolicy
	 */
	static add(objectToAdd){
		let kparams = {};
		kparams.objectToAdd = objectToAdd;
		return new kaltura.RequestBuilder('passwordpolicy', 'add', kparams);
	};
	
	/**
	 * Delete existing PasswordPolicy.
	 * @param id int PasswordPolicy identifier
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('passwordpolicy', 'delete', kparams);
	};
	
	/**
	 * Returns the list of available KalturaPasswordPolicy.
	 * @param filter PasswordPolicyFilter Filter (optional, default: null)
	 * @return KalturaPasswordPolicyListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('passwordpolicy', 'list', kparams);
	};
	
	/**
	 * Update existing KalturaPasswordPolicy.
	 * @param id int id of KalturaPasswordPolicy to update
	 * @param objectToUpdate PasswordPolicy KalturaPasswordPolicy Object to update
	 * @return KalturaPasswordPolicy
	 */
	static update(id, objectToUpdate){
		let kparams = {};
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new kaltura.RequestBuilder('passwordpolicy', 'update', kparams);
	};
}
module.exports.passwordPolicy = passwordPolicy;


/**
 *Class definition for the Kaltura service: paymentGatewayProfile.
 * The available service actions:
 * @action add Insert new payment gateway for partner.
 * @action delete Delete payment gateway by payment gateway id.
 * @action generateSharedSecret Generate payment gateway shared secret.
 * @action getConfiguration Gets the Payment Gateway Configuration for the payment gateway identifier given.
 * @action list Returns all payment gateways for partner : id + name.
 * @action update Update payment gateway details.
 */
class paymentGatewayProfile{
	
	/**
	 * Insert new payment gateway for partner.
	 * @param paymentGateway PaymentGatewayProfile Payment Gateway Object
	 * @return KalturaPaymentGatewayProfile
	 */
	static add(paymentGateway){
		let kparams = {};
		kparams.paymentGateway = paymentGateway;
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'add', kparams);
	};
	
	/**
	 * Delete payment gateway by payment gateway id.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @return bool
	 */
	static deleteAction(paymentGatewayId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'delete', kparams);
	};
	
	/**
	 * Generate payment gateway shared secret.
	 * @param paymentGatewayId int Payment gateway identifier
	 * @return KalturaPaymentGatewayProfile
	 */
	static generateSharedSecret(paymentGatewayId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Gets the Payment Gateway Configuration for the payment gateway identifier given.
	 * @param alias string The payemnt gateway for which to return the registration URL/s for the household. If omitted – return the regisration URL for the household for the default payment gateway
	 * @param intent string Represent the client’s intent for working with the payment gateway. Intent options to be coordinated with the applicable payment gateway adapter
	 * @param extraParameters array Additional parameters to send to the payment gateway adapter
	 * @return KalturaPaymentGatewayConfiguration
	 */
	static getConfiguration(alias, intent, extraParameters){
		let kparams = {};
		kparams.alias = alias;
		kparams.intent = intent;
		kparams.extraParameters = extraParameters;
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'getConfiguration', kparams);
	};
	
	/**
	 * Returns all payment gateways for partner : id + name.
	 * @return KalturaPaymentGatewayProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'list', kparams);
	};
	
	/**
	 * Update payment gateway details.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @param paymentGateway PaymentGatewayProfile Payment Gateway Object
	 * @return KalturaPaymentGatewayProfile
	 */
	static update(paymentGatewayId, paymentGateway){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentGateway = paymentGateway;
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'update', kparams);
	};
}
module.exports.paymentGatewayProfile = paymentGatewayProfile;


/**
 *Class definition for the Kaltura service: paymentMethodProfile.
 * The available service actions:
 * @action add TBD.
 * @action delete Delete payment method profile.
 * @action list TBD.
 * @action update Update payment method.
 */
class paymentMethodProfile{
	
	/**
	 * TBD.
	 * @param paymentMethod PaymentMethodProfile Payment method to add
	 * @return KalturaPaymentMethodProfile
	 */
	static add(paymentMethod){
		let kparams = {};
		kparams.paymentMethod = paymentMethod;
		return new kaltura.RequestBuilder('paymentmethodprofile', 'add', kparams);
	};
	
	/**
	 * Delete payment method profile.
	 * @param paymentMethodId int Payment method identifier to delete
	 * @return bool
	 */
	static deleteAction(paymentMethodId){
		let kparams = {};
		kparams.paymentMethodId = paymentMethodId;
		return new kaltura.RequestBuilder('paymentmethodprofile', 'delete', kparams);
	};
	
	/**
	 * TBD.
	 * @param filter PaymentMethodProfileFilter Payment gateway method profile filter
	 * @return KalturaPaymentMethodProfileListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('paymentmethodprofile', 'list', kparams);
	};
	
	/**
	 * Update payment method.
	 * @param paymentMethodId int Payment method identifier to update
	 * @param paymentMethod PaymentMethodProfile Payment method to update
	 * @return KalturaPaymentMethodProfile
	 */
	static update(paymentMethodId, paymentMethod){
		let kparams = {};
		kparams.paymentMethodId = paymentMethodId;
		kparams.paymentMethod = paymentMethod;
		return new kaltura.RequestBuilder('paymentmethodprofile', 'update', kparams);
	};
}
module.exports.paymentMethodProfile = paymentMethodProfile;


/**
 *Class definition for the Kaltura service: permission.
 * The available service actions:
 * @action add Adds new permission.
 * @action addPermissionItem Adds permission item to permission.
 * @action delete Deletes an existing permission.
 * @action getCurrentPermissions Returns permission names as comma separated string.
 * @action list Retrieving permissions by identifiers, if filter is empty, returns all partner permissions.
 * @action removePermissionItem Removes permission item from permission.
 * @action update Update an existing permission.
 */
class permission{
	
	/**
	 * Adds new permission.
	 * @param permission Permission Permission to insert
	 * @return KalturaPermission
	 */
	static add(permission){
		let kparams = {};
		kparams.permission = permission;
		return new kaltura.RequestBuilder('permission', 'add', kparams);
	};
	
	/**
	 * Adds permission item to permission.
	 * @param permissionId int Permission ID to add to
	 * @param permissionItemId int Permission item ID to add
	 */
	static addPermissionItem(permissionId, permissionItemId){
		let kparams = {};
		kparams.permissionId = permissionId;
		kparams.permissionItemId = permissionItemId;
		return new kaltura.RequestBuilder('permission', 'addPermissionItem', kparams);
	};
	
	/**
	 * Deletes an existing permission.
	 * @param id int Permission ID to delete
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('permission', 'delete', kparams);
	};
	
	/**
	 * Returns permission names as comma separated string.
	 * @return string
	 */
	static getCurrentPermissions(){
		let kparams = {};
		return new kaltura.RequestBuilder('permission', 'getCurrentPermissions', kparams);
	};
	
	/**
	 * Retrieving permissions by identifiers, if filter is empty, returns all partner permissions.
	 * @param filter BasePermissionFilter Filter for permissions (optional, default: null)
	 * @return KalturaPermissionListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('permission', 'list', kparams);
	};
	
	/**
	 * Removes permission item from permission.
	 * @param permissionId int Permission ID to remove from
	 * @param permissionItemId int Permission item ID to remove
	 */
	static removePermissionItem(permissionId, permissionItemId){
		let kparams = {};
		kparams.permissionId = permissionId;
		kparams.permissionItemId = permissionItemId;
		return new kaltura.RequestBuilder('permission', 'removePermissionItem', kparams);
	};
	
	/**
	 * Update an existing permission.
	 * @param id int Permission  Identifier
	 * @param permission Permission Permission object
	 * @return KalturaPermission
	 */
	static update(id, permission){
		let kparams = {};
		kparams.id = id;
		kparams.permission = permission;
		return new kaltura.RequestBuilder('permission', 'update', kparams);
	};
}
module.exports.permission = permission;


/**
 *Class definition for the Kaltura service: permissionItem.
 * The available service actions:
 * @action list Return a list of permission items with filtering options.
 */
class permissionItem{
	
	/**
	 * Return a list of permission items with filtering options.
	 * @param filter PermissionItemFilter Filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaPermissionItemListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('permissionitem', 'list', kparams);
	};
}
module.exports.permissionItem = permissionItem;


/**
 *Class definition for the Kaltura service: personalActivityCleanup.
 * The available service actions:
 * @action getPartnerConfiguration PersonalActivityCleanupConfiguration get.
 * @action updatePartnerConfiguration PersonalActivityCleanupConfiguration Update.
 */
class personalActivityCleanup{
	
	/**
	 * PersonalActivityCleanupConfiguration get.
	 * @return KalturaPersonalActivityCleanupConfiguration
	 */
	static getPartnerConfiguration(){
		let kparams = {};
		return new kaltura.RequestBuilder('personalactivitycleanup', 'getPartnerConfiguration', kparams);
	};
	
	/**
	 * PersonalActivityCleanupConfiguration Update.
	 * @param personalActivityCleanupConfiguration PersonalActivityCleanupConfiguration PersonalActivityCleanupConfiguration details
	 * @return KalturaPersonalActivityCleanupConfiguration
	 */
	static updatePartnerConfiguration(personalActivityCleanupConfiguration){
		let kparams = {};
		kparams.personalActivityCleanupConfiguration = personalActivityCleanupConfiguration;
		return new kaltura.RequestBuilder('personalactivitycleanup', 'updatePartnerConfiguration', kparams);
	};
}
module.exports.personalActivityCleanup = personalActivityCleanup;


/**
 *Class definition for the Kaltura service: personalFeed.
 * The available service actions:
 * @action list List user&#39;s feeds.
 * Possible status codes:.
 */
class personalFeed{
	
	/**
	 * List user&#39;s feeds.
 * Possible status codes:.
	 * @param filter PersonalFeedFilter Required sort option to apply for the identified assets. If omitted – will use relevancy.
 * Possible values: relevancy, a_to_z, z_to_a, views, ratings, votes, newest
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaPersonalFeedListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('personalfeed', 'list', kparams);
	};
}
module.exports.personalFeed = personalFeed;


/**
 *Class definition for the Kaltura service: personalList.
 * The available service actions:
 * @action add Add a user&#39;s personal list item to follow.
 * @action delete Remove followed item from user&#39;s personal list.
 * @action list List user&#39;s tv personal item to follow.
 * Possible status codes:.
 */
class personalList{
	
	/**
	 * Add a user&#39;s personal list item to follow.
	 * @param personalList PersonalList Follow personal list item request parameters
	 * @return KalturaPersonalList
	 */
	static add(personalList){
		let kparams = {};
		kparams.personalList = personalList;
		return new kaltura.RequestBuilder('personallist', 'add', kparams);
	};
	
	/**
	 * Remove followed item from user&#39;s personal list.
	 * @param personalListId int personalListId identifier
	 */
	static deleteAction(personalListId){
		let kparams = {};
		kparams.personalListId = personalListId;
		return new kaltura.RequestBuilder('personallist', 'delete', kparams);
	};
	
	/**
	 * List user&#39;s tv personal item to follow.
 * Possible status codes:.
	 * @param filter PersonalListFilter Personal list filter (optional, default: null)
	 * @param pager FilterPager pager (optional, default: null)
	 * @return KalturaPersonalListListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('personallist', 'list', kparams);
	};
}
module.exports.personalList = personalList;


/**
 *Class definition for the Kaltura service: pin.
 * The available service actions:
 * @action get Retrieve the parental or purchase PIN that applies for the household or user. Includes specification of where the PIN was defined at – account, household or user  level.
 * @action update Set the parental or purchase PIN that applies for the user or the household.
 * @action validate Validate a purchase or parental PIN for a user.
 */
class pin{
	
	/**
	 * Retrieve the parental or purchase PIN that applies for the household or user. Includes specification of where the PIN was defined at – account, household or user  level.
	 * @param by string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @param type string The PIN type to retrieve (enum: KalturaPinType)
	 * @param ruleId int Rule ID - for PIN per rule (MediaCorp): BEO-1923 (optional, default: null)
	 * @return KalturaPin
	 */
	static get(by, type, ruleId = null){
		let kparams = {};
		kparams.by = by;
		kparams.type = type;
		kparams.ruleId = ruleId;
		return new kaltura.RequestBuilder('pin', 'get', kparams);
	};
	
	/**
	 * Set the parental or purchase PIN that applies for the user or the household.
	 * @param by string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @param type string The PIN type to retrieve (enum: KalturaPinType)
	 * @param pin Pin PIN to set
	 * @param ruleId int Rule ID - for PIN per rule (MediaCorp): BEO-1923 (optional, default: null)
	 * @return KalturaPin
	 */
	static update(by, type, pin, ruleId = null){
		let kparams = {};
		kparams.by = by;
		kparams.type = type;
		kparams.pin = pin;
		kparams.ruleId = ruleId;
		return new kaltura.RequestBuilder('pin', 'update', kparams);
	};
	
	/**
	 * Validate a purchase or parental PIN for a user.
	 * @param pin string PIN to validate
	 * @param type string The PIN type to retrieve (enum: KalturaPinType)
	 * @param ruleId int Rule ID - for PIN per rule (MediaCorp): BEO-1923 (optional, default: null)
	 * @return bool
	 */
	static validate(pin, type, ruleId = null){
		let kparams = {};
		kparams.pin = pin;
		kparams.type = type;
		kparams.ruleId = ruleId;
		return new kaltura.RequestBuilder('pin', 'validate', kparams);
	};
}
module.exports.pin = pin;


/**
 *Class definition for the Kaltura service: playbackProfile.
 * The available service actions:
 * @action add Insert new Playback adapter for partner.
 * @action delete Delete Playback adapter by Playback adapter id.
 * @action generateSharedSecret Generate playback adapter shared secret.
 * @action list Returns all playback profiles for partner : id + name.
 * @action update Update Playback adapter details.
 */
class playbackProfile{
	
	/**
	 * Insert new Playback adapter for partner.
	 * @param playbackProfile PlaybackProfile Playback adapter Object
	 * @return KalturaPlaybackProfile
	 */
	static add(playbackProfile){
		let kparams = {};
		kparams.playbackProfile = playbackProfile;
		return new kaltura.RequestBuilder('playbackprofile', 'add', kparams);
	};
	
	/**
	 * Delete Playback adapter by Playback adapter id.
	 * @param id int Playback adapter identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('playbackprofile', 'delete', kparams);
	};
	
	/**
	 * Generate playback adapter shared secret.
	 * @param id int Playback adapter identifier
	 * @return KalturaPlaybackProfile
	 */
	static generateSharedSecret(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('playbackprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Returns all playback profiles for partner : id + name.
	 * @param filter PlaybackProfileFilter Filter parameters for filtering out the result (optional, default: null)
	 * @return KalturaPlaybackProfileListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('playbackprofile', 'list', kparams);
	};
	
	/**
	 * Update Playback adapter details.
	 * @param id int Playback adapter identifier
	 * @param playbackProfile PlaybackProfile Playback adapter Object
	 * @return KalturaPlaybackProfile
	 */
	static update(id, playbackProfile){
		let kparams = {};
		kparams.id = id;
		kparams.playbackProfile = playbackProfile;
		return new kaltura.RequestBuilder('playbackprofile', 'update', kparams);
	};
}
module.exports.playbackProfile = playbackProfile;


/**
 *Class definition for the Kaltura service: ppv.
 * The available service actions:
 * @action add Add new ppv.
 * @action delete Delete Ppv.
 * @action get Returns ppv object by internal identifier.
 * @action list Returns all ppv objects.
 * @action update Update ppv.
 */
class ppv{
	
	/**
	 * Add new ppv.
	 * @param ppv Ppv ppv objec
	 * @return KalturaPpv
	 */
	static add(ppv){
		let kparams = {};
		kparams.ppv = ppv;
		return new kaltura.RequestBuilder('ppv', 'add', kparams);
	};
	
	/**
	 * Delete Ppv.
	 * @param id int Ppv id
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('ppv', 'delete', kparams);
	};
	
	/**
	 * Returns ppv object by internal identifier.
	 * @param id int ppv identifier
	 * @return KalturaPpv
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('ppv', 'get', kparams);
	};
	
	/**
	 * Returns all ppv objects.
	 * @param filter PpvFilter Filter parameters for filtering out the result (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaPpvListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('ppv', 'list', kparams);
	};
	
	/**
	 * Update ppv.
	 * @param id int ppv id
	 * @param ppv Ppv ppv Object
	 * @return KalturaPpv
	 */
	static update(id, ppv){
		let kparams = {};
		kparams.id = id;
		kparams.ppv = ppv;
		return new kaltura.RequestBuilder('ppv', 'update', kparams);
	};
}
module.exports.ppv = ppv;


/**
 *Class definition for the Kaltura service: previewModule.
 * The available service actions:
 * @action add Insert new PreviewModule for partner.
 * @action delete Internal API !!! Delete PreviewModule.
 * @action list Returns all PreviewModule.
 * @action update Update PreviewModule.
 */
class previewModule{
	
	/**
	 * Insert new PreviewModule for partner.
	 * @param previewModule PreviewModule Preview module object
	 * @return KalturaPreviewModule
	 */
	static add(previewModule){
		let kparams = {};
		kparams.previewModule = previewModule;
		return new kaltura.RequestBuilder('previewmodule', 'add', kparams);
	};
	
	/**
	 * Internal API !!! Delete PreviewModule.
	 * @param id int PreviewModule id
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('previewmodule', 'delete', kparams);
	};
	
	/**
	 * Returns all PreviewModule.
	 * @param filter PreviewModuleFilter Filter (optional, default: null)
	 * @return KalturaPreviewModuleListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('previewmodule', 'list', kparams);
	};
	
	/**
	 * Update PreviewModule.
	 * @param id int PreviewModule id
	 * @param previewModule PreviewModule PreviewModule
	 * @return KalturaPreviewModule
	 */
	static update(id, previewModule){
		let kparams = {};
		kparams.id = id;
		kparams.previewModule = previewModule;
		return new kaltura.RequestBuilder('previewmodule', 'update', kparams);
	};
}
module.exports.previewModule = previewModule;


/**
 *Class definition for the Kaltura service: priceDetails.
 * The available service actions:
 * @action add Insert new PriceDetails for partner.
 * @action delete Delete PriceDetails.
 * @action list Returns the list of available prices, can be filtered by price IDs.
 * @action update update existing PriceDetails.
 */
class priceDetails{
	
	/**
	 * Insert new PriceDetails for partner.
	 * @param priceDetails PriceDetails PriceDetails Object
	 * @return KalturaPriceDetails
	 */
	static add(priceDetails){
		let kparams = {};
		kparams.priceDetails = priceDetails;
		return new kaltura.RequestBuilder('pricedetails', 'add', kparams);
	};
	
	/**
	 * Delete PriceDetails.
	 * @param id int PriceDetails identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('pricedetails', 'delete', kparams);
	};
	
	/**
	 * Returns the list of available prices, can be filtered by price IDs.
	 * @param filter PriceDetailsFilter Filter (optional, default: null)
	 * @return KalturaPriceDetailsListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('pricedetails', 'list', kparams);
	};
	
	/**
	 * update existing PriceDetails.
	 * @param id int id of priceDetails
	 * @param priceDetails PriceDetails priceDetails to update
	 * @return KalturaPriceDetails
	 */
	static update(id, priceDetails){
		let kparams = {};
		kparams.id = id;
		kparams.priceDetails = priceDetails;
		return new kaltura.RequestBuilder('pricedetails', 'update', kparams);
	};
}
module.exports.priceDetails = priceDetails;


/**
 *Class definition for the Kaltura service: pricePlan.
 * The available service actions:
 * @action add Insert new PricePlan.
 * @action delete Delete PricePlan.
 * @action list Returns a list of price plans by IDs.
 * @action update Updates a price plan.
 */
class pricePlan{
	
	/**
	 * Insert new PricePlan.
	 * @param pricePlan PricePlan Price plan Object
	 * @return KalturaPricePlan
	 */
	static add(pricePlan){
		let kparams = {};
		kparams.pricePlan = pricePlan;
		return new kaltura.RequestBuilder('priceplan', 'add', kparams);
	};
	
	/**
	 * Delete PricePlan.
	 * @param id int PricePlan identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('priceplan', 'delete', kparams);
	};
	
	/**
	 * Returns a list of price plans by IDs.
	 * @param filter PricePlanFilter Filter request (optional, default: null)
	 * @return KalturaPricePlanListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('priceplan', 'list', kparams);
	};
	
	/**
	 * Updates a price plan.
	 * @param id int Price plan ID
	 * @param pricePlan PricePlan Price plan to update
	 * @return KalturaPricePlan
	 */
	static update(id, pricePlan){
		let kparams = {};
		kparams.id = id;
		kparams.pricePlan = pricePlan;
		return new kaltura.RequestBuilder('priceplan', 'update', kparams);
	};
}
module.exports.pricePlan = pricePlan;


/**
 *Class definition for the Kaltura service: productPrice.
 * The available service actions:
 * @action list Returns a price and a purchase status for each subscription or/and media file, for a given user (if passed) and with the consideration of a coupon code (if passed).
 */
class productPrice{
	
	/**
	 * Returns a price and a purchase status for each subscription or/and media file, for a given user (if passed) and with the consideration of a coupon code (if passed).
	 * @param filter ProductPriceFilter Request filter
	 * @return KalturaProductPriceListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('productprice', 'list', kparams);
	};
}
module.exports.productPrice = productPrice;


/**
 *Class definition for the Kaltura service: programAssetGroupOffer.
 * The available service actions:
 * @action add Insert new ProgramAssetGroupOffer for partner.
 * @action delete Delete programAssetGroupOffer.
 * @action list Gets all Program asset group offer.
 * @action update Update ProgramAssetGroupOffer.
 */
class programAssetGroupOffer{
	
	/**
	 * Insert new ProgramAssetGroupOffer for partner.
	 * @param programAssetGroupOffer ProgramAssetGroupOffer programAssetGroupOffer object
	 * @return KalturaProgramAssetGroupOffer
	 */
	static add(programAssetGroupOffer){
		let kparams = {};
		kparams.programAssetGroupOffer = programAssetGroupOffer;
		return new kaltura.RequestBuilder('programassetgroupoffer', 'add', kparams);
	};
	
	/**
	 * Delete programAssetGroupOffer.
	 * @param id int ProgramAssetGroupOffer id
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('programassetgroupoffer', 'delete', kparams);
	};
	
	/**
	 * Gets all Program asset group offer.
	 * @param filter ProgramAssetGroupOfferFilter Filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaProgramAssetGroupOfferListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('programassetgroupoffer', 'list', kparams);
	};
	
	/**
	 * Update ProgramAssetGroupOffer.
	 * @param id int ProgramAssetGroupOffer id
	 * @param programAssetGroupOffer ProgramAssetGroupOffer ProgramAssetGroupOffer
	 * @return KalturaProgramAssetGroupOffer
	 */
	static update(id, programAssetGroupOffer){
		let kparams = {};
		kparams.id = id;
		kparams.programAssetGroupOffer = programAssetGroupOffer;
		return new kaltura.RequestBuilder('programassetgroupoffer', 'update', kparams);
	};
}
module.exports.programAssetGroupOffer = programAssetGroupOffer;


/**
 *Class definition for the Kaltura service: purchaseSettings.
 * The available service actions:
 * @action get Retrieve the purchase settings.
 * Includes specification of where these settings were defined – account, household or user.
 * @action update Set a purchase PIN for the household or user.
 */
class purchaseSettings{
	
	/**
	 * Retrieve the purchase settings.
 * Includes specification of where these settings were defined – account, household or user.
	 * @param by string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @return KalturaPurchaseSettings
	 */
	static get(by){
		let kparams = {};
		kparams.by = by;
		return new kaltura.RequestBuilder('purchasesettings', 'get', kparams);
	};
	
	/**
	 * Set a purchase PIN for the household or user.
	 * @param entityReference string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @param settings PurchaseSettings New settings to apply
	 * @return KalturaPurchaseSettings
	 */
	static update(entityReference, settings){
		let kparams = {};
		kparams.entityReference = entityReference;
		kparams.settings = settings;
		return new kaltura.RequestBuilder('purchasesettings', 'update', kparams);
	};
}
module.exports.purchaseSettings = purchaseSettings;


/**
 *Class definition for the Kaltura service: ratio.
 * The available service actions:
 * @action add Add new group ratio.
 * @action list Get the list of available ratios.
 * @action update Update group ratio&#39;s PrecisionPrecentage.
 */
class ratio{
	
	/**
	 * Add new group ratio.
	 * @param ratio Ratio Ratio to add for the partner
	 * @return KalturaRatio
	 */
	static add(ratio){
		let kparams = {};
		kparams.ratio = ratio;
		return new kaltura.RequestBuilder('ratio', 'add', kparams);
	};
	
	/**
	 * Get the list of available ratios.
	 * @return KalturaRatioListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('ratio', 'list', kparams);
	};
	
	/**
	 * Update group ratio&#39;s PrecisionPrecentage.
	 * @param id int The ratio ID
	 * @param ratio Ratio Ratio to update for the partner
	 * @return KalturaRatio
	 */
	static update(id, ratio){
		let kparams = {};
		kparams.id = id;
		kparams.ratio = ratio;
		return new kaltura.RequestBuilder('ratio', 'update', kparams);
	};
}
module.exports.ratio = ratio;


/**
 *Class definition for the Kaltura service: recommendationProfile.
 * The available service actions:
 * @action add Insert new recommendation engine for partner.
 * @action delete Delete recommendation engine by recommendation engine id.
 * @action generateSharedSecret Generate recommendation engine  shared secret.
 * @action list Returns all recommendation engines for partner.
 * @action update Update recommendation engine details.
 */
class recommendationProfile{
	
	/**
	 * Insert new recommendation engine for partner.
	 * @param recommendationEngine RecommendationProfile recommendation engine Object
	 * @return KalturaRecommendationProfile
	 */
	static add(recommendationEngine){
		let kparams = {};
		kparams.recommendationEngine = recommendationEngine;
		return new kaltura.RequestBuilder('recommendationprofile', 'add', kparams);
	};
	
	/**
	 * Delete recommendation engine by recommendation engine id.
	 * @param id int recommendation engine Identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('recommendationprofile', 'delete', kparams);
	};
	
	/**
	 * Generate recommendation engine  shared secret.
	 * @param recommendationEngineId int recommendation engine Identifier
	 * @return KalturaRecommendationProfile
	 */
	static generateSharedSecret(recommendationEngineId){
		let kparams = {};
		kparams.recommendationEngineId = recommendationEngineId;
		return new kaltura.RequestBuilder('recommendationprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Returns all recommendation engines for partner.
	 * @return KalturaRecommendationProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('recommendationprofile', 'list', kparams);
	};
	
	/**
	 * Update recommendation engine details.
	 * @param recommendationEngineId int recommendation engine identifier
	 * @param recommendationEngine RecommendationProfile recommendation engine Object
	 * @return KalturaRecommendationProfile
	 */
	static update(recommendationEngineId, recommendationEngine){
		let kparams = {};
		kparams.recommendationEngineId = recommendationEngineId;
		kparams.recommendationEngine = recommendationEngine;
		return new kaltura.RequestBuilder('recommendationprofile', 'update', kparams);
	};
}
module.exports.recommendationProfile = recommendationProfile;


/**
 *Class definition for the Kaltura service: recording.
 * The available service actions:
 * @action add Issue a record request for a program.
 * @action bulkdelete Delete list of user&#39;s recordings. Recording can be deleted only in status Recorded.
 * Possible error codes for each recording: RecordingNotFound = 3039, RecordingStatusNotValid = 3043, Error = 1.
 * @action cancel Cancel a previously requested recording. Cancel recording can be called for recording in status Scheduled or Recording Only.
 * @action delete Delete one or more user recording(s). Delete recording can be called only for recordings in status Recorded.
 * @action get Returns recording object by internal identifier.
 * @action immediateRecord Immediate Record.
 * @action list Return a list of recordings for the household with optional filter by status and KSQL.
 * @action protect Deprecated, please use recording.update instead
 * Protects an existing recording from the cleanup process for the defined protection period.
 * @action stop Stop ongoing household recording.
 * @action update Update an existing recording with is protected field.
 */
class recording{
	
	/**
	 * Issue a record request for a program.
	 * @param recording Recording Recording Object
	 * @return KalturaRecording
	 */
	static add(recording){
		let kparams = {};
		kparams.recording = recording;
		return new kaltura.RequestBuilder('recording', 'add', kparams);
	};
	
	/**
	 * Delete list of user&#39;s recordings. Recording can be deleted only in status Recorded.
 * Possible error codes for each recording: RecordingNotFound = 3039, RecordingStatusNotValid = 3043, Error = 1.
	 * @param recordingIds string Recording identifiers. Up to 40 private copies and up to 100 shared copies can be deleted withing a call
	 * @return array
	 */
	static bulkdelete(recordingIds){
		let kparams = {};
		kparams.recordingIds = recordingIds;
		return new kaltura.RequestBuilder('recording', 'bulkdelete', kparams);
	};
	
	/**
	 * Cancel a previously requested recording. Cancel recording can be called for recording in status Scheduled or Recording Only.
	 * @param id int Recording identifier
	 * @return KalturaRecording
	 */
	static cancel(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('recording', 'cancel', kparams);
	};
	
	/**
	 * Delete one or more user recording(s). Delete recording can be called only for recordings in status Recorded.
	 * @param id int Recording identifier
	 * @return KalturaRecording
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('recording', 'delete', kparams);
	};
	
	/**
	 * Returns recording object by internal identifier.
	 * @param id int Recording identifier
	 * @return KalturaRecording
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('recording', 'get', kparams);
	};
	
	/**
	 * Immediate Record.
	 * @param assetId int asset identifier
	 * @param endPadding int end padding offset (optional, default: null)
	 * @return KalturaImmediateRecording
	 */
	static immediateRecord(assetId, endPadding = null){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.endPadding = endPadding;
		return new kaltura.RequestBuilder('recording', 'immediateRecord', kparams);
	};
	
	/**
	 * Return a list of recordings for the household with optional filter by status and KSQL.
	 * @param filter RecordingFilter Filter parameters for filtering out the result (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaRecordingListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('recording', 'list', kparams);
	};
	
	/**
	 * Deprecated, please use recording.update instead
 * Protects an existing recording from the cleanup process for the defined protection period.
	 * @param id int Recording identifier
	 * @return KalturaRecording
	 */
	static protect(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('recording', 'protect', kparams);
	};
	
	/**
	 * Stop ongoing household recording.
	 * @param assetId int asset identifier
	 * @param id int household recording identifier
	 * @return KalturaRecording
	 */
	static stop(assetId, id){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.id = id;
		return new kaltura.RequestBuilder('recording', 'stop', kparams);
	};
	
	/**
	 * Update an existing recording with is protected field.
	 * @param id int recording identifier
	 * @param recording Recording recording to update
	 * @return KalturaRecording
	 */
	static update(id, recording){
		let kparams = {};
		kparams.id = id;
		kparams.recording = recording;
		return new kaltura.RequestBuilder('recording', 'update', kparams);
	};
}
module.exports.recording = recording;


/**
 *Class definition for the Kaltura service: region.
 * The available service actions:
 * @action add Adds a new region for partner.
 * @action linearchannelbulkadd Adds a linear channel to the list of regions.
 * @action linearchannelbulkdelete Deletes a linear channel from the list of regions.
 * @action delete Delete an existing region.
 * @action list Returns all regions for the partner.
 * @action update Update an existing region.
 */
class region{
	
	/**
	 * Adds a new region for partner.
	 * @param region Region Region to add
	 * @return KalturaRegion
	 */
	static add(region){
		let kparams = {};
		kparams.region = region;
		return new kaltura.RequestBuilder('region', 'add', kparams);
	};
	
	/**
	 * Adds a linear channel to the list of regions.
	 * @param linearChannelId int The identifier of the linear channel
	 * @param regionChannelNumbers array List of regions and number of linear channel in it
	 * @return bool
	 */
	static linearchannelbulkadd(linearChannelId, regionChannelNumbers){
		let kparams = {};
		kparams.linearChannelId = linearChannelId;
		kparams.regionChannelNumbers = regionChannelNumbers;
		return new kaltura.RequestBuilder('region', 'linearchannelbulkadd', kparams);
	};
	
	/**
	 * Deletes a linear channel from the list of regions.
	 * @param linearChannelId int The identifier of the linear channel
	 * @param regionIds string List of identifiers of regions
	 * @return bool
	 */
	static linearchannelbulkdelete(linearChannelId, regionIds){
		let kparams = {};
		kparams.linearChannelId = linearChannelId;
		kparams.regionIds = regionIds;
		return new kaltura.RequestBuilder('region', 'linearchannelbulkdelete', kparams);
	};
	
	/**
	 * Delete an existing region.
	 * @param id int Region ID to delete
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('region', 'delete', kparams);
	};
	
	/**
	 * Returns all regions for the partner.
	 * @param filter BaseRegionFilter Regions filter
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaRegionListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('region', 'list', kparams);
	};
	
	/**
	 * Update an existing region.
	 * @param id int Region ID to update
	 * @param region Region Region to update
	 * @return KalturaRegion
	 */
	static update(id, region){
		let kparams = {};
		kparams.id = id;
		kparams.region = region;
		return new kaltura.RequestBuilder('region', 'update', kparams);
	};
}
module.exports.region = region;


/**
 *Class definition for the Kaltura service: registrySettings.
 * The available service actions:
 * @action list Retrieve the registry settings.
 */
class registrySettings{
	
	/**
	 * Retrieve the registry settings.
	 * @return KalturaRegistrySettingsListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('registrysettings', 'list', kparams);
	};
}
module.exports.registrySettings = registrySettings;


/**
 *Class definition for the Kaltura service: reminder.
 * The available service actions:
 * @action add Add a new future reminder.
 * @action delete Delete a reminder. Reminder cannot be delete while being sent.
 * @action deleteWithToken Delete a reminder. Reminder cannot be delete while being sent.
 * @action list Return a list of reminders with optional filter by KSQL.
 */
class reminder{
	
	/**
	 * Add a new future reminder.
	 * @param reminder Reminder The reminder to be added
	 * @return KalturaReminder
	 */
	static add(reminder){
		let kparams = {};
		kparams.reminder = reminder;
		return new kaltura.RequestBuilder('reminder', 'add', kparams);
	};
	
	/**
	 * Delete a reminder. Reminder cannot be delete while being sent.
	 * @param id int Id of the reminder
	 * @param type string Reminder type (enum: KalturaReminderType)
	 * @return bool
	 */
	static deleteAction(id, type){
		let kparams = {};
		kparams.id = id;
		kparams.type = type;
		return new kaltura.RequestBuilder('reminder', 'delete', kparams);
	};
	
	/**
	 * Delete a reminder. Reminder cannot be delete while being sent.
	 * @param id int Id of the reminder
	 * @param type string Reminder type (enum: KalturaReminderType)
	 * @param token string User's token identifier
	 * @param partnerId int Partner identifier
	 */
	static deleteWithToken(id, type, token, partnerId){
		let kparams = {};
		kparams.id = id;
		kparams.type = type;
		kparams.token = token;
		kparams.partnerId = partnerId;
		return new kaltura.RequestBuilder('reminder', 'deleteWithToken', kparams);
	};
	
	/**
	 * Return a list of reminders with optional filter by KSQL.
	 * @param filter ReminderFilter Filter object
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaReminderListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('reminder', 'list', kparams);
	};
}
module.exports.reminder = reminder;


/**
 *Class definition for the Kaltura service: report.
 * The available service actions:
 * @action get Return a device configuration retrieval log request for a specific device.
 * @action list Return device configurations retrieval log. Supports paging and can be filtered with the parameter &quot;FromData&quot;.
 */
class report{
	
	/**
	 * Return a device configuration retrieval log request for a specific device.
	 * @param udid string Device UDID
	 * @return KalturaReport
	 */
	static get(udid){
		let kparams = {};
		kparams.udid = udid;
		return new kaltura.RequestBuilder('report', 'get', kparams);
	};
	
	/**
	 * Return device configurations retrieval log. Supports paging and can be filtered with the parameter &quot;FromData&quot;.
	 * @param filter ReportFilter Filter option for from date (sec)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaReportListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('report', 'list', kparams);
	};
}
module.exports.report = report;


/**
 *Class definition for the Kaltura service: searchHistory.
 * The available service actions:
 * @action clean Clean the user’s search history.
 * @action delete Delete a specific search history.
 * Possible error code: 2032 - ItemNotFound.
 * @action list Get user&#39;s last search requests.
 */
class searchHistory{
	
	/**
	 * Clean the user’s search history.
	 * @param filter SearchHistoryFilter Filter of search history (optional, default: null)
	 * @return bool
	 */
	static clean(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('searchhistory', 'clean', kparams);
	};
	
	/**
	 * Delete a specific search history.
 * Possible error code: 2032 - ItemNotFound.
	 * @param id string ID of the search history reference as shown in the list action
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('searchhistory', 'delete', kparams);
	};
	
	/**
	 * Get user&#39;s last search requests.
	 * @param filter SearchHistoryFilter Filter parameters for filtering out the result (optional, default: null)
	 * @param pager FilterPager Page size and index. Number of assets to return per page. Possible range 5 ≤ size ≥ 50. If omitted - will be set to 25. If a value > 50 provided – will set to 50> (optional, default: null)
	 * @return KalturaSearchHistoryListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('searchhistory', 'list', kparams);
	};
}
module.exports.searchHistory = searchHistory;


/**
 *Class definition for the Kaltura service: searchPriorityGroup.
 * The available service actions:
 * @action add Add a new priority group.
 * @action delete Delete the existing priority group by its identifier.
 * @action list Gets list of search priority groups which meet the filter criteria.
 * @action update Update an existing priority group.
 */
class searchPriorityGroup{
	
	/**
	 * Add a new priority group.
	 * @param searchPriorityGroup SearchPriorityGroup Search priority group
	 * @return KalturaSearchPriorityGroup
	 */
	static add(searchPriorityGroup){
		let kparams = {};
		kparams.searchPriorityGroup = searchPriorityGroup;
		return new kaltura.RequestBuilder('searchprioritygroup', 'add', kparams);
	};
	
	/**
	 * Delete the existing priority group by its identifier.
	 * @param id int The identifier of a search priority group
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('searchprioritygroup', 'delete', kparams);
	};
	
	/**
	 * Gets list of search priority groups which meet the filter criteria.
	 * @param filter SearchPriorityGroupFilter Filter
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaSearchPriorityGroupListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('searchprioritygroup', 'list', kparams);
	};
	
	/**
	 * Update an existing priority group.
	 * @param id int Identifier of search priority group
	 * @param searchPriorityGroup SearchPriorityGroup Search priority group
	 * @return KalturaSearchPriorityGroup
	 */
	static update(id, searchPriorityGroup){
		let kparams = {};
		kparams.id = id;
		kparams.searchPriorityGroup = searchPriorityGroup;
		return new kaltura.RequestBuilder('searchprioritygroup', 'update', kparams);
	};
}
module.exports.searchPriorityGroup = searchPriorityGroup;


/**
 *Class definition for the Kaltura service: searchPriorityGroupOrderedIdsSet.
 * The available service actions:
 * @action get Return the current ordering of priority groups for the partner.
 * @action set Set the ordering of priority groups for the partner.
 */
class searchPriorityGroupOrderedIdsSet{
	
	/**
	 * Return the current ordering of priority groups for the partner.
	 * @return KalturaSearchPriorityGroupOrderedIdsSet
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('searchprioritygrouporderedidsset', 'get', kparams);
	};
	
	/**
	 * Set the ordering of priority groups for the partner.
	 * @param orderedList SearchPriorityGroupOrderedIdsSet List with ordered search priority groups
	 * @return KalturaSearchPriorityGroupOrderedIdsSet
	 */
	static set(orderedList){
		let kparams = {};
		kparams.orderedList = orderedList;
		return new kaltura.RequestBuilder('searchprioritygrouporderedidsset', 'set', kparams);
	};
}
module.exports.searchPriorityGroupOrderedIdsSet = searchPriorityGroupOrderedIdsSet;


/**
 *Class definition for the Kaltura service: segmentationType.
 * The available service actions:
 * @action add Adds a new segmentation type to the system.
 * @action delete Delete a segmentation type from the system.
 * @action getPartnerConfiguration Gets existing partner segmentation configuration.
 * @action list Lists all segmentation types in group.
 * @action update Updates an existing segmentation type.
 * @action updatePartnerConfiguration Sets partner configuration for segments configuration.
 */
class segmentationType{
	
	/**
	 * Adds a new segmentation type to the system.
	 * @param segmentationType SegmentationType The segmentation type to be added
	 * @return KalturaSegmentationType
	 */
	static add(segmentationType){
		let kparams = {};
		kparams.segmentationType = segmentationType;
		return new kaltura.RequestBuilder('segmentationtype', 'add', kparams);
	};
	
	/**
	 * Delete a segmentation type from the system.
	 * @param id int Segmentation type id
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('segmentationtype', 'delete', kparams);
	};
	
	/**
	 * Gets existing partner segmentation configuration.
	 * @return KalturaSegmentationPartnerConfiguration
	 */
	static getPartnerConfiguration(){
		let kparams = {};
		return new kaltura.RequestBuilder('segmentationtype', 'getPartnerConfiguration', kparams);
	};
	
	/**
	 * Lists all segmentation types in group.
	 * @param filter BaseSegmentationTypeFilter Segmentation type filter - basically empty (optional, default: null)
	 * @param pager FilterPager Simple pager (optional, default: null)
	 * @return KalturaSegmentationTypeListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('segmentationtype', 'list', kparams);
	};
	
	/**
	 * Updates an existing segmentation type.
	 * @param segmentationTypeId int The ID of the object that will be updated
	 * @param segmentationType SegmentationType The segmentation type to be updated
	 * @return KalturaSegmentationType
	 */
	static update(segmentationTypeId, segmentationType){
		let kparams = {};
		kparams.segmentationTypeId = segmentationTypeId;
		kparams.segmentationType = segmentationType;
		return new kaltura.RequestBuilder('segmentationtype', 'update', kparams);
	};
	
	/**
	 * Sets partner configuration for segments configuration.
	 * @param configuration SegmentationPartnerConfiguration 1. maxDynamicSegments - how many dynamic segments (segments with conditions) the operator is allowed to have.
 * Displayed in the OPC as *'Maximum Number of Dynamic Segments'
 * *maxCalculatedPeriod -
 * the maximum number of past days to be calculated for dynamic segments. e.g. the last 60 days, the last 90 days etc.
 * Displayed in OPC as *'Maximum of Dynamic Segments period'*
	 * @return bool
	 */
	static updatePartnerConfiguration(configuration){
		let kparams = {};
		kparams.configuration = configuration;
		return new kaltura.RequestBuilder('segmentationtype', 'updatePartnerConfiguration', kparams);
	};
}
module.exports.segmentationType = segmentationType;


/**
 *Class definition for the Kaltura service: seriesRecording.
 * The available service actions:
 * @action add Issue a record request for a complete season or series.
 * @action cancel Cancel a previously requested series recording. Cancel series recording can be called for recording in status Scheduled or Recording Only.
 * @action cancelByEpgId Cancel EPG recording that was recorded as part of series.
 * @action cancelBySeasonNumber Cancel Season recording epgs that was recorded as part of series.
 * @action delete Delete series recording(s). Delete series recording can be called recordings in any status.
 * @action deleteBySeasonNumber Delete Season recording epgs that was recorded as part of series.
 * @action list Return a list of series recordings for the household with optional filter by status and KSQL.
 * @action rebookCanceledByEpgId Enable EPG recording that was canceled as part of series.
 */
class seriesRecording{
	
	/**
	 * Issue a record request for a complete season or series.
	 * @param recording SeriesRecording SeriesRecording Object
	 * @return KalturaSeriesRecording
	 */
	static add(recording){
		let kparams = {};
		kparams.recording = recording;
		return new kaltura.RequestBuilder('seriesrecording', 'add', kparams);
	};
	
	/**
	 * Cancel a previously requested series recording. Cancel series recording can be called for recording in status Scheduled or Recording Only.
	 * @param id int Series Recording identifier
	 * @return KalturaSeriesRecording
	 */
	static cancel(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('seriesrecording', 'cancel', kparams);
	};
	
	/**
	 * Cancel EPG recording that was recorded as part of series.
	 * @param id int Series Recording identifier
	 * @param epgId int epg program identifier
	 * @return KalturaSeriesRecording
	 */
	static cancelByEpgId(id, epgId){
		let kparams = {};
		kparams.id = id;
		kparams.epgId = epgId;
		return new kaltura.RequestBuilder('seriesrecording', 'cancelByEpgId', kparams);
	};
	
	/**
	 * Cancel Season recording epgs that was recorded as part of series.
	 * @param id int Series Recording identifier
	 * @param seasonNumber int Season Number
	 * @return KalturaSeriesRecording
	 */
	static cancelBySeasonNumber(id, seasonNumber){
		let kparams = {};
		kparams.id = id;
		kparams.seasonNumber = seasonNumber;
		return new kaltura.RequestBuilder('seriesrecording', 'cancelBySeasonNumber', kparams);
	};
	
	/**
	 * Delete series recording(s). Delete series recording can be called recordings in any status.
	 * @param id int Series Recording identifier
	 * @return KalturaSeriesRecording
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('seriesrecording', 'delete', kparams);
	};
	
	/**
	 * Delete Season recording epgs that was recorded as part of series.
	 * @param id int Series Recording identifier
	 * @param seasonNumber int Season Number
	 * @return KalturaSeriesRecording
	 */
	static deleteBySeasonNumber(id, seasonNumber){
		let kparams = {};
		kparams.id = id;
		kparams.seasonNumber = seasonNumber;
		return new kaltura.RequestBuilder('seriesrecording', 'deleteBySeasonNumber', kparams);
	};
	
	/**
	 * Return a list of series recordings for the household with optional filter by status and KSQL.
	 * @param filter SeriesRecordingFilter Filter parameters for filtering out the result - support order by only - START_DATE_ASC, START_DATE_DESC, ID_ASC,ID_DESC,SERIES_ID_ASC, SERIES_ID_DESC (optional, default: null)
	 * @return KalturaSeriesRecordingListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('seriesrecording', 'list', kparams);
	};
	
	/**
	 * Enable EPG recording that was canceled as part of series.
	 * @param epgId int EPG program identifies
	 * @return KalturaSeriesRecording
	 */
	static rebookCanceledByEpgId(epgId){
		let kparams = {};
		kparams.epgId = epgId;
		return new kaltura.RequestBuilder('seriesrecording', 'rebookCanceledByEpgId', kparams);
	};
}
module.exports.seriesRecording = seriesRecording;


/**
 *Class definition for the Kaltura service: session.
 * The available service actions:
 * @action get Parses KS.
 * @action revoke Revokes all the sessions (KS) of a given user.
 * @action switchUser Switching the user in the session by generating a new session for a new user within the same household.
 */
class session{
	
	/**
	 * Parses KS.
	 * @param session string Additional KS to parse, if not passed the user's KS will be parsed (optional, default: null)
	 * @return KalturaSession
	 */
	static get(session = null){
		let kparams = {};
		kparams.session = session;
		return new kaltura.RequestBuilder('session', 'get', kparams);
	};
	
	/**
	 * Revokes all the sessions (KS) of a given user.
	 * @return bool
	 */
	static revoke(){
		let kparams = {};
		return new kaltura.RequestBuilder('session', 'revoke', kparams);
	};
	
	/**
	 * Switching the user in the session by generating a new session for a new user within the same household.
	 * @param userIdToSwitch string The identifier of the user to change
	 * @return KalturaLoginSession
	 */
	static switchUser(userIdToSwitch){
		let kparams = {};
		kparams.userIdToSwitch = userIdToSwitch;
		return new kaltura.RequestBuilder('session', 'switchUser', kparams);
	};
}
module.exports.session = session;


/**
 *Class definition for the Kaltura service: smsAdapterProfile.
 * The available service actions:
 * @action add SmsAdapterProfile add.
 * @action delete Remove SmsAdapterProfile.
 * @action generateSharedSecret Generate Sms Adapter shared secret.
 * @action get Get SmsAdapterProfile.
 * @action list Gets all SmsAdapterProfile items.
 * @action update SmsAdapterProfile update.
 */
class smsAdapterProfile{
	
	/**
	 * SmsAdapterProfile add.
	 * @param objectToAdd SmsAdapterProfile SmsAdapterProfile details
	 * @return KalturaSmsAdapterProfile
	 */
	static add(objectToAdd){
		let kparams = {};
		kparams.objectToAdd = objectToAdd;
		return new kaltura.RequestBuilder('smsadapterprofile', 'add', kparams);
	};
	
	/**
	 * Remove SmsAdapterProfile.
	 * @param id int SmsAdapterProfile identifier
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('smsadapterprofile', 'delete', kparams);
	};
	
	/**
	 * Generate Sms Adapter shared secret.
	 * @param smsAdapterId int Sms Adapter identifier
	 * @return KalturaSmsAdapterProfile
	 */
	static generateSharedSecret(smsAdapterId){
		let kparams = {};
		kparams.smsAdapterId = smsAdapterId;
		return new kaltura.RequestBuilder('smsadapterprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Get SmsAdapterProfile.
	 * @param id int SmsAdapterProfile identifier
	 * @return KalturaSmsAdapterProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('smsadapterprofile', 'get', kparams);
	};
	
	/**
	 * Gets all SmsAdapterProfile items.
	 * @param filter SmsAdapterProfileFilter Filter (optional, default: null)
	 * @return KalturaSmsAdapterProfileListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('smsadapterprofile', 'list', kparams);
	};
	
	/**
	 * SmsAdapterProfile update.
	 * @param id int SmsAdapterProfile identifier
	 * @param objectToUpdate SmsAdapterProfile SmsAdapterProfile details
	 * @return KalturaSmsAdapterProfile
	 */
	static update(id, objectToUpdate){
		let kparams = {};
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new kaltura.RequestBuilder('smsadapterprofile', 'update', kparams);
	};
}
module.exports.smsAdapterProfile = smsAdapterProfile;


/**
 *Class definition for the Kaltura service: socialAction.
 * The available service actions:
 * @action add Insert new user social action.
 * @action delete delete user social action.
 * @action list Get list of user social actions.
 */
class socialAction{
	
	/**
	 * Insert new user social action.
	 * @param socialAction SocialAction social Action Object
	 * @return KalturaUserSocialActionResponse
	 */
	static add(socialAction){
		let kparams = {};
		kparams.socialAction = socialAction;
		return new kaltura.RequestBuilder('socialaction', 'add', kparams);
	};
	
	/**
	 * delete user social action.
	 * @param id string social Action Id
	 * @return array
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('socialaction', 'delete', kparams);
	};
	
	/**
	 * Get list of user social actions.
	 * @param filter SocialActionFilter social action filter
	 * @param pager FilterPager pager (optional, default: null)
	 * @return KalturaSocialActionListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('socialaction', 'list', kparams);
	};
}
module.exports.socialAction = socialAction;


/**
 *Class definition for the Kaltura service: socialComment.
 * The available service actions:
 * @action list Get a list of all social comments filtered by asset ID and social platform.
 */
class socialComment{
	
	/**
	 * Get a list of all social comments filtered by asset ID and social platform.
	 * @param filter SocialCommentFilter Country filter
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaSocialCommentListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('socialcomment', 'list', kparams);
	};
}
module.exports.socialComment = socialComment;


/**
 *Class definition for the Kaltura service: social.
 * The available service actions:
 * @action get List social accounts.
 * @action getByToken Return the user object with social information according to a provided external social token.
 * @action getConfiguration Retrieve the social network’s configuration information.
 * @action login Login using social token.
 * @action merge Connect an existing user in the system to an external social network user.
 * @action register Create a new user in the system using a provided external social token.
 * @action unmerge Disconnect an existing user in the system from its external social network user.
 * @action UpdateConfiguration Set the user social network’s configuration information.
 */
class social{
	
	/**
	 * List social accounts.
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @return KalturaSocial
	 */
	static get(type){
		let kparams = {};
		kparams.type = type;
		return new kaltura.RequestBuilder('social', 'get', kparams);
	};
	
	/**
	 * Return the user object with social information according to a provided external social token.
	 * @param partnerId int Partner identifier
	 * @param token string Social token
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @return KalturaSocial
	 */
	static getByToken(partnerId, token, type){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.type = type;
		return new kaltura.RequestBuilder('social', 'getByToken', kparams);
	};
	
	/**
	 * Retrieve the social network’s configuration information.
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @param partnerId int Partner identifier (optional, default: null)
	 * @return KalturaSocialConfig
	 */
	static getConfiguration(type, partnerId = null){
		let kparams = {};
		kparams.type = type;
		kparams.partnerId = partnerId;
		return new kaltura.RequestBuilder('social', 'getConfiguration', kparams);
	};
	
	/**
	 * Login using social token.
	 * @param partnerId int Partner identifier
	 * @param token string Social token
	 * @param type string Social network (enum: KalturaSocialNetwork)
	 * @param udid string Device UDID (optional, default: null)
	 * @return KalturaLoginResponse
	 */
	static login(partnerId, token, type, udid = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.type = type;
		kparams.udid = udid;
		return new kaltura.RequestBuilder('social', 'login', kparams);
	};
	
	/**
	 * Connect an existing user in the system to an external social network user.
	 * @param token string social token
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @return KalturaSocial
	 */
	static merge(token, type){
		let kparams = {};
		kparams.token = token;
		kparams.type = type;
		return new kaltura.RequestBuilder('social', 'merge', kparams);
	};
	
	/**
	 * Create a new user in the system using a provided external social token.
	 * @param partnerId int Partner identifier
	 * @param token string social token
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @param email string User email (optional, default: null)
	 * @return KalturaSocial
	 */
	static register(partnerId, token, type, email = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.type = type;
		kparams.email = email;
		return new kaltura.RequestBuilder('social', 'register', kparams);
	};
	
	/**
	 * Disconnect an existing user in the system from its external social network user.
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @return KalturaSocial
	 */
	static unmerge(type){
		let kparams = {};
		kparams.type = type;
		return new kaltura.RequestBuilder('social', 'unmerge', kparams);
	};
	
	/**
	 * Set the user social network’s configuration information.
	 * @param configuration SocialConfig The social action settings
	 * @return KalturaSocialConfig
	 */
	static UpdateConfiguration(configuration){
		let kparams = {};
		kparams.configuration = configuration;
		return new kaltura.RequestBuilder('social', 'UpdateConfiguration', kparams);
	};
}
module.exports.social = social;


/**
 *Class definition for the Kaltura service: socialFriendActivity.
 * The available service actions:
 * @action list Get a list of the social friends activity for a user.
 */
class socialFriendActivity{
	
	/**
	 * Get a list of the social friends activity for a user.
	 * @param filter SocialFriendActivityFilter Social friend activity filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaSocialFriendActivityListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('socialfriendactivity', 'list', kparams);
	};
}
module.exports.socialFriendActivity = socialFriendActivity;


/**
 *Class definition for the Kaltura service: ssoAdapterProfile.
 * The available service actions:
 * @action add Insert new sso adapter for partner.
 * @action delete Delete sso adapters by sso adapters id.
 * @action generateSharedSecret Generate SSO Adapter shared secret.
 * @action invoke Request validation against 3rd party.
 * @action list Returns all sso adapters for partner : id + name.
 * @action update Update sso adapter details.
 */
class ssoAdapterProfile{
	
	/**
	 * Insert new sso adapter for partner.
	 * @param ssoAdapter SSOAdapterProfile SSO Adapter Object to be added
	 * @return KalturaSSOAdapterProfile
	 */
	static add(ssoAdapter){
		let kparams = {};
		kparams.ssoAdapter = ssoAdapter;
		return new kaltura.RequestBuilder('ssoadapterprofile', 'add', kparams);
	};
	
	/**
	 * Delete sso adapters by sso adapters id.
	 * @param ssoAdapterId int SSO Adapter Identifier
	 * @return bool
	 */
	static deleteAction(ssoAdapterId){
		let kparams = {};
		kparams.ssoAdapterId = ssoAdapterId;
		return new kaltura.RequestBuilder('ssoadapterprofile', 'delete', kparams);
	};
	
	/**
	 * Generate SSO Adapter shared secret.
	 * @param ssoAdapterId int SSO Adapter identifier
	 * @return KalturaSSOAdapterProfile
	 */
	static generateSharedSecret(ssoAdapterId){
		let kparams = {};
		kparams.ssoAdapterId = ssoAdapterId;
		return new kaltura.RequestBuilder('ssoadapterprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Request validation against 3rd party.
	 * @param intent string intent
	 * @param adapterData array adapter Data
	 * @return KalturaSSOAdapterProfileInvoke
	 */
	static invoke(intent, adapterData){
		let kparams = {};
		kparams.intent = intent;
		kparams.adapterData = adapterData;
		return new kaltura.RequestBuilder('ssoadapterprofile', 'invoke', kparams);
	};
	
	/**
	 * Returns all sso adapters for partner : id + name.
	 * @return KalturaSSOAdapterProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('ssoadapterprofile', 'list', kparams);
	};
	
	/**
	 * Update sso adapter details.
	 * @param ssoAdapterId int SSO Adapter Identifier
	 * @param ssoAdapter SSOAdapterProfile SSO Adapter Object
	 * @return KalturaSSOAdapterProfile
	 */
	static update(ssoAdapterId, ssoAdapter){
		let kparams = {};
		kparams.ssoAdapterId = ssoAdapterId;
		kparams.ssoAdapter = ssoAdapter;
		return new kaltura.RequestBuilder('ssoadapterprofile', 'update', kparams);
	};
}
module.exports.ssoAdapterProfile = ssoAdapterProfile;


/**
 *Class definition for the Kaltura service: streamingDevice.
 * The available service actions:
 * @action bookPlaybackSession Reserves a concurrency slot for the given asset-device combination.
 * @action list Lists of devices that are streaming at that moment.
 */
class streamingDevice{
	
	/**
	 * Reserves a concurrency slot for the given asset-device combination.
	 * @param fileId string KalturaMediaFile.id media file belonging to the asset for which a concurrency slot is being reserved
	 * @param assetId string KalturaAsset.id - asset for which a concurrency slot is being reserved
	 * @param assetType string Identifies the type of asset for which the concurrency slot is being reserved (enum: KalturaAssetType)
	 * @return bool
	 */
	static bookPlaybackSession(fileId, assetId, assetType){
		let kparams = {};
		kparams.fileId = fileId;
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		return new kaltura.RequestBuilder('streamingdevice', 'bookPlaybackSession', kparams);
	};
	
	/**
	 * Lists of devices that are streaming at that moment.
	 * @param filter StreamingDeviceFilter Segmentation type filter - basically empty (optional, default: null)
	 * @return KalturaStreamingDeviceListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('streamingdevice', 'list', kparams);
	};
}
module.exports.streamingDevice = streamingDevice;


/**
 *Class definition for the Kaltura service: subscription.
 * The available service actions:
 * @action add Insert new subscription for partner.
 * @action delete Delete subscription.
 * @action list Returns a list of subscriptions requested by Subscription ID or file ID.
 * @action update Update Subscription.
 * @action validateCoupon Returns information about a coupon for subscription.
 */
class subscription{
	
	/**
	 * Insert new subscription for partner.
	 * @param subscription Subscription subscription object
	 * @return KalturaSubscription
	 */
	static add(subscription){
		let kparams = {};
		kparams.subscription = subscription;
		return new kaltura.RequestBuilder('subscription', 'add', kparams);
	};
	
	/**
	 * Delete subscription.
	 * @param id int Subscription id
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('subscription', 'delete', kparams);
	};
	
	/**
	 * Returns a list of subscriptions requested by Subscription ID or file ID.
	 * @param filter SubscriptionFilter Filter request (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaSubscriptionListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('subscription', 'list', kparams);
	};
	
	/**
	 * Update Subscription.
	 * @param id int Subscription id
	 * @param subscription Subscription Subscription
	 * @return KalturaSubscription
	 */
	static update(id, subscription){
		let kparams = {};
		kparams.id = id;
		kparams.subscription = subscription;
		return new kaltura.RequestBuilder('subscription', 'update', kparams);
	};
	
	/**
	 * Returns information about a coupon for subscription.
	 * @param id int subscription id
	 * @param code string coupon code
	 * @return KalturaCoupon
	 */
	static validateCoupon(id, code){
		let kparams = {};
		kparams.id = id;
		kparams.code = code;
		return new kaltura.RequestBuilder('subscription', 'validateCoupon', kparams);
	};
}
module.exports.subscription = subscription;


/**
 *Class definition for the Kaltura service: subscriptionSet.
 * The available service actions:
 * @action add Add a new subscriptionSet.
 * @action delete Delete a subscriptionSet.
 * @action get Get the subscriptionSet according to the Identifier.
 * @action list Returns a list of subscriptionSets requested by ids or subscription ids.
 * @action update Update the subscriptionSet.
 */
class subscriptionSet{
	
	/**
	 * Add a new subscriptionSet.
	 * @param subscriptionSet SubscriptionSet SubscriptionSet Object
	 * @return KalturaSubscriptionSet
	 */
	static add(subscriptionSet){
		let kparams = {};
		kparams.subscriptionSet = subscriptionSet;
		return new kaltura.RequestBuilder('subscriptionset', 'add', kparams);
	};
	
	/**
	 * Delete a subscriptionSet.
	 * @param id int SubscriptionSet Identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('subscriptionset', 'delete', kparams);
	};
	
	/**
	 * Get the subscriptionSet according to the Identifier.
	 * @param id int SubscriptionSet Identifier
	 * @return KalturaSubscriptionSet
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('subscriptionset', 'get', kparams);
	};
	
	/**
	 * Returns a list of subscriptionSets requested by ids or subscription ids.
	 * @param filter SubscriptionSetFilter SubscriptionSet filter (optional, default: null)
	 * @return KalturaSubscriptionSetListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('subscriptionset', 'list', kparams);
	};
	
	/**
	 * Update the subscriptionSet.
	 * @param id int SubscriptionSet Identifier
	 * @param subscriptionSet SubscriptionSet SubscriptionSet Object
	 * @return KalturaSubscriptionSet
	 */
	static update(id, subscriptionSet){
		let kparams = {};
		kparams.id = id;
		kparams.subscriptionSet = subscriptionSet;
		return new kaltura.RequestBuilder('subscriptionset', 'update', kparams);
	};
}
module.exports.subscriptionSet = subscriptionSet;


/**
 *Class definition for the Kaltura service: system.
 * The available service actions:
 * @action clearLocalServerCache Clear local server cache.
 * @action getInvalidationKeyValue Returns the epoch value of an invalidation key if it was found.
 * @action getLayeredCacheGroupConfig Returns the current layered cache group config of the sent groupId. You need to send groupId only if you wish to get it for a specific groupId and not the one the KS belongs to.
 * @action getTime Returns current server timestamp.
 * @action getVersion Returns current server version.
 * @action incrementLayeredCacheGroupConfigVersion Returns true if version has been incremented successfully or false otherwise. You need to send groupId only if you wish to increment for a specific groupId and not the one the KS belongs to.
 * @action invalidateLayeredCacheInvalidationKey Returns true if the invalidation key was invalidated successfully or false otherwise.
 * @action ping Returns true.
 */
class system{
	
	/**
	 * Clear local server cache.
	 * @param clearCacheAction string clear cache action to perform, possible values: clear_all / keys / getKey (optional, default: null)
	 * @param key string key to get in case you send action getKey (optional, default: null)
	 * @return bool
	 */
	static clearLocalServerCache(clearCacheAction = null, key = null){
		let kparams = {};
		kparams.clearCacheAction = clearCacheAction;
		kparams.key = key;
		return new kaltura.RequestBuilder('system', 'clearLocalServerCache', kparams);
	};
	
	/**
	 * Returns the epoch value of an invalidation key if it was found.
	 * @param invalidationKey string the invalidation key to fetch it's value
	 * @param layeredCacheConfigName string the layered cache config name of the invalidation key (optional, default: null)
	 * @param groupId int groupId (optional)
	 * @return KalturaLongValue
	 */
	static getInvalidationKeyValue(invalidationKey, layeredCacheConfigName = null, groupId = 0){
		let kparams = {};
		kparams.invalidationKey = invalidationKey;
		kparams.layeredCacheConfigName = layeredCacheConfigName;
		kparams.groupId = groupId;
		return new kaltura.RequestBuilder('system', 'getInvalidationKeyValue', kparams);
	};
	
	/**
	 * Returns the current layered cache group config of the sent groupId. You need to send groupId only if you wish to get it for a specific groupId and not the one the KS belongs to.
	 * @param groupId int groupId (optional)
	 * @return KalturaStringValue
	 */
	static getLayeredCacheGroupConfig(groupId = 0){
		let kparams = {};
		kparams.groupId = groupId;
		return new kaltura.RequestBuilder('system', 'getLayeredCacheGroupConfig', kparams);
	};
	
	/**
	 * Returns current server timestamp.
	 * @return bigint
	 */
	static getTime(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'getTime', kparams);
	};
	
	/**
	 * Returns current server version.
	 * @return string
	 */
	static getVersion(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'getVersion', kparams);
	};
	
	/**
	 * Returns true if version has been incremented successfully or false otherwise. You need to send groupId only if you wish to increment for a specific groupId and not the one the KS belongs to.
	 * @param groupId int groupId (optional)
	 * @return bool
	 */
	static incrementLayeredCacheGroupConfigVersion(groupId = 0){
		let kparams = {};
		kparams.groupId = groupId;
		return new kaltura.RequestBuilder('system', 'incrementLayeredCacheGroupConfigVersion', kparams);
	};
	
	/**
	 * Returns true if the invalidation key was invalidated successfully or false otherwise.
	 * @param key string the invalidation key to invalidate
	 * @return bool
	 */
	static invalidateLayeredCacheInvalidationKey(key){
		let kparams = {};
		kparams.key = key;
		return new kaltura.RequestBuilder('system', 'invalidateLayeredCacheInvalidationKey', kparams);
	};
	
	/**
	 * Returns true.
	 * @return bool
	 */
	static ping(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'ping', kparams);
	};
}
module.exports.system = system;


/**
 *Class definition for the Kaltura service: tag.
 * The available service actions:
 * @action add Add a new tag.
 * @action delete Delete an existing tag.
 * @action list Get the list of tags for the partner.
 * @action update Update an existing tag.
 */
class tag{
	
	/**
	 * Add a new tag.
	 * @param tag Tag Tag Object
	 * @return KalturaTag
	 */
	static add(tag){
		let kparams = {};
		kparams.tag = tag;
		return new kaltura.RequestBuilder('tag', 'add', kparams);
	};
	
	/**
	 * Delete an existing tag.
	 * @param id int Tag Identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('tag', 'delete', kparams);
	};
	
	/**
	 * Get the list of tags for the partner.
	 * @param filter TagFilter Filter (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaTagListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('tag', 'list', kparams);
	};
	
	/**
	 * Update an existing tag.
	 * @param id int Tag Identifier
	 * @param tag Tag Tag Object
	 * @return KalturaTag
	 */
	static update(id, tag){
		let kparams = {};
		kparams.id = id;
		kparams.tag = tag;
		return new kaltura.RequestBuilder('tag', 'update', kparams);
	};
}
module.exports.tag = tag;


/**
 *Class definition for the Kaltura service: timeShiftedTvPartnerSettings.
 * The available service actions:
 * @action get Retrieve the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
 * @action update Configure the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
 */
class timeShiftedTvPartnerSettings{
	
	/**
	 * Retrieve the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
	 * @return KalturaTimeShiftedTvPartnerSettings
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('timeshiftedtvpartnersettings', 'get', kparams);
	};
	
	/**
	 * Configure the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
	 * @param settings TimeShiftedTvPartnerSettings Time shifted TV settings
	 * @return bool
	 */
	static update(settings){
		let kparams = {};
		kparams.settings = settings;
		return new kaltura.RequestBuilder('timeshiftedtvpartnersettings', 'update', kparams);
	};
}
module.exports.timeShiftedTvPartnerSettings = timeShiftedTvPartnerSettings;


/**
 *Class definition for the Kaltura service: topic.
 * The available service actions:
 * @action delete Deleted a topic.
 * @action get Gets a topic.
 * @action list Get list of topics.
 * @action updateStatus Updates a topic &quot;automatic issue notification&quot; behavior.
 */
class topic{
	
	/**
	 * Deleted a topic.
	 * @param id int Topic identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('topic', 'delete', kparams);
	};
	
	/**
	 * Gets a topic.
	 * @param id int Topic identifier
	 * @return KalturaTopic
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('topic', 'get', kparams);
	};
	
	/**
	 * Get list of topics.
	 * @param filter TopicFilter Topics filter (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaTopicListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('topic', 'list', kparams);
	};
	
	/**
	 * Updates a topic &quot;automatic issue notification&quot; behavior.
	 * @param id int Topic identifier
	 * @param automaticIssueNotification string Behavior options:
 * Inherit = 0: Take value from partner notification settings
 * Yes = 1: Issue a notification massage when a new episode is available on the catalog
 * No = 2: Do send a notification message when a new episode is available on the catalog (enum: KalturaTopicAutomaticIssueNotification)
	 * @return bool
	 */
	static updateStatus(id, automaticIssueNotification){
		let kparams = {};
		kparams.id = id;
		kparams.automaticIssueNotification = automaticIssueNotification;
		return new kaltura.RequestBuilder('topic', 'updateStatus', kparams);
	};
}
module.exports.topic = topic;


/**
 *Class definition for the Kaltura service: topicNotification.
 * The available service actions:
 * @action add Add a new topic notification.
 * @action delete Delete an existing topic notification.
 * @action list Lists all topic notifications in the system.
 * @action subscribe Subscribe a user to a topic notification.
 * @action unsubscribe Unubscribe a user from a topic notification.
 * @action update Update an existing topic notification.
 */
class topicNotification{
	
	/**
	 * Add a new topic notification.
	 * @param topicNotification TopicNotification The topic notification to add
	 * @return KalturaTopicNotification
	 */
	static add(topicNotification){
		let kparams = {};
		kparams.topicNotification = topicNotification;
		return new kaltura.RequestBuilder('topicnotification', 'add', kparams);
	};
	
	/**
	 * Delete an existing topic notification.
	 * @param id int ID of topic notification to delete
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('topicnotification', 'delete', kparams);
	};
	
	/**
	 * Lists all topic notifications in the system.
	 * @param filter TopicNotificationFilter Filter options
	 * @return KalturaTopicNotificationListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('topicnotification', 'list', kparams);
	};
	
	/**
	 * Subscribe a user to a topic notification.
	 * @param topicNotificationId int ID of topic notification to subscribe to
	 */
	static subscribe(topicNotificationId){
		let kparams = {};
		kparams.topicNotificationId = topicNotificationId;
		return new kaltura.RequestBuilder('topicnotification', 'subscribe', kparams);
	};
	
	/**
	 * Unubscribe a user from a topic notification.
	 * @param topicNotificationId int ID of topic notification to unsubscribe from
	 */
	static unsubscribe(topicNotificationId){
		let kparams = {};
		kparams.topicNotificationId = topicNotificationId;
		return new kaltura.RequestBuilder('topicnotification', 'unsubscribe', kparams);
	};
	
	/**
	 * Update an existing topic notification.
	 * @param id int The topic notification ID to update
	 * @param topicNotification TopicNotification The topic notification to update
	 * @return KalturaTopicNotification
	 */
	static update(id, topicNotification){
		let kparams = {};
		kparams.id = id;
		kparams.topicNotification = topicNotification;
		return new kaltura.RequestBuilder('topicnotification', 'update', kparams);
	};
}
module.exports.topicNotification = topicNotification;


/**
 *Class definition for the Kaltura service: topicNotificationMessage.
 * The available service actions:
 * @action add Add a new topic notification message.
 * @action delete Delete an existing topic notification message.
 * @action list Lists all topic notifications in the system.
 * @action update Update an existing topic notification message.
 */
class topicNotificationMessage{
	
	/**
	 * Add a new topic notification message.
	 * @param topicNotificationMessage TopicNotificationMessage The topic notification message to add
	 * @return KalturaTopicNotificationMessage
	 */
	static add(topicNotificationMessage){
		let kparams = {};
		kparams.topicNotificationMessage = topicNotificationMessage;
		return new kaltura.RequestBuilder('topicnotificationmessage', 'add', kparams);
	};
	
	/**
	 * Delete an existing topic notification message.
	 * @param id int ID of topic notification message to delete
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('topicnotificationmessage', 'delete', kparams);
	};
	
	/**
	 * Lists all topic notifications in the system.
	 * @param filter TopicNotificationMessageFilter Filter options (optional, default: null)
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaTopicNotificationMessageListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('topicnotificationmessage', 'list', kparams);
	};
	
	/**
	 * Update an existing topic notification message.
	 * @param id int The topic notification message ID to update
	 * @param topicNotificationMessage TopicNotificationMessage The topic notification message to update
	 * @return KalturaTopicNotificationMessage
	 */
	static update(id, topicNotificationMessage){
		let kparams = {};
		kparams.id = id;
		kparams.topicNotificationMessage = topicNotificationMessage;
		return new kaltura.RequestBuilder('topicnotificationmessage', 'update', kparams);
	};
}
module.exports.topicNotificationMessage = topicNotificationMessage;


/**
 *Class definition for the Kaltura service: transaction.
 * The available service actions:
 * @action downgrade downgrade specific subscription for a household. entitlements will be updated on the existing subscription end date.
 * @action getPurchaseSessionId Retrieve the purchase session identifier.
 * @action purchase Purchase specific product, subscription or Program asset group offer (PAGO) for a household. Upon successful charge entitlements to use the requested product or subscription are granted.
 * @action setWaiver This method shall set the waiver flag on the user entitlement table and the waiver date field to the current date.
 * @action updateStatus Updates a pending purchase transaction state.
 * @action upgrade upgrade specific subscription for a household. Upon successful charge entitlements to use the requested product or subscription are granted.
 * @action validateReceipt Verifies PPV/Subscription/Collection client purchase (such as InApp) and entitles the user.
 */
class transaction{
	
	/**
	 * downgrade specific subscription for a household. entitlements will be updated on the existing subscription end date.
	 * @param purchase Purchase Purchase properties
	 */
	static downgrade(purchase){
		let kparams = {};
		kparams.purchase = purchase;
		return new kaltura.RequestBuilder('transaction', 'downgrade', kparams);
	};
	
	/**
	 * Retrieve the purchase session identifier.
	 * @param purchaseSession PurchaseSession Purchase properties
	 * @return bigint
	 */
	static getPurchaseSessionId(purchaseSession){
		let kparams = {};
		kparams.purchaseSession = purchaseSession;
		return new kaltura.RequestBuilder('transaction', 'getPurchaseSessionId', kparams);
	};
	
	/**
	 * Purchase specific product, subscription or Program asset group offer (PAGO) for a household. Upon successful charge entitlements to use the requested product or subscription are granted.
	 * @param purchase Purchase Purchase properties
	 * @return KalturaTransaction
	 */
	static purchase(purchase){
		let kparams = {};
		kparams.purchase = purchase;
		return new kaltura.RequestBuilder('transaction', 'purchase', kparams);
	};
	
	/**
	 * This method shall set the waiver flag on the user entitlement table and the waiver date field to the current date.
	 * @param assetId int Asset identifier
	 * @param transactionType string The transaction type (enum: KalturaTransactionType)
	 * @return bool
	 */
	static setWaiver(assetId, transactionType){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.transactionType = transactionType;
		return new kaltura.RequestBuilder('transaction', 'setWaiver', kparams);
	};
	
	/**
	 * Updates a pending purchase transaction state.
	 * @param paymentGatewayId string Payment gateway identifier
	 * @param externalTransactionId string external transaction identifier
	 * @param signature string Security signature to validate the caller is a payment gateway adapter application
	 * @param status TransactionStatus Status properties
	 */
	static updateStatus(paymentGatewayId, externalTransactionId, signature, status){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.externalTransactionId = externalTransactionId;
		kparams.signature = signature;
		kparams.status = status;
		return new kaltura.RequestBuilder('transaction', 'updateStatus', kparams);
	};
	
	/**
	 * upgrade specific subscription for a household. Upon successful charge entitlements to use the requested product or subscription are granted.
	 * @param purchase Purchase Purchase properties
	 * @return KalturaTransaction
	 */
	static upgrade(purchase){
		let kparams = {};
		kparams.purchase = purchase;
		return new kaltura.RequestBuilder('transaction', 'upgrade', kparams);
	};
	
	/**
	 * Verifies PPV/Subscription/Collection client purchase (such as InApp) and entitles the user.
	 * @param externalReceipt ExternalReceipt Receipt properties
	 * @return KalturaTransaction
	 */
	static validateReceipt(externalReceipt){
		let kparams = {};
		kparams.externalReceipt = externalReceipt;
		return new kaltura.RequestBuilder('transaction', 'validateReceipt', kparams);
	};
}
module.exports.transaction = transaction;


/**
 *Class definition for the Kaltura service: transactionHistory.
 * The available service actions:
 * @action list Gets user or household transaction history.
 */
class transactionHistory{
	
	/**
	 * Gets user or household transaction history.
	 * @param filter TransactionHistoryFilter Filter by household or user (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaBillingTransactionListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('transactionhistory', 'list', kparams);
	};
}
module.exports.transactionHistory = transactionHistory;


/**
 *Class definition for the Kaltura service: tvmRule.
 * The available service actions:
 * @action list Get the list of tvm rules for the partner.
 */
class tvmRule{
	
	/**
	 * Get the list of tvm rules for the partner.
	 * @param filter TvmRuleFilter TvmRuleFilter Filter (optional, default: null)
	 * @return KalturaTvmRuleListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('tvmrule', 'list', kparams);
	};
}
module.exports.tvmRule = tvmRule;


/**
 *Class definition for the Kaltura service: unifiedPayment.
 * The available service actions:
 * @action getNextRenewal Returns the data about the next renewal.
 */
class unifiedPayment{
	
	/**
	 * Returns the data about the next renewal.
	 * @param id int Unified payment ID
	 * @return KalturaUnifiedPaymentRenewal
	 */
	static getNextRenewal(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('unifiedpayment', 'getNextRenewal', kparams);
	};
}
module.exports.unifiedPayment = unifiedPayment;


/**
 *Class definition for the Kaltura service: uploadToken.
 * The available service actions:
 * @action add Adds new upload token to upload a file.
 * @action upload Upload a file using the upload token id.
 */
class uploadToken{
	
	/**
	 * Adds new upload token to upload a file.
	 * @param uploadToken UploadToken Upload token details (optional, default: null)
	 * @return KalturaUploadToken
	 */
	static add(uploadToken = null){
		let kparams = {};
		kparams.uploadToken = uploadToken;
		return new kaltura.RequestBuilder('uploadtoken', 'add', kparams);
	};
	
	/**
	 * Upload a file using the upload token id.
	 * @param uploadTokenId string Identifier of existing upload-token
	 * @param fileData file File to upload
	 * @return KalturaUploadToken
	 */
	static upload(uploadTokenId, fileData){
		let kparams = {};
		kparams.uploadTokenId = uploadTokenId;
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('uploadtoken', 'upload', kparams, kfiles);
	};
}
module.exports.uploadToken = uploadToken;


/**
 *Class definition for the Kaltura service: usageModule.
 * The available service actions:
 * @action add Insert new UsageModule.
 * @action delete Delete UsageModule.
 * @action list Returns the list of available usage module.
 * @action update Update usage module.
 */
class usageModule{
	
	/**
	 * Insert new UsageModule.
	 * @param usageModule UsageModule usage module Object
	 * @return KalturaUsageModule
	 */
	static add(usageModule){
		let kparams = {};
		kparams.usageModule = usageModule;
		return new kaltura.RequestBuilder('usagemodule', 'add', kparams);
	};
	
	/**
	 * Delete UsageModule.
	 * @param id int UsageModule id
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('usagemodule', 'delete', kparams);
	};
	
	/**
	 * Returns the list of available usage module.
	 * @param filter UsageModuleFilter Filter request (optional, default: null)
	 * @return KalturaUsageModuleListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('usagemodule', 'list', kparams);
	};
	
	/**
	 * Update usage module.
	 * @param id int usage module id
	 * @param usageModule UsageModule usage module Object
	 * @return KalturaUsageModule
	 */
	static update(id, usageModule){
		let kparams = {};
		kparams.id = id;
		kparams.usageModule = usageModule;
		return new kaltura.RequestBuilder('usagemodule', 'update', kparams);
	};
}
module.exports.usageModule = usageModule;


/**
 *Class definition for the Kaltura service: userAssetRule.
 * The available service actions:
 * @action list Retrieve all the rules (parental, geo, device or user-type) that applies for this user and asset.
 */
class userAssetRule{
	
	/**
	 * Retrieve all the rules (parental, geo, device or user-type) that applies for this user and asset.
	 * @param filter UserAssetRuleFilter Filter
	 * @return KalturaUserAssetRuleListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('userassetrule', 'list', kparams);
	};
}
module.exports.userAssetRule = userAssetRule;


/**
 *Class definition for the Kaltura service: userAssetsListItem.
 * The available service actions:
 * @action add Adds a new item to user’s private asset list.
 * @action delete Deletes an item from user’s private asset list.
 * @action get Get an item from user’s private asset list.
 */
class userAssetsListItem{
	
	/**
	 * Adds a new item to user’s private asset list.
	 * @param userAssetsListItem UserAssetsListItem A list item to add
	 * @return KalturaUserAssetsListItem
	 */
	static add(userAssetsListItem){
		let kparams = {};
		kparams.userAssetsListItem = userAssetsListItem;
		return new kaltura.RequestBuilder('userassetslistitem', 'add', kparams);
	};
	
	/**
	 * Deletes an item from user’s private asset list.
	 * @param assetId string Asset id to delete
	 * @param listType string Asset list type to delete from (enum: KalturaUserAssetsListType)
	 * @return bool
	 */
	static deleteAction(assetId, listType){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.listType = listType;
		return new kaltura.RequestBuilder('userassetslistitem', 'delete', kparams);
	};
	
	/**
	 * Get an item from user’s private asset list.
	 * @param assetId string Asset id to get
	 * @param listType string Asset list type to get from (enum: KalturaUserAssetsListType)
	 * @param itemType string item type to get (enum: KalturaUserAssetsListItemType)
	 * @return KalturaUserAssetsListItem
	 */
	static get(assetId, listType, itemType){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.listType = listType;
		kparams.itemType = itemType;
		return new kaltura.RequestBuilder('userassetslistitem', 'get', kparams);
	};
}
module.exports.userAssetsListItem = userAssetsListItem;


/**
 *Class definition for the Kaltura service: userInterest.
 * The available service actions:
 * @action add Insert new user interest for partner user.
 * @action delete Delete new user interest for partner user.
 * @action deleteWithToken Delete new user interest for partner user.
 * @action list Returns all Engagement for partner.
 */
class userInterest{
	
	/**
	 * Insert new user interest for partner user.
	 * @param userInterest UserInterest User interest Object
	 * @return KalturaUserInterest
	 */
	static add(userInterest){
		let kparams = {};
		kparams.userInterest = userInterest;
		return new kaltura.RequestBuilder('userinterest', 'add', kparams);
	};
	
	/**
	 * Delete new user interest for partner user.
	 * @param id string User interest identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('userinterest', 'delete', kparams);
	};
	
	/**
	 * Delete new user interest for partner user.
	 * @param id string User interest identifier
	 * @param token string User's token identifier
	 * @param partnerId int Partner identifier
	 */
	static deleteWithToken(id, token, partnerId){
		let kparams = {};
		kparams.id = id;
		kparams.token = token;
		kparams.partnerId = partnerId;
		return new kaltura.RequestBuilder('userinterest', 'deleteWithToken', kparams);
	};
	
	/**
	 * Returns all Engagement for partner.
	 * @return KalturaUserInterestListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('userinterest', 'list', kparams);
	};
}
module.exports.userInterest = userInterest;


/**
 *Class definition for the Kaltura service: userLoginPin.
 * The available service actions:
 * @action add Generate a time and usage expiry login-PIN that can allow a single/multiple login/s per PIN.
 * If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
 * @action delete Immediately deletes a given pre set login pin code for the user.
 * @action deleteAll Immediately expire all active login-PINs for a user.
 * @action update Set a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
 */
class userLoginPin{
	
	/**
	 * Generate a time and usage expiry login-PIN that can allow a single/multiple login/s per PIN.
 * If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
	 * @param secret string Additional security parameter for optional enhanced security (optional, default: null)
	 * @param pinUsages int Optional number of pin usages (optional, default: null)
	 * @param pinDuration int Optional duration in minutes of the pin (optional, default: null)
	 * @return KalturaUserLoginPin
	 */
	static add(secret = null, pinUsages = null, pinDuration = null){
		let kparams = {};
		kparams.secret = secret;
		kparams.pinUsages = pinUsages;
		kparams.pinDuration = pinDuration;
		return new kaltura.RequestBuilder('userloginpin', 'add', kparams);
	};
	
	/**
	 * Immediately deletes a given pre set login pin code for the user.
	 * @param pinCode string Login pin code to expire
	 * @return bool
	 */
	static deleteAction(pinCode){
		let kparams = {};
		kparams.pinCode = pinCode;
		return new kaltura.RequestBuilder('userloginpin', 'delete', kparams);
	};
	
	/**
	 * Immediately expire all active login-PINs for a user.
	 * @return bool
	 */
	static deleteAll(){
		let kparams = {};
		return new kaltura.RequestBuilder('userloginpin', 'deleteAll', kparams);
	};
	
	/**
	 * Set a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
	 * @param pinCode string Device Identifier
	 * @param secret string Additional security parameter to validate the login (optional, default: null)
	 * @param pinUsages int Optional number of pin usages (optional, default: null)
	 * @param pinDuration int Optional duration in seconds of the pin (optional, default: null)
	 * @return KalturaUserLoginPin
	 */
	static update(pinCode, secret = null, pinUsages = null, pinDuration = null){
		let kparams = {};
		kparams.pinCode = pinCode;
		kparams.secret = secret;
		kparams.pinUsages = pinUsages;
		kparams.pinDuration = pinDuration;
		return new kaltura.RequestBuilder('userloginpin', 'update', kparams);
	};
}
module.exports.userLoginPin = userLoginPin;


/**
 *Class definition for the Kaltura service: userRole.
 * The available service actions:
 * @action add Creates a new role.
 * @action delete Delete role.
 * @action list Retrieving user roles by identifiers, if filter is empty, returns all partner roles.
 * @action update Update role.
 */
class userRole{
	
	/**
	 * Creates a new role.
	 * @param role UserRole Role to add
	 * @return KalturaUserRole
	 */
	static add(role){
		let kparams = {};
		kparams.role = role;
		return new kaltura.RequestBuilder('userrole', 'add', kparams);
	};
	
	/**
	 * Delete role.
	 * @param id int Role id to delete
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('userrole', 'delete', kparams);
	};
	
	/**
	 * Retrieving user roles by identifiers, if filter is empty, returns all partner roles.
	 * @param filter UserRoleFilter User roles filter (optional, default: null)
	 * @return KalturaUserRoleListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('userrole', 'list', kparams);
	};
	
	/**
	 * Update role.
	 * @param id int Role Id
	 * @param role UserRole Role to Update
	 * @return KalturaUserRole
	 */
	static update(id, role){
		let kparams = {};
		kparams.id = id;
		kparams.role = role;
		return new kaltura.RequestBuilder('userrole', 'update', kparams);
	};
}
module.exports.userRole = userRole;


/**
 *Class definition for the Kaltura service: userSegment.
 * The available service actions:
 * @action add Adds a segment to a user.
 * @action delete Deletes a segment from a user.
 * @action list Retrieve all the segments that apply for given user.
 */
class userSegment{
	
	/**
	 * Adds a segment to a user.
	 * @param userSegment UserSegment User segment
	 * @return KalturaUserSegment
	 */
	static add(userSegment){
		let kparams = {};
		kparams.userSegment = userSegment;
		return new kaltura.RequestBuilder('usersegment', 'add', kparams);
	};
	
	/**
	 * Deletes a segment from a user.
	 * @param userId string User id
	 * @param segmentId int Segment id
	 * @return bool
	 */
	static deleteAction(userId, segmentId){
		let kparams = {};
		kparams.userId = userId;
		kparams.segmentId = segmentId;
		return new kaltura.RequestBuilder('usersegment', 'delete', kparams);
	};
	
	/**
	 * Retrieve all the segments that apply for given user.
	 * @param filter UserSegmentFilter Filter
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaUserSegmentListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('usersegment', 'list', kparams);
	};
}
module.exports.userSegment = userSegment;


/**
 *Class definition for the Kaltura service: userSessionProfile.
 * The available service actions:
 * @action add Add new UserSessionProfile.
 * @action delete Delete existing UserSessionProfile.
 * @action list Returns the list of available UserSessionProfiles.
 * @action update Update existing UserSessionProfile.
 */
class userSessionProfile{
	
	/**
	 * Add new UserSessionProfile.
	 * @param userSessionProfile UserSessionProfile userSessionProfile Object to add
	 * @return KalturaUserSessionProfile
	 */
	static add(userSessionProfile){
		let kparams = {};
		kparams.userSessionProfile = userSessionProfile;
		return new kaltura.RequestBuilder('usersessionprofile', 'add', kparams);
	};
	
	/**
	 * Delete existing UserSessionProfile.
	 * @param id int UserSessionProfile identifier
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('usersessionprofile', 'delete', kparams);
	};
	
	/**
	 * Returns the list of available UserSessionProfiles.
	 * @param filter UserSessionProfileFilter Filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaUserSessionProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('usersessionprofile', 'list', kparams);
	};
	
	/**
	 * Update existing UserSessionProfile.
	 * @param id int id of userSessionProfile to update
	 * @param userSessionProfile UserSessionProfile userSessionProfile Object to update
	 * @return KalturaUserSessionProfile
	 */
	static update(id, userSessionProfile){
		let kparams = {};
		kparams.id = id;
		kparams.userSessionProfile = userSessionProfile;
		return new kaltura.RequestBuilder('usersessionprofile', 'update', kparams);
	};
}
module.exports.userSessionProfile = userSessionProfile;


/**
 *Class definition for the Kaltura service: watchBasedRecommendationsAdminConfiguration.
 * The available service actions:
 * @action get Get partner&#39;s watch based recommendations admin configuration.
 * @action update Updates partner&#39;s watch based recommendations admin configuration.
 */
class watchBasedRecommendationsAdminConfiguration{
	
	/**
	 * Get partner&#39;s watch based recommendations admin configuration.
	 * @return KalturaWatchBasedRecommendationsAdminConfiguration
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('watchbasedrecommendationsadminconfiguration', 'get', kparams);
	};
	
	/**
	 * Updates partner&#39;s watch based recommendations admin configuration.
	 * @param configuration WatchBasedRecommendationsAdminConfiguration watch based recommendations admin configuration
	 * @return KalturaWatchBasedRecommendationsAdminConfiguration
	 */
	static update(configuration){
		let kparams = {};
		kparams.configuration = configuration;
		return new kaltura.RequestBuilder('watchbasedrecommendationsadminconfiguration', 'update', kparams);
	};
}
module.exports.watchBasedRecommendationsAdminConfiguration = watchBasedRecommendationsAdminConfiguration;


/**
 *Class definition for the Kaltura service: watchBasedRecommendationsProfile.
 * The available service actions:
 * @action add Add partner&#39;s watch based recommendations profile.
 * @action delete Delete partner&#39;s watch based recommendations profile.
 * @action list Get partner&#39;s watch based recommendations profiles.
 * @action update Update partner&#39;s watch based recommendations profile.
 */
class watchBasedRecommendationsProfile{
	
	/**
	 * Add partner&#39;s watch based recommendations profile.
	 * @param profile WatchBasedRecommendationsProfile watch based recommendations profile to add
	 * @return KalturaWatchBasedRecommendationsProfile
	 */
	static add(profile){
		let kparams = {};
		kparams.profile = profile;
		return new kaltura.RequestBuilder('watchbasedrecommendationsprofile', 'add', kparams);
	};
	
	/**
	 * Delete partner&#39;s watch based recommendations profile.
	 * @param id int profile id to update
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('watchbasedrecommendationsprofile', 'delete', kparams);
	};
	
	/**
	 * Get partner&#39;s watch based recommendations profiles.
	 * @param filter WatchBasedRecommendationsProfileFilter Filtering parameters for watch based recommendations profiles (optional, default: null)
	 * @return KalturaWatchBasedRecommendationsProfileListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('watchbasedrecommendationsprofile', 'list', kparams);
	};
	
	/**
	 * Update partner&#39;s watch based recommendations profile.
	 * @param id int profile id to update
	 * @param profile WatchBasedRecommendationsProfile watch based recommendations profile to add
	 * @return KalturaWatchBasedRecommendationsProfile
	 */
	static update(id, profile){
		let kparams = {};
		kparams.id = id;
		kparams.profile = profile;
		return new kaltura.RequestBuilder('watchbasedrecommendationsprofile', 'update', kparams);
	};
}
module.exports.watchBasedRecommendationsProfile = watchBasedRecommendationsProfile;

