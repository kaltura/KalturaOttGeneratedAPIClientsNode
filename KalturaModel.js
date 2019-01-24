// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2019  Kaltura Inc.
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
 *
 */
class ListResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaListResponse';
	}
	
	/**
	 * Total items
	 * @return int
	 */
	 getTotalCount() {
	 	return this.totalCount;
	 }
	
	/**
	 * @param totalCount int Total items
	 */
	 setTotalCount(totalCount) {
	 	this.totalCount = totalCount;
	 }
}
module.exports.ListResponse = ListResponse;

/**
 *
 */
class ApiExceptionArg extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaApiExceptionArg';
	}
	
	/**
	 * Argument name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Argument name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Argument value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Argument value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.ApiExceptionArg = ApiExceptionArg;

/**
 *
 */
class SocialComment extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialComment';
	}
	
	/**
	 * Comment header
	 * @return string
	 */
	 getHeader() {
	 	return this.header;
	 }
	
	/**
	 * @param header string Comment header
	 */
	 setHeader(header) {
	 	this.header = header;
	 }
	
	/**
	 * Comment body
	 * @return string
	 */
	 getText() {
	 	return this.text;
	 }
	
	/**
	 * @param text string Comment body
	 */
	 setText(text) {
	 	this.text = text;
	 }
	
	/**
	 * Comment creation date
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * @param createDate int Comment creation date
	 */
	 setCreateDate(createDate) {
	 	this.createDate = createDate;
	 }
	
	/**
	 * The writer of the comment
	 * @return string
	 */
	 getWriter() {
	 	return this.writer;
	 }
	
	/**
	 * @param writer string The writer of the comment
	 */
	 setWriter(writer) {
	 	this.writer = writer;
	 }
}
module.exports.SocialComment = SocialComment;

/**
 *
 */
class SocialCommentListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialCommentListResponse';
	}
	
	/**
	 * Social comments list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Social comments list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SocialCommentListResponse = SocialCommentListResponse;

/**
 *
 */
class SocialNetworkComment extends SocialComment{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialNetworkComment';
	}
	
	/**
	 * Number of likes
	 * @return string
	 */
	 getLikeCounter() {
	 	return this.likeCounter;
	 }
	
	/**
	 * @param likeCounter string Number of likes
	 */
	 setLikeCounter(likeCounter) {
	 	this.likeCounter = likeCounter;
	 }
	
	/**
	 * The URL of the profile picture of the author of the comment
	 * @return string
	 */
	 getAuthorImageUrl() {
	 	return this.authorImageUrl;
	 }
	
	/**
	 * @param authorImageUrl string The URL of the profile picture of the author of the comment
	 */
	 setAuthorImageUrl(authorImageUrl) {
	 	this.authorImageUrl = authorImageUrl;
	 }
}
module.exports.SocialNetworkComment = SocialNetworkComment;

/**
 *
 */
class TwitterTwit extends SocialNetworkComment{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTwitterTwit';
	}
}
module.exports.TwitterTwit = TwitterTwit;

/**
 *
 */
class FacebookPost extends SocialNetworkComment{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFacebookPost';
	}
	
	/**
	 * List of comments on the post
	 * @return array
	 */
	 getComments() {
	 	return this.comments;
	 }
	
	/**
	 * @param comments array List of comments on the post
	 */
	 setComments(comments) {
	 	this.comments = comments;
	 }
	
	/**
	 * A link associated to the post
	 * @return string
	 */
	 getLink() {
	 	return this.link;
	 }
	
	/**
	 * @param link string A link associated to the post
	 */
	 setLink(link) {
	 	this.link = link;
	 }
}
module.exports.FacebookPost = FacebookPost;

/**
 *
 */
class AssetComment extends SocialComment{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetComment';
	}
	
	/**
	 * Comment ID
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id int Comment ID
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * Asset identifier
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int Asset identifier
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * Asset Type
	 * @return string
	 */
	 getAssetType() {
	 	return this.assetType;
	 }
	
	/**
	 * @param assetType string Asset Type
	 */
	 setAssetType(assetType) {
	 	this.assetType = assetType;
	 }
	
	/**
	 * Sub Header
	 * @return string
	 */
	 getSubHeader() {
	 	return this.subHeader;
	 }
	
	/**
	 * @param subHeader string Sub Header
	 */
	 setSubHeader(subHeader) {
	 	this.subHeader = subHeader;
	 }
}
module.exports.AssetComment = AssetComment;

/**
 *
 */
class SocialAction extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialAction';
	}
	
	/**
	 * social action document id
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Action type
	 * @return string
	 */
	 getActionType() {
	 	return this.actionType;
	 }
	
	/**
	 * @param actionType string Action type
	 */
	 setActionType(actionType) {
	 	this.actionType = actionType;
	 }
	
	/**
	 * EPOC based timestamp for when the action occurred
	 * @return int
	 */
	 getTime() {
	 	return this.time;
	 }
	
	/**
	 * @param time int EPOC based timestamp for when the action occurred
	 */
	 setTime(time) {
	 	this.time = time;
	 }
	
	/**
	 * ID of the asset that was acted upon
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int ID of the asset that was acted upon
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * Type of the asset that was acted upon, currently only VOD (media)
	 * @return string
	 */
	 getAssetType() {
	 	return this.assetType;
	 }
	
	/**
	 * @param assetType string Type of the asset that was acted upon, currently only VOD (media)
	 */
	 setAssetType(assetType) {
	 	this.assetType = assetType;
	 }
	
	/**
	 * The value of the url
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string The value of the url
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
}
module.exports.SocialAction = SocialAction;

/**
 *
 */
class SocialFriendActivity extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialFriendActivity';
	}
	
	/**
	 * The full name of the user who did the social action
	 * @return string
	 */
	 getUserFullName() {
	 	return this.userFullName;
	 }
	
	/**
	 * @param userFullName string The full name of the user who did the social action
	 */
	 setUserFullName(userFullName) {
	 	this.userFullName = userFullName;
	 }
	
	/**
	 * The URL of the profile picture of the user who did the social action
	 * @return string
	 */
	 getUserPictureUrl() {
	 	return this.userPictureUrl;
	 }
	
	/**
	 * @param userPictureUrl string The URL of the profile picture of the user who did the social action
	 */
	 setUserPictureUrl(userPictureUrl) {
	 	this.userPictureUrl = userPictureUrl;
	 }
	
	/**
	 * The social action
	 * @return SocialAction
	 */
	 getSocialAction() {
	 	return this.socialAction;
	 }
	
	/**
	 * @param socialAction SocialAction The social action
	 */
	 setSocialAction(socialAction) {
	 	this.socialAction = socialAction;
	 }
}
module.exports.SocialFriendActivity = SocialFriendActivity;

/**
 *
 */
class SocialFriendActivityListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialFriendActivityListResponse';
	}
	
	/**
	 * Social friends activity
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Social friends activity
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SocialFriendActivityListResponse = SocialFriendActivityListResponse;

/**
 *
 */
class SocialActionRate extends SocialAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialActionRate';
	}
	
	/**
	 * The value of the rating
	 * @return int
	 */
	 getRate() {
	 	return this.rate;
	 }
	
	/**
	 * @param rate int The value of the rating
	 */
	 setRate(rate) {
	 	this.rate = rate;
	 }
}
module.exports.SocialActionRate = SocialActionRate;

/**
 *
 */
class SocialActionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialActionListResponse';
	}
	
	/**
	 * The social actions
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array The social actions
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SocialActionListResponse = SocialActionListResponse;

/**
 *
 */
class HouseholdPaymentMethod extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPaymentMethod';
	}
	
	/**
	 * Household payment method identifier (internal)
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * External identifier for the household payment method
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External identifier for the household payment method
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Payment-gateway identifier
	 * @return int
	 */
	 getPaymentGatewayId() {
	 	return this.paymentGatewayId;
	 }
	
	/**
	 * @param paymentGatewayId int Payment-gateway identifier
	 */
	 setPaymentGatewayId(paymentGatewayId) {
	 	this.paymentGatewayId = paymentGatewayId;
	 }
	
	/**
	 * Description of the payment method details
	 * @return string
	 */
	 getDetails() {
	 	return this.details;
	 }
	
	/**
	 * @param details string Description of the payment method details
	 */
	 setDetails(details) {
	 	this.details = details;
	 }
	
	/**
	 * indicates whether the payment method is set as default for the household
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * Payment method profile identifier
	 * @return int
	 */
	 getPaymentMethodProfileId() {
	 	return this.paymentMethodProfileId;
	 }
	
	/**
	 * @param paymentMethodProfileId int Payment method profile identifier
	 */
	 setPaymentMethodProfileId(paymentMethodProfileId) {
	 	this.paymentMethodProfileId = paymentMethodProfileId;
	 }
}
module.exports.HouseholdPaymentMethod = HouseholdPaymentMethod;

/**
 *
 */
class HouseholdPaymentMethodListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPaymentMethodListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.HouseholdPaymentMethodListResponse = HouseholdPaymentMethodListResponse;

/**
 *
 */
class PaymentMethodProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentMethodProfile';
	}
	
	/**
	 * Payment method identifier (internal)
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Payment gateway identifier (internal)
	 * @return int
	 */
	 getPaymentGatewayId() {
	 	return this.paymentGatewayId;
	 }
	
	/**
	 * @param paymentGatewayId int Payment gateway identifier (internal)
	 */
	 setPaymentGatewayId(paymentGatewayId) {
	 	this.paymentGatewayId = paymentGatewayId;
	 }
	
	/**
	 * Payment method name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Payment method name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Indicates whether the payment method allow multiple instances
	 * @return bool
	 */
	 getAllowMultiInstance() {
	 	return this.allowMultiInstance;
	 }
	
	/**
	 * @param allowMultiInstance bool Indicates whether the payment method allow multiple instances
	 */
	 setAllowMultiInstance(allowMultiInstance) {
	 	this.allowMultiInstance = allowMultiInstance;
	 }
}
module.exports.PaymentMethodProfile = PaymentMethodProfile;

/**
 *
 */
class PaymentMethodProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentMethodProfileListResponse';
	}
	
	/**
	 * Payment method profiles list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Payment method profiles list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PaymentMethodProfileListResponse = PaymentMethodProfileListResponse;

/**
 *
 */
class HouseholdPaymentGateway extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPaymentGateway';
	}
	
	/**
	 * payment gateway id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * payment gateway name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string payment gateway name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Payment gateway default (true/false)
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Payment gateway default (true/false)
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * distinction payment gateway selected by account or household
	 * @return string
	 */
	 getSelectedBy() {
	 	return this.selectedBy;
	 }
	
	/**
	 * @param selectedBy string distinction payment gateway selected by account or household
	 */
	 setSelectedBy(selectedBy) {
	 	this.selectedBy = selectedBy;
	 }
}
module.exports.HouseholdPaymentGateway = HouseholdPaymentGateway;

/**
 *
 */
class HouseholdPaymentGatewayListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPaymentGatewayListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.HouseholdPaymentGatewayListResponse = HouseholdPaymentGatewayListResponse;

/**
 *
 */
class PaymentGatewayBaseProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentGatewayBaseProfile';
	}
	
	/**
	 * payment gateway id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * payment gateway name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string payment gateway name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Payment gateway default (true/false)
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Payment gateway default (true/false)
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * distinction payment gateway selected by account or household
	 * @return string
	 */
	 getSelectedBy() {
	 	return this.selectedBy;
	 }
	
	/**
	 * @param selectedBy string distinction payment gateway selected by account or household
	 */
	 setSelectedBy(selectedBy) {
	 	this.selectedBy = selectedBy;
	 }
}
module.exports.PaymentGatewayBaseProfile = PaymentGatewayBaseProfile;

/**
 *
 */
class Value extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaValue';
	}
	
	/**
	 * Description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.Value = Value;

/**
 *
 */
class StringValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStringValue';
	}
	
	/**
	 * Value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.StringValue = StringValue;

/**
 *
 */
class PaymentGatewayProfile extends PaymentGatewayBaseProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentGatewayProfile';
	}
	
	/**
	 * Payment gateway is active status
	 * @return int
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive int Payment gateway is active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * Payment gateway adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string Payment gateway adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * Payment gateway transact URL
	 * @return string
	 */
	 getTransactUrl() {
	 	return this.transactUrl;
	 }
	
	/**
	 * @param transactUrl string Payment gateway transact URL
	 */
	 setTransactUrl(transactUrl) {
	 	this.transactUrl = transactUrl;
	 }
	
	/**
	 * Payment gateway status URL
	 * @return string
	 */
	 getStatusUrl() {
	 	return this.statusUrl;
	 }
	
	/**
	 * @param statusUrl string Payment gateway status URL
	 */
	 setStatusUrl(statusUrl) {
	 	this.statusUrl = statusUrl;
	 }
	
	/**
	 * Payment gateway renew URL
	 * @return string
	 */
	 getRenewUrl() {
	 	return this.renewUrl;
	 }
	
	/**
	 * @param renewUrl string Payment gateway renew URL
	 */
	 setRenewUrl(renewUrl) {
	 	this.renewUrl = renewUrl;
	 }
	
	/**
	 * Payment gateway extra parameters
	 * @return map
	 */
	 getPaymentGatewaySettings() {
	 	return this.paymentGatewaySettings;
	 }
	
	/**
	 * @param paymentGatewaySettings map Payment gateway extra parameters
	 */
	 setPaymentGatewaySettings(paymentGatewaySettings) {
	 	this.paymentGatewaySettings = paymentGatewaySettings;
	 }
	
	/**
	 * Payment gateway external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string Payment gateway external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * Pending Interval in minutes
	 * @return int
	 */
	 getPendingInterval() {
	 	return this.pendingInterval;
	 }
	
	/**
	 * @param pendingInterval int Pending Interval in minutes
	 */
	 setPendingInterval(pendingInterval) {
	 	this.pendingInterval = pendingInterval;
	 }
	
	/**
	 * Pending Retries
	 * @return int
	 */
	 getPendingRetries() {
	 	return this.pendingRetries;
	 }
	
	/**
	 * @param pendingRetries int Pending Retries
	 */
	 setPendingRetries(pendingRetries) {
	 	this.pendingRetries = pendingRetries;
	 }
	
	/**
	 * Shared Secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
	
	/**
	 * @param sharedSecret string Shared Secret
	 */
	 setSharedSecret(sharedSecret) {
	 	this.sharedSecret = sharedSecret;
	 }
	
	/**
	 * Renew Interval Minutes
	 * @return int
	 */
	 getRenewIntervalMinutes() {
	 	return this.renewIntervalMinutes;
	 }
	
	/**
	 * @param renewIntervalMinutes int Renew Interval Minutes
	 */
	 setRenewIntervalMinutes(renewIntervalMinutes) {
	 	this.renewIntervalMinutes = renewIntervalMinutes;
	 }
	
	/**
	 * Renew Start Minutes
	 * @return int
	 */
	 getRenewStartMinutes() {
	 	return this.renewStartMinutes;
	 }
	
	/**
	 * @param renewStartMinutes int Renew Start Minutes
	 */
	 setRenewStartMinutes(renewStartMinutes) {
	 	this.renewStartMinutes = renewStartMinutes;
	 }
	
	/**
	 * Payment gateway external verification
	 * @return bool
	 */
	 getExternalVerification() {
	 	return this.externalVerification;
	 }
	
	/**
	 * @param externalVerification bool Payment gateway external verification
	 */
	 setExternalVerification(externalVerification) {
	 	this.externalVerification = externalVerification;
	 }
}
module.exports.PaymentGatewayProfile = PaymentGatewayProfile;

/**
 *
 */
class PaymentGatewayProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentGatewayProfileListResponse';
	}
	
	/**
	 * A list of payment-gateway profiles
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of payment-gateway profiles
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PaymentGatewayProfileListResponse = PaymentGatewayProfileListResponse;

/**
 *
 */
class TranslationToken extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTranslationToken';
	}
	
	/**
	 * Language code
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string Language code
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * Translated value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Translated value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.TranslationToken = TranslationToken;

/**
 *
 */
class MultilingualStringValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMultilingualStringValue';
	}
	
	/**
	 * Value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * Value
	 * @return array
	 */
	 getMultilingualValue() {
	 	return this.multilingualValue;
	 }
	
	/**
	 * @param multilingualValue array Value
	 */
	 setMultilingualValue(multilingualValue) {
	 	this.multilingualValue = multilingualValue;
	 }
}
module.exports.MultilingualStringValue = MultilingualStringValue;

/**
 *
 */
class LongValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLongValue';
	}
	
	/**
	 * Value
	 * @return int
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value int Value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.LongValue = LongValue;

/**
 *
 */
class DoubleValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDoubleValue';
	}
	
	/**
	 * Value
	 * @return float
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value float Value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.DoubleValue = DoubleValue;

/**
 *
 */
class BooleanValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBooleanValue';
	}
	
	/**
	 * Value
	 * @return bool
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value bool Value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.BooleanValue = BooleanValue;

/**
 *
 */
class IntegerValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIntegerValue';
	}
	
	/**
	 * Value
	 * @return int
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value int Value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.IntegerValue = IntegerValue;

/**
 *
 */
class PluginData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPluginData';
	}
}
module.exports.PluginData = PluginData;

/**
 *
 */
class DrmPlaybackPluginData extends PluginData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDrmPlaybackPluginData';
	}
	
	/**
	 * Scheme
	 * @return string
	 */
	 getScheme() {
	 	return this.scheme;
	 }
	
	/**
	 * @param scheme string Scheme
	 */
	 setScheme(scheme) {
	 	this.scheme = scheme;
	 }
	
	/**
	 * License URL
	 * @return string
	 */
	 getLicenseURL() {
	 	return this.licenseURL;
	 }
	
	/**
	 * @param licenseURL string License URL
	 */
	 setLicenseURL(licenseURL) {
	 	this.licenseURL = licenseURL;
	 }
}
module.exports.DrmPlaybackPluginData = DrmPlaybackPluginData;

/**
 *
 */
class CustomDrmPlaybackPluginData extends DrmPlaybackPluginData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCustomDrmPlaybackPluginData';
	}
	
	/**
	 * Custom DRM license data
	 * @return string
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data string Custom DRM license data
	 */
	 setData(data) {
	 	this.data = data;
	 }
}
module.exports.CustomDrmPlaybackPluginData = CustomDrmPlaybackPluginData;

/**
 *
 */
class HouseholdDevice extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdDevice';
	}
	
	/**
	 * Household identifier
	 * @return int
	 */
	 getHouseholdId() {
	 	return this.householdId;
	 }
	
	/**
	 * @param householdId int Household identifier
	 */
	 setHouseholdId(householdId) {
	 	this.householdId = householdId;
	 }
	
	/**
	 * Device UDID
	 * @return string
	 */
	 getUdid() {
	 	return this.udid;
	 }
	
	/**
	 * @param udid string Device UDID
	 */
	 setUdid(udid) {
	 	this.udid = udid;
	 }
	
	/**
	 * Device name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Device name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Device brand identifier
	 * @return int
	 */
	 getBrandId() {
	 	return this.brandId;
	 }
	
	/**
	 * @param brandId int Device brand identifier
	 */
	 setBrandId(brandId) {
	 	this.brandId = brandId;
	 }
	
	/**
	 * Device activation date (epoch)
	 * @return int
	 */
	 getActivatedOn() {
	 	return this.activatedOn;
	 }
	
	/**
	 * @param activatedOn int Device activation date (epoch)
	 */
	 setActivatedOn(activatedOn) {
	 	this.activatedOn = activatedOn;
	 }
	
	/**
	 * Device state
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Device family id
	 * @return int
	 */
	 getDeviceFamilyId() {
	 	return this.deviceFamilyId;
	 }
	
	/**
	 * Device DRM data
	 * @return CustomDrmPlaybackPluginData
	 */
	 getDrm() {
	 	return this.drm;
	 }
}
module.exports.HouseholdDevice = HouseholdDevice;

/**
 *
 */
class HouseholdDeviceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdDeviceListResponse';
	}
	
	/**
	 * Household devices
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Household devices
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.HouseholdDeviceListResponse = HouseholdDeviceListResponse;

/**
 *
 */
class FairPlayPlaybackPluginData extends DrmPlaybackPluginData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFairPlayPlaybackPluginData';
	}
	
	/**
	 * Custom data string
	 * @return string
	 */
	 getCertificate() {
	 	return this.certificate;
	 }
	
	/**
	 * @param certificate string Custom data string
	 */
	 setCertificate(certificate) {
	 	this.certificate = certificate;
	 }
}
module.exports.FairPlayPlaybackPluginData = FairPlayPlaybackPluginData;

/**
 *
 */
class HouseholdUser extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdUser';
	}
	
	/**
	 * The identifier of the household
	 * @return int
	 */
	 getHouseholdId() {
	 	return this.householdId;
	 }
	
	/**
	 * @param householdId int The identifier of the household
	 */
	 setHouseholdId(householdId) {
	 	this.householdId = householdId;
	 }
	
	/**
	 * The identifier of the user
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string The identifier of the user
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * True if the user added as master use
	 * @return bool
	 */
	 getIsMaster() {
	 	return this.isMaster;
	 }
	
	/**
	 * @param isMaster bool True if the user added as master use
	 */
	 setIsMaster(isMaster) {
	 	this.isMaster = isMaster;
	 }
	
	/**
	 * The username of the household master for adding a user in status pending for the household master to approve
	 * @return string
	 */
	 getHouseholdMasterUsername() {
	 	return this.householdMasterUsername;
	 }
	
	/**
	 * @param householdMasterUsername string The username of the household master for adding a user in status pending for the household master to approve
	 */
	 setHouseholdMasterUsername(householdMasterUsername) {
	 	this.householdMasterUsername = householdMasterUsername;
	 }
	
	/**
	 * The status of the user in the household
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * True if the user is a default user
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
}
module.exports.HouseholdUser = HouseholdUser;

/**
 *
 */
class HouseholdUserListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdUserListResponse';
	}
	
	/**
	 * Household users
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Household users
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.HouseholdUserListResponse = HouseholdUserListResponse;

/**
 *
 */
class HomeNetwork extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHomeNetwork';
	}
	
	/**
	 * Home network identifier
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string Home network identifier
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Home network name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Home network name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Home network description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Home network description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Is home network is active
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool Is home network is active
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
}
module.exports.HomeNetwork = HomeNetwork;

/**
 *
 */
class HomeNetworkListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHomeNetworkListResponse';
	}
	
	/**
	 * Home networks
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Home networks
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.HomeNetworkListResponse = HomeNetworkListResponse;

/**
 *
 */
class Configurations extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurations';
	}
	
	/**
	 * Configuration id
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Partner id
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Configuration group id
	 * @return string
	 */
	 getConfigurationGroupId() {
	 	return this.configurationGroupId;
	 }
	
	/**
	 * @param configurationGroupId string Configuration group id
	 */
	 setConfigurationGroupId(configurationGroupId) {
	 	this.configurationGroupId = configurationGroupId;
	 }
	
	/**
	 * Application name
	 * @return string
	 */
	 getAppName() {
	 	return this.appName;
	 }
	
	/**
	 * @param appName string Application name
	 */
	 setAppName(appName) {
	 	this.appName = appName;
	 }
	
	/**
	 * Client version
	 * @return string
	 */
	 getClientVersion() {
	 	return this.clientVersion;
	 }
	
	/**
	 * @param clientVersion string Client version
	 */
	 setClientVersion(clientVersion) {
	 	this.clientVersion = clientVersion;
	 }
	
	/**
	 * Platform: Android/iOS/WindowsPhone/Blackberry/STB/CTV/Other
	 * @return string
	 */
	 getPlatform() {
	 	return this.platform;
	 }
	
	/**
	 * @param platform string Platform: Android/iOS/WindowsPhone/Blackberry/STB/CTV/Other
	 */
	 setPlatform(platform) {
	 	this.platform = platform;
	 }
	
	/**
	 * External push id
	 * @return string
	 */
	 getExternalPushId() {
	 	return this.externalPushId;
	 }
	
	/**
	 * @param externalPushId string External push id
	 */
	 setExternalPushId(externalPushId) {
	 	this.externalPushId = externalPushId;
	 }
	
	/**
	 * Is force update
	 * @return bool
	 */
	 getIsForceUpdate() {
	 	return this.isForceUpdate;
	 }
	
	/**
	 * @param isForceUpdate bool Is force update
	 */
	 setIsForceUpdate(isForceUpdate) {
	 	this.isForceUpdate = isForceUpdate;
	 }
	
	/**
	 * Content
	 * @return string
	 */
	 getContent() {
	 	return this.content;
	 }
	
	/**
	 * @param content string Content
	 */
	 setContent(content) {
	 	this.content = content;
	 }
}
module.exports.Configurations = Configurations;

/**
 *
 */
class ConfigurationsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationsListResponse';
	}
	
	/**
	 * Configurations
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Configurations
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ConfigurationsListResponse = ConfigurationsListResponse;

/**
 *
 */
class ConfigurationGroupDevice extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationGroupDevice';
	}
	
	/**
	 * Configuration group id
	 * @return string
	 */
	 getConfigurationGroupId() {
	 	return this.configurationGroupId;
	 }
	
	/**
	 * @param configurationGroupId string Configuration group id
	 */
	 setConfigurationGroupId(configurationGroupId) {
	 	this.configurationGroupId = configurationGroupId;
	 }
	
	/**
	 * Partner id
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Device UDID
	 * @return string
	 */
	 getUdid() {
	 	return this.udid;
	 }
	
	/**
	 * @param udid string Device UDID
	 */
	 setUdid(udid) {
	 	this.udid = udid;
	 }
}
module.exports.ConfigurationGroupDevice = ConfigurationGroupDevice;

/**
 *
 */
class ConfigurationGroupDeviceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationGroupDeviceListResponse';
	}
	
	/**
	 * Configuration group devices
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Configuration group devices
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ConfigurationGroupDeviceListResponse = ConfigurationGroupDeviceListResponse;

/**
 *
 */
class ConfigurationGroupTag extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationGroupTag';
	}
	
	/**
	 * Configuration group identifier
	 * @return string
	 */
	 getConfigurationGroupId() {
	 	return this.configurationGroupId;
	 }
	
	/**
	 * @param configurationGroupId string Configuration group identifier
	 */
	 setConfigurationGroupId(configurationGroupId) {
	 	this.configurationGroupId = configurationGroupId;
	 }
	
	/**
	 * Partner identifier
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Tag
	 * @return string
	 */
	 getTag() {
	 	return this.tag;
	 }
	
	/**
	 * @param tag string Tag
	 */
	 setTag(tag) {
	 	this.tag = tag;
	 }
}
module.exports.ConfigurationGroupTag = ConfigurationGroupTag;

/**
 *
 */
class ConfigurationGroupTagListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationGroupTagListResponse';
	}
	
	/**
	 * Configuration group tags
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Configuration group tags
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ConfigurationGroupTagListResponse = ConfigurationGroupTagListResponse;

/**
 *
 */
class ConfigurationIdentifier extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationIdentifier';
	}
	
	/**
	 * Identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * Name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Name
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.ConfigurationIdentifier = ConfigurationIdentifier;

/**
 *
 */
class ConfigurationGroup extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationGroup';
	}
	
	/**
	 * Configuration group identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Configuration group name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Configuration group name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Partner id
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Is default
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Is default
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * tags
	 * @return array
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * Number of devices
	 * @return int
	 */
	 getNumberOfDevices() {
	 	return this.numberOfDevices;
	 }
	
	/**
	 * Configuration identifiers
	 * @return array
	 */
	 getConfigurationIdentifiers() {
	 	return this.configurationIdentifiers;
	 }
}
module.exports.ConfigurationGroup = ConfigurationGroup;

/**
 *
 */
class ConfigurationGroupListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationGroupListResponse';
	}
	
	/**
	 * Configuration groups
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Configuration groups
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ConfigurationGroupListResponse = ConfigurationGroupListResponse;

/**
 *
 */
class SSOAdapterProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSSOAdapterProfile';
	}
	
	/**
	 * SSO Adapter id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * SSO Adapter name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string SSO Adapter name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * SSO Adapter is active status
	 * @return int
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive int SSO Adapter is active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * SSO Adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string SSO Adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * SSO Adapter extra parameters
	 * @return map
	 */
	 getSettings() {
	 	return this.settings;
	 }
	
	/**
	 * @param settings map SSO Adapter extra parameters
	 */
	 setSettings(settings) {
	 	this.settings = settings;
	 }
	
	/**
	 * SSO Adapter external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string SSO Adapter external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * Shared Secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
	
	/**
	 * @param sharedSecret string Shared Secret
	 */
	 setSharedSecret(sharedSecret) {
	 	this.sharedSecret = sharedSecret;
	 }
}
module.exports.SSOAdapterProfile = SSOAdapterProfile;

/**
 *
 */
class SSOAdapterProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSSOAdapterProfileListResponse';
	}
	
	/**
	 * A list of payment-gateway profiles
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of payment-gateway profiles
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SSOAdapterProfileListResponse = SSOAdapterProfileListResponse;

/**
 *
 */
class UserInterestTopic extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserInterestTopic';
	}
	
	/**
	 * Meta identifier
	 * @return string
	 */
	 getMetaId() {
	 	return this.metaId;
	 }
	
	/**
	 * @param metaId string Meta identifier
	 */
	 setMetaId(metaId) {
	 	this.metaId = metaId;
	 }
	
	/**
	 * Meta Value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Meta Value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
	
	/**
	 * Parent topic
	 * @return UserInterestTopic
	 */
	 getParentTopic() {
	 	return this.parentTopic;
	 }
	
	/**
	 * @param parentTopic UserInterestTopic Parent topic
	 */
	 setParentTopic(parentTopic) {
	 	this.parentTopic = parentTopic;
	 }
}
module.exports.UserInterestTopic = UserInterestTopic;

/**
 *
 */
class UserInterest extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserInterest';
	}
	
	/**
	 * Identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Topic
	 * @return UserInterestTopic
	 */
	 getTopic() {
	 	return this.topic;
	 }
	
	/**
	 * @param topic UserInterestTopic Topic
	 */
	 setTopic(topic) {
	 	this.topic = topic;
	 }
}
module.exports.UserInterest = UserInterest;

/**
 *
 */
class UserInterestListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserInterestListResponse';
	}
	
	/**
	 * A list of UserInterests
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of UserInterests
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.UserInterestListResponse = UserInterestListResponse;

/**
 *
 */
class MediaImage extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaImage';
	}
	
	/**
	 * Image aspect ratio
	 * @return string
	 */
	 getRatio() {
	 	return this.ratio;
	 }
	
	/**
	 * @param ratio string Image aspect ratio
	 */
	 setRatio(ratio) {
	 	this.ratio = ratio;
	 }
	
	/**
	 * Image width
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * @param width int Image width
	 */
	 setWidth(width) {
	 	this.width = width;
	 }
	
	/**
	 * Image height
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * @param height int Image height
	 */
	 setHeight(height) {
	 	this.height = height;
	 }
	
	/**
	 * Image URL
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string Image URL
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * Image Version
	 * @return int
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * @param version int Image Version
	 */
	 setVersion(version) {
	 	this.version = version;
	 }
	
	/**
	 * Image ID
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Determined whether image was taken from default configuration or not
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Determined whether image was taken from default configuration or not
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
}
module.exports.MediaImage = MediaImage;

/**
 *
 */
class AssetFile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetFile';
	}
	
	/**
	 * URL of the media file to be played
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string URL of the media file to be played
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
}
module.exports.AssetFile = AssetFile;

/**
 *
 */
class StringValueArray extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStringValueArray';
	}
	
	/**
	 * List of string values
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array List of string values
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.StringValueArray = StringValueArray;

/**
 *
 */
class MediaFile extends AssetFile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaFile';
	}
	
	/**
	 * Unique identifier for the asset
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int Unique identifier for the asset
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * File unique identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Deprecated - Device types as defined in the system
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * Device types identifier as defined in the system
	 * @return int
	 */
	 getTypeId() {
	 	return this.typeId;
	 }
	
	/**
	 * @param typeId int Device types identifier as defined in the system
	 */
	 setTypeId(typeId) {
	 	this.typeId = typeId;
	 }
	
	/**
	 * Duration of the media file
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * @param duration int Duration of the media file
	 */
	 setDuration(duration) {
	 	this.duration = duration;
	 }
	
	/**
	 * External identifier for the media file
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External identifier for the media file
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Alternative external identifier for the media file
	 * @return string
	 */
	 getAltExternalId() {
	 	return this.altExternalId;
	 }
	
	/**
	 * @param altExternalId string Alternative external identifier for the media file
	 */
	 setAltExternalId(altExternalId) {
	 	this.altExternalId = altExternalId;
	 }
	
	/**
	 * File size
	 * @return int
	 */
	 getFileSize() {
	 	return this.fileSize;
	 }
	
	/**
	 * @param fileSize int File size
	 */
	 setFileSize(fileSize) {
	 	this.fileSize = fileSize;
	 }
	
	/**
	 * Additional Data
	 * @return string
	 */
	 getAdditionalData() {
	 	return this.additionalData;
	 }
	
	/**
	 * @param additionalData string Additional Data
	 */
	 setAdditionalData(additionalData) {
	 	this.additionalData = additionalData;
	 }
	
	/**
	 * Alternative streaming code
	 * @return string
	 */
	 getAltStreamingCode() {
	 	return this.altStreamingCode;
	 }
	
	/**
	 * @param altStreamingCode string Alternative streaming code
	 */
	 setAltStreamingCode(altStreamingCode) {
	 	this.altStreamingCode = altStreamingCode;
	 }
	
	/**
	 * Alternative cdn adapter profile identifier
	 * @return int
	 */
	 getAlternativeCdnAdapaterProfileId() {
	 	return this.alternativeCdnAdapaterProfileId;
	 }
	
	/**
	 * @param alternativeCdnAdapaterProfileId int Alternative cdn adapter profile identifier
	 */
	 setAlternativeCdnAdapaterProfileId(alternativeCdnAdapaterProfileId) {
	 	this.alternativeCdnAdapaterProfileId = alternativeCdnAdapaterProfileId;
	 }
	
	/**
	 * EndDate
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int EndDate
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * StartDate
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int StartDate
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * ExternalStoreId
	 * @return string
	 */
	 getExternalStoreId() {
	 	return this.externalStoreId;
	 }
	
	/**
	 * @param externalStoreId string ExternalStoreId
	 */
	 setExternalStoreId(externalStoreId) {
	 	this.externalStoreId = externalStoreId;
	 }
	
	/**
	 * IsDefaultLanguage
	 * @return bool
	 */
	 getIsDefaultLanguage() {
	 	return this.isDefaultLanguage;
	 }
	
	/**
	 * @param isDefaultLanguage bool IsDefaultLanguage
	 */
	 setIsDefaultLanguage(isDefaultLanguage) {
	 	this.isDefaultLanguage = isDefaultLanguage;
	 }
	
	/**
	 * Language
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string Language
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * OrderNum
	 * @return int
	 */
	 getOrderNum() {
	 	return this.orderNum;
	 }
	
	/**
	 * @param orderNum int OrderNum
	 */
	 setOrderNum(orderNum) {
	 	this.orderNum = orderNum;
	 }
	
	/**
	 * OutputProtecationLevel
	 * @return string
	 */
	 getOutputProtecationLevel() {
	 	return this.outputProtecationLevel;
	 }
	
	/**
	 * @param outputProtecationLevel string OutputProtecationLevel
	 */
	 setOutputProtecationLevel(outputProtecationLevel) {
	 	this.outputProtecationLevel = outputProtecationLevel;
	 }
	
	/**
	 * cdn adapter profile identifier
	 * @return int
	 */
	 getCdnAdapaterProfileId() {
	 	return this.cdnAdapaterProfileId;
	 }
	
	/**
	 * @param cdnAdapaterProfileId int cdn adapter profile identifier
	 */
	 setCdnAdapaterProfileId(cdnAdapaterProfileId) {
	 	this.cdnAdapaterProfileId = cdnAdapaterProfileId;
	 }
	
	/**
	 * The media file status
	 * @return bool
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status bool The media file status
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * Catalog end date
	 * @return int
	 */
	 getCatalogEndDate() {
	 	return this.catalogEndDate;
	 }
	
	/**
	 * @param catalogEndDate int Catalog end date
	 */
	 setCatalogEndDate(catalogEndDate) {
	 	this.catalogEndDate = catalogEndDate;
	 }
}
module.exports.MediaFile = MediaFile;

/**
 *
 */
class BuzzScore extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBuzzScore';
	}
	
	/**
	 * Normalized average score
	 * @return float
	 */
	 getNormalizedAvgScore() {
	 	return this.normalizedAvgScore;
	 }
	
	/**
	 * @param normalizedAvgScore float Normalized average score
	 */
	 setNormalizedAvgScore(normalizedAvgScore) {
	 	this.normalizedAvgScore = normalizedAvgScore;
	 }
	
	/**
	 * Update date
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
	
	/**
	 * @param updateDate int Update date
	 */
	 setUpdateDate(updateDate) {
	 	this.updateDate = updateDate;
	 }
	
	/**
	 * Average score
	 * @return float
	 */
	 getAvgScore() {
	 	return this.avgScore;
	 }
	
	/**
	 * @param avgScore float Average score
	 */
	 setAvgScore(avgScore) {
	 	this.avgScore = avgScore;
	 }
}
module.exports.BuzzScore = BuzzScore;

/**
 *
 */
class AssetStatistics extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStatistics';
	}
	
	/**
	 * Unique identifier for the asset
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int Unique identifier for the asset
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * Total number of likes for this asset
	 * @return int
	 */
	 getLikes() {
	 	return this.likes;
	 }
	
	/**
	 * @param likes int Total number of likes for this asset
	 */
	 setLikes(likes) {
	 	this.likes = likes;
	 }
	
	/**
	 * Total number of views for this asset
	 * @return int
	 */
	 getViews() {
	 	return this.views;
	 }
	
	/**
	 * @param views int Total number of views for this asset
	 */
	 setViews(views) {
	 	this.views = views;
	 }
	
	/**
	 * Number of people that rated the asset
	 * @return int
	 */
	 getRatingCount() {
	 	return this.ratingCount;
	 }
	
	/**
	 * @param ratingCount int Number of people that rated the asset
	 */
	 setRatingCount(ratingCount) {
	 	this.ratingCount = ratingCount;
	 }
	
	/**
	 * Average rating for the asset
	 * @return float
	 */
	 getRating() {
	 	return this.rating;
	 }
	
	/**
	 * @param rating float Average rating for the asset
	 */
	 setRating(rating) {
	 	this.rating = rating;
	 }
	
	/**
	 * Buzz score
	 * @return BuzzScore
	 */
	 getBuzzScore() {
	 	return this.buzzScore;
	 }
	
	/**
	 * @param buzzScore BuzzScore Buzz score
	 */
	 setBuzzScore(buzzScore) {
	 	this.buzzScore = buzzScore;
	 }
}
module.exports.AssetStatistics = AssetStatistics;

/**
 *
 */
class MultilingualStringValueArray extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMultilingualStringValueArray';
	}
	
	/**
	 * List of string values
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array List of string values
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.MultilingualStringValueArray = MultilingualStringValueArray;

/**
 *
 */
class Favorite extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFavorite';
	}
	
	/**
	 * AssetInfo Model
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int AssetInfo Model
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * Extra Value
	 * @return string
	 */
	 getExtraData() {
	 	return this.extraData;
	 }
	
	/**
	 * @param extraData string Extra Value
	 */
	 setExtraData(extraData) {
	 	this.extraData = extraData;
	 }
	
	/**
	 * Specifies when was the favorite created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
}
module.exports.Favorite = Favorite;

/**
 *
 */
class FavoriteListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFavoriteListResponse';
	}
	
	/**
	 * A list of favorites
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of favorites
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.FavoriteListResponse = FavoriteListResponse;

/**
 *
 */
class PlaybackSource extends MediaFile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaybackSource';
	}
	
	/**
	 * Source format according to delivery profile streamer type (applehttp, mpegdash etc.)
	 * @return string
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format string Source format according to delivery profile streamer type (applehttp, mpegdash etc.)
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
	
	/**
	 * Comma separated string according to deliveryProfile media protocols (&#39;http,https&#39; etc.)
	 * @return string
	 */
	 getProtocols() {
	 	return this.protocols;
	 }
	
	/**
	 * @param protocols string Comma separated string according to deliveryProfile media protocols (&#39;http,https&#39; etc.)
	 */
	 setProtocols(protocols) {
	 	this.protocols = protocols;
	 }
	
	/**
	 * DRM data object containing relevant license URL ,scheme name and certificate
	 * @return array
	 */
	 getDrm() {
	 	return this.drm;
	 }
	
	/**
	 * @param drm array DRM data object containing relevant license URL ,scheme name and certificate
	 */
	 setDrm(drm) {
	 	this.drm = drm;
	 }
	
	/**
	 * Is Tokenized
	 * @return bool
	 */
	 getIsTokenized() {
	 	return this.isTokenized;
	 }
	
	/**
	 * @param isTokenized bool Is Tokenized
	 */
	 setIsTokenized(isTokenized) {
	 	this.isTokenized = isTokenized;
	 }
}
module.exports.PlaybackSource = PlaybackSource;

/**
 *
 */
class BaseOTTUser extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseOTTUser';
	}
	
	/**
	 * User identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Username
	 * @return string
	 */
	 getUsername() {
	 	return this.username;
	 }
	
	/**
	 * @param username string Username
	 */
	 setUsername(username) {
	 	this.username = username;
	 }
	
	/**
	 * First name
	 * @return string
	 */
	 getFirstName() {
	 	return this.firstName;
	 }
	
	/**
	 * @param firstName string First name
	 */
	 setFirstName(firstName) {
	 	this.firstName = firstName;
	 }
	
	/**
	 * Last name
	 * @return string
	 */
	 getLastName() {
	 	return this.lastName;
	 }
	
	/**
	 * @param lastName string Last name
	 */
	 setLastName(lastName) {
	 	this.lastName = lastName;
	 }
}
module.exports.BaseOTTUser = BaseOTTUser;

/**
 *
 */
class Country extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCountry';
	}
	
	/**
	 * Country identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Country name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Country name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Country code
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string Country code
	 */
	 setCode(code) {
	 	this.code = code;
	 }
	
	/**
	 * The main language code in the country
	 * @return string
	 */
	 getMainLanguageCode() {
	 	return this.mainLanguageCode;
	 }
	
	/**
	 * @param mainLanguageCode string The main language code in the country
	 */
	 setMainLanguageCode(mainLanguageCode) {
	 	this.mainLanguageCode = mainLanguageCode;
	 }
	
	/**
	 * All the languages code that are supported in the country
	 * @return string
	 */
	 getLanguagesCode() {
	 	return this.languagesCode;
	 }
	
	/**
	 * @param languagesCode string All the languages code that are supported in the country
	 */
	 setLanguagesCode(languagesCode) {
	 	this.languagesCode = languagesCode;
	 }
	
	/**
	 * Currency code
	 * @return string
	 */
	 getCurrency() {
	 	return this.currency;
	 }
	
	/**
	 * @param currency string Currency code
	 */
	 setCurrency(currency) {
	 	this.currency = currency;
	 }
	
	/**
	 * Currency Sign
	 * @return string
	 */
	 getCurrencySign() {
	 	return this.currencySign;
	 }
	
	/**
	 * @param currencySign string Currency Sign
	 */
	 setCurrencySign(currencySign) {
	 	this.currencySign = currencySign;
	 }
	
	/**
	 * Vat Percent in the country
	 * @return float
	 */
	 getVatPercent() {
	 	return this.vatPercent;
	 }
	
	/**
	 * @param vatPercent float Vat Percent in the country
	 */
	 setVatPercent(vatPercent) {
	 	this.vatPercent = vatPercent;
	 }
	
	/**
	 * Time zone ID
	 * @return string
	 */
	 getTimeZoneId() {
	 	return this.timeZoneId;
	 }
	
	/**
	 * @param timeZoneId string Time zone ID
	 */
	 setTimeZoneId(timeZoneId) {
	 	this.timeZoneId = timeZoneId;
	 }
}
module.exports.Country = Country;

/**
 *
 */
class OTTUserType extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTUserType';
	}
	
	/**
	 * User type identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * User type description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string User type description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.OTTUserType = OTTUserType;

/**
 *
 */
class OTTUser extends BaseOTTUser{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTUser';
	}
	
	/**
	 * Household identifier
	 * @return int
	 */
	 getHouseholdId() {
	 	return this.householdId;
	 }
	
	/**
	 * Email
	 * @return string
	 */
	 getEmail() {
	 	return this.email;
	 }
	
	/**
	 * @param email string Email
	 */
	 setEmail(email) {
	 	this.email = email;
	 }
	
	/**
	 * Address
	 * @return string
	 */
	 getAddress() {
	 	return this.address;
	 }
	
	/**
	 * @param address string Address
	 */
	 setAddress(address) {
	 	this.address = address;
	 }
	
	/**
	 * City
	 * @return string
	 */
	 getCity() {
	 	return this.city;
	 }
	
	/**
	 * @param city string City
	 */
	 setCity(city) {
	 	this.city = city;
	 }
	
	/**
	 * Country identifier
	 * @return int
	 */
	 getCountryId() {
	 	return this.countryId;
	 }
	
	/**
	 * @param countryId int Country identifier
	 */
	 setCountryId(countryId) {
	 	this.countryId = countryId;
	 }
	
	/**
	 * Zip code
	 * @return string
	 */
	 getZip() {
	 	return this.zip;
	 }
	
	/**
	 * @param zip string Zip code
	 */
	 setZip(zip) {
	 	this.zip = zip;
	 }
	
	/**
	 * Phone
	 * @return string
	 */
	 getPhone() {
	 	return this.phone;
	 }
	
	/**
	 * @param phone string Phone
	 */
	 setPhone(phone) {
	 	this.phone = phone;
	 }
	
	/**
	 * Affiliate code
	 * @return string
	 */
	 getAffiliateCode() {
	 	return this.affiliateCode;
	 }
	
	/**
	 * @param affiliateCode string Affiliate code
	 */
	 setAffiliateCode(affiliateCode) {
	 	this.affiliateCode = affiliateCode;
	 }
	
	/**
	 * External user identifier
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External user identifier
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * User type
	 * @return OTTUserType
	 */
	 getUserType() {
	 	return this.userType;
	 }
	
	/**
	 * @param userType OTTUserType User type
	 */
	 setUserType(userType) {
	 	this.userType = userType;
	 }
	
	/**
	 * Dynamic data
	 * @return map
	 */
	 getDynamicData() {
	 	return this.dynamicData;
	 }
	
	/**
	 * @param dynamicData map Dynamic data
	 */
	 setDynamicData(dynamicData) {
	 	this.dynamicData = dynamicData;
	 }
	
	/**
	 * Is the user the household master
	 * @return bool
	 */
	 getIsHouseholdMaster() {
	 	return this.isHouseholdMaster;
	 }
	
	/**
	 * Suspension state
	 * @return string
	 */
	 getSuspensionState() {
	 	return this.suspensionState;
	 }
	
	/**
	 * User state
	 * @return string
	 */
	 getUserState() {
	 	return this.userState;
	 }
	
	/**
	 * Comma separated list of role Ids
	 * @return string
	 */
	 getRoleIds() {
	 	return this.roleIds;
	 }
	
	/**
	 * @param roleIds string Comma separated list of role Ids
	 */
	 setRoleIds(roleIds) {
	 	this.roleIds = roleIds;
	 }
	
	/**
	 * User create date
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * User last update date
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
}
module.exports.OTTUser = OTTUser;

/**
 *
 */
class OTTUserListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTUserListResponse';
	}
	
	/**
	 * A list of users
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of users
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.OTTUserListResponse = OTTUserListResponse;

/**
 *
 */
class PersonalList extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersonalList';
	}
	
	/**
	 * Id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Create Date
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restricted to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * user_interests - only valid value is &quot;true&quot;. When enabled, only assets that the user defined as his interests (by tags and metas) will return.
 * epg_channel_id – the channel identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;not_entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * asset_type - valid values: &quot;media&quot;, &quot;epg&quot;, &quot;recording&quot; or any number that represents media type in group.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in).
 * For alpha-numerical fields =, != (not), ~ (like), !~, ^ (any word starts with), ^= (phrase starts with), + (exists), !+ (not exists).
 * Logical conjunction: and, or.
 * Search values are limited to 20 characters each for the next operators: ~, !~, ^, ^=
 * (maximum length of entire filter is 4096 characters)
	 * @return string
	 */
	 getKsql() {
	 	return this.ksql;
	 }
	
	/**
	 * @param ksql string Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restricted to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * user_interests - only valid value is &quot;true&quot;. When enabled, only assets that the user defined as his interests (by tags and metas) will return.
 * epg_channel_id – the channel identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;not_entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * asset_type - valid values: &quot;media&quot;, &quot;epg&quot;, &quot;recording&quot; or any number that represents media type in group.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in).
 * For alpha-numerical fields =, != (not), ~ (like), !~, ^ (any word starts with), ^= (phrase starts with), + (exists), !+ (not exists).
 * Logical conjunction: and, or.
 * Search values are limited to 20 characters each for the next operators: ~, !~, ^, ^=
 * (maximum length of entire filter is 4096 characters)
	 */
	 setKsql(ksql) {
	 	this.ksql = ksql;
	 }
	
	/**
	 * Partner List Type (optional)
	 * @return int
	 */
	 getPartnerListType() {
	 	return this.partnerListType;
	 }
	
	/**
	 * @param partnerListType int Partner List Type (optional)
	 */
	 setPartnerListType(partnerListType) {
	 	this.partnerListType = partnerListType;
	 }
}
module.exports.PersonalList = PersonalList;

/**
 *
 */
class PersonalListListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersonalListListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PersonalListListResponse = PersonalListListResponse;

/**
 *
 */
class Engagement extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEngagement';
	}
	
	/**
	 * Engagement id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Total number of recipients
	 * @return int
	 */
	 getTotalNumberOfRecipients() {
	 	return this.totalNumberOfRecipients;
	 }
	
	/**
	 * Engagement type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Engagement type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Engagement adapter id
	 * @return int
	 */
	 getAdapterId() {
	 	return this.adapterId;
	 }
	
	/**
	 * @param adapterId int Engagement adapter id
	 */
	 setAdapterId(adapterId) {
	 	this.adapterId = adapterId;
	 }
	
	/**
	 * Engagement adapter dynamic data
	 * @return string
	 */
	 getAdapterDynamicData() {
	 	return this.adapterDynamicData;
	 }
	
	/**
	 * @param adapterDynamicData string Engagement adapter dynamic data
	 */
	 setAdapterDynamicData(adapterDynamicData) {
	 	this.adapterDynamicData = adapterDynamicData;
	 }
	
	/**
	 * Interval (seconds)
	 * @return int
	 */
	 getIntervalSeconds() {
	 	return this.intervalSeconds;
	 }
	
	/**
	 * @param intervalSeconds int Interval (seconds)
	 */
	 setIntervalSeconds(intervalSeconds) {
	 	this.intervalSeconds = intervalSeconds;
	 }
	
	/**
	 * Manual User list
	 * @return string
	 */
	 getUserList() {
	 	return this.userList;
	 }
	
	/**
	 * @param userList string Manual User list
	 */
	 setUserList(userList) {
	 	this.userList = userList;
	 }
	
	/**
	 * Send time (seconds)
	 * @return int
	 */
	 getSendTimeInSeconds() {
	 	return this.sendTimeInSeconds;
	 }
	
	/**
	 * @param sendTimeInSeconds int Send time (seconds)
	 */
	 setSendTimeInSeconds(sendTimeInSeconds) {
	 	this.sendTimeInSeconds = sendTimeInSeconds;
	 }
	
	/**
	 * Coupon GroupId
	 * @return int
	 */
	 getCouponGroupId() {
	 	return this.couponGroupId;
	 }
	
	/**
	 * @param couponGroupId int Coupon GroupId
	 */
	 setCouponGroupId(couponGroupId) {
	 	this.couponGroupId = couponGroupId;
	 }
}
module.exports.Engagement = Engagement;

/**
 *
 */
class EngagementListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEngagementListResponse';
	}
	
	/**
	 * A list of Engagement
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of Engagement
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.EngagementListResponse = EngagementListResponse;

/**
 *
 */
class EngagementAdapterBase extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEngagementAdapterBase';
	}
	
	/**
	 * Engagement adapter id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Engagement adapter name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Engagement adapter name
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.EngagementAdapterBase = EngagementAdapterBase;

/**
 *
 */
class EngagementAdapter extends EngagementAdapterBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEngagementAdapter';
	}
	
	/**
	 * Engagement adapter active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool Engagement adapter active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * Engagement adapter adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string Engagement adapter adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * Engagement provider adapter URL
	 * @return string
	 */
	 getProviderUrl() {
	 	return this.providerUrl;
	 }
	
	/**
	 * @param providerUrl string Engagement provider adapter URL
	 */
	 setProviderUrl(providerUrl) {
	 	this.providerUrl = providerUrl;
	 }
	
	/**
	 * Engagement adapter extra parameters
	 * @return map
	 */
	 getEngagementAdapterSettings() {
	 	return this.engagementAdapterSettings;
	 }
	
	/**
	 * @param engagementAdapterSettings map Engagement adapter extra parameters
	 */
	 setEngagementAdapterSettings(engagementAdapterSettings) {
	 	this.engagementAdapterSettings = engagementAdapterSettings;
	 }
	
	/**
	 * Shared Secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
}
module.exports.EngagementAdapter = EngagementAdapter;

/**
 *
 */
class EngagementAdapterListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEngagementAdapterListResponse';
	}
	
	/**
	 * A list of Engagement adapter
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of Engagement adapter
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.EngagementAdapterListResponse = EngagementAdapterListResponse;

/**
 *
 */
class Reminder extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReminder';
	}
	
	/**
	 * Reminder name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * Reminder id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Reminder type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Reminder type
	 */
	 setType(type) {
	 	this.type = type;
	 }
}
module.exports.Reminder = Reminder;

/**
 *
 */
class ReminderListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReminderListResponse';
	}
	
	/**
	 * Reminders
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Reminders
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ReminderListResponse = ReminderListResponse;

/**
 *
 */
class SeriesReminder extends Reminder{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSeriesReminder';
	}
	
	/**
	 * Series identifier
	 * @return string
	 */
	 getSeriesId() {
	 	return this.seriesId;
	 }
	
	/**
	 * @param seriesId string Series identifier
	 */
	 setSeriesId(seriesId) {
	 	this.seriesId = seriesId;
	 }
	
	/**
	 * Season number
	 * @return int
	 */
	 getSeasonNumber() {
	 	return this.seasonNumber;
	 }
	
	/**
	 * @param seasonNumber int Season number
	 */
	 setSeasonNumber(seasonNumber) {
	 	this.seasonNumber = seasonNumber;
	 }
	
	/**
	 * EPG channel identifier
	 * @return int
	 */
	 getEpgChannelId() {
	 	return this.epgChannelId;
	 }
	
	/**
	 * @param epgChannelId int EPG channel identifier
	 */
	 setEpgChannelId(epgChannelId) {
	 	this.epgChannelId = epgChannelId;
	 }
}
module.exports.SeriesReminder = SeriesReminder;

/**
 *
 */
class AssetReminder extends Reminder{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetReminder';
	}
	
	/**
	 * Asset id
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int Asset id
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
}
module.exports.AssetReminder = AssetReminder;

/**
 *
 */
class InboxMessage extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaInboxMessage';
	}
	
	/**
	 * message id
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * message
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string message
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * Status
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Created at
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * url
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string url
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
}
module.exports.InboxMessage = InboxMessage;

/**
 *
 */
class InboxMessageListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaInboxMessageListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.InboxMessageListResponse = InboxMessageListResponse;

/**
 *
 */
class FollowDataBase extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFollowDataBase';
	}
	
	/**
	 * Announcement Id
	 * @return int
	 */
	 getAnnouncementId() {
	 	return this.announcementId;
	 }
	
	/**
	 * Status
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Title
	 * @return string
	 */
	 getTitle() {
	 	return this.title;
	 }
	
	/**
	 * Timestamp
	 * @return int
	 */
	 getTimestamp() {
	 	return this.timestamp;
	 }
	
	/**
	 * Follow Phrase
	 * @return string
	 */
	 getFollowPhrase() {
	 	return this.followPhrase;
	 }
}
module.exports.FollowDataBase = FollowDataBase;

/**
 *
 */
class FollowTvSeries extends FollowDataBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFollowTvSeries';
	}
	
	/**
	 * Asset Id
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int Asset Id
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
}
module.exports.FollowTvSeries = FollowTvSeries;

/**
 *
 */
class FollowTvSeriesListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFollowTvSeriesListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.FollowTvSeriesListResponse = FollowTvSeriesListResponse;

/**
 *
 */
class Announcement extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnnouncement';
	}
	
	/**
	 * Announcement name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Announcement name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Announcement message
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string Announcement message
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * Announcement enabled
	 * @return bool
	 */
	 getEnabled() {
	 	return this.enabled;
	 }
	
	/**
	 * @param enabled bool Announcement enabled
	 */
	 setEnabled(enabled) {
	 	this.enabled = enabled;
	 }
	
	/**
	 * Announcement start time
	 * @return int
	 */
	 getStartTime() {
	 	return this.startTime;
	 }
	
	/**
	 * @param startTime int Announcement start time
	 */
	 setStartTime(startTime) {
	 	this.startTime = startTime;
	 }
	
	/**
	 * Announcement time zone
	 * @return string
	 */
	 getTimezone() {
	 	return this.timezone;
	 }
	
	/**
	 * @param timezone string Announcement time zone
	 */
	 setTimezone(timezone) {
	 	this.timezone = timezone;
	 }
	
	/**
	 * Announcement status: NotSent=0/Sending=1/Sent=2/Aborted=3
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Announcement recipients: All=0/LoggedIn=1/Guests=2/Other=3
	 * @return string
	 */
	 getRecipients() {
	 	return this.recipients;
	 }
	
	/**
	 * @param recipients string Announcement recipients: All=0/LoggedIn=1/Guests=2/Other=3
	 */
	 setRecipients(recipients) {
	 	this.recipients = recipients;
	 }
	
	/**
	 * Announcement id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Announcement image URL, relevant for system announcements
	 * @return string
	 */
	 getImageUrl() {
	 	return this.imageUrl;
	 }
	
	/**
	 * @param imageUrl string Announcement image URL, relevant for system announcements
	 */
	 setImageUrl(imageUrl) {
	 	this.imageUrl = imageUrl;
	 }
	
	/**
	 * Include Mail
	 * @return bool
	 */
	 getIncludeMail() {
	 	return this.includeMail;
	 }
	
	/**
	 * @param includeMail bool Include Mail
	 */
	 setIncludeMail(includeMail) {
	 	this.includeMail = includeMail;
	 }
	
	/**
	 * Mail Template
	 * @return string
	 */
	 getMailTemplate() {
	 	return this.mailTemplate;
	 }
	
	/**
	 * @param mailTemplate string Mail Template
	 */
	 setMailTemplate(mailTemplate) {
	 	this.mailTemplate = mailTemplate;
	 }
	
	/**
	 * Mail Subject
	 * @return string
	 */
	 getMailSubject() {
	 	return this.mailSubject;
	 }
	
	/**
	 * @param mailSubject string Mail Subject
	 */
	 setMailSubject(mailSubject) {
	 	this.mailSubject = mailSubject;
	 }
	
	/**
	 * Include SMS
	 * @return bool
	 */
	 getIncludeSms() {
	 	return this.includeSms;
	 }
	
	/**
	 * @param includeSms bool Include SMS
	 */
	 setIncludeSms(includeSms) {
	 	this.includeSms = includeSms;
	 }
}
module.exports.Announcement = Announcement;

/**
 *
 */
class AnnouncementListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnnouncementListResponse';
	}
	
	/**
	 * Announcements
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Announcements
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AnnouncementListResponse = AnnouncementListResponse;

/**
 *
 */
class Feed extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFeed';
	}
	
	/**
	 * Asset identifier
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
}
module.exports.Feed = Feed;

/**
 *
 */
class PersonalFeed extends Feed{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersonalFeed';
	}
}
module.exports.PersonalFeed = PersonalFeed;

/**
 *
 */
class PersonalFeedListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersonalFeedListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PersonalFeedListResponse = PersonalFeedListResponse;

/**
 *
 */
class Topic extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTopic';
	}
	
	/**
	 * message id
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * message
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string message
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * message
	 * @return string
	 */
	 getSubscribersAmount() {
	 	return this.subscribersAmount;
	 }
	
	/**
	 * @param subscribersAmount string message
	 */
	 setSubscribersAmount(subscribersAmount) {
	 	this.subscribersAmount = subscribersAmount;
	 }
	
	/**
	 * automaticIssueNotification
	 * @return string
	 */
	 getAutomaticIssueNotification() {
	 	return this.automaticIssueNotification;
	 }
	
	/**
	 * @param automaticIssueNotification string automaticIssueNotification
	 */
	 setAutomaticIssueNotification(automaticIssueNotification) {
	 	this.automaticIssueNotification = automaticIssueNotification;
	 }
	
	/**
	 * lastMessageSentDateSec
	 * @return int
	 */
	 getLastMessageSentDateSec() {
	 	return this.lastMessageSentDateSec;
	 }
	
	/**
	 * @param lastMessageSentDateSec int lastMessageSentDateSec
	 */
	 setLastMessageSentDateSec(lastMessageSentDateSec) {
	 	this.lastMessageSentDateSec = lastMessageSentDateSec;
	 }
}
module.exports.Topic = Topic;

/**
 *
 */
class TopicListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTopicListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.TopicListResponse = TopicListResponse;

/**
 *
 */
class PartnerConfiguration extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartnerConfiguration';
	}
}
module.exports.PartnerConfiguration = PartnerConfiguration;

/**
 *
 */
class PartnerConfigurationListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartnerConfigurationListResponse';
	}
	
	/**
	 * Partner Configurations
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Partner Configurations
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PartnerConfigurationListResponse = PartnerConfigurationListResponse;

/**
 *
 */
class ConcurrencyPartnerConfig extends PartnerConfiguration{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConcurrencyPartnerConfig';
	}
	
	/**
	 * Comma separated list of device Family Ids order by their priority
	 * @return string
	 */
	 getDeviceFamilyIds() {
	 	return this.deviceFamilyIds;
	 }
	
	/**
	 * @param deviceFamilyIds string Comma separated list of device Family Ids order by their priority
	 */
	 setDeviceFamilyIds(deviceFamilyIds) {
	 	this.deviceFamilyIds = deviceFamilyIds;
	 }
	
	/**
	 * Policy of eviction devices
	 * @return string
	 */
	 getEvictionPolicy() {
	 	return this.evictionPolicy;
	 }
	
	/**
	 * @param evictionPolicy string Policy of eviction devices
	 */
	 setEvictionPolicy(evictionPolicy) {
	 	this.evictionPolicy = evictionPolicy;
	 }
}
module.exports.ConcurrencyPartnerConfig = ConcurrencyPartnerConfig;

/**
 *
 */
class BillingPartnerConfig extends PartnerConfiguration{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBillingPartnerConfig';
	}
	
	/**
	 * configuration value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string configuration value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
	
	/**
	 * partner configuration type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string partner configuration type
	 */
	 setType(type) {
	 	this.type = type;
	 }
}
module.exports.BillingPartnerConfig = BillingPartnerConfig;

/**
 *
 */
class T extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaT';
	}
}
module.exports.T = T;

/**
 *
 */
class GenericListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericListResponse';
	}
	
	/**
	 * A list of objects
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of objects
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.GenericListResponse = GenericListResponse;

/**
 *
 */
class IntegerValueListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIntegerValueListResponse';
	}
	
	/**
	 * Interger value items
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Interger value items
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.IntegerValueListResponse = IntegerValueListResponse;

/**
 *
 */
class Report extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReport';
	}
}
module.exports.Report = Report;

/**
 *
 */
class ReportListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportListResponse';
	}
	
	/**
	 * Reports
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Reports
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ReportListResponse = ReportListResponse;

/**
 *
 */
class PushParams extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPushParams';
	}
	
	/**
	 * Device-Application push token
	 * @return string
	 */
	 getToken() {
	 	return this.token;
	 }
	
	/**
	 * @param token string Device-Application push token
	 */
	 setToken(token) {
	 	this.token = token;
	 }
	
	/**
	 * External device token as received from external push provider in exchange for the device token
	 * @return string
	 */
	 getExternalToken() {
	 	return this.externalToken;
	 }
	
	/**
	 * @param externalToken string External device token as received from external push provider in exchange for the device token
	 */
	 setExternalToken(externalToken) {
	 	this.externalToken = externalToken;
	 }
}
module.exports.PushParams = PushParams;

/**
 *
 */
class DeviceReport extends Report{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeviceReport';
	}
	
	/**
	 * Partner unique identifier
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int Partner unique identifier
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * Configuration group identifier which the version configuration the device last received belongs to
	 * @return string
	 */
	 getConfigurationGroupId() {
	 	return this.configurationGroupId;
	 }
	
	/**
	 * @param configurationGroupId string Configuration group identifier which the version configuration the device last received belongs to
	 */
	 setConfigurationGroupId(configurationGroupId) {
	 	this.configurationGroupId = configurationGroupId;
	 }
	
	/**
	 * Device unique identifier
	 * @return string
	 */
	 getUdid() {
	 	return this.udid;
	 }
	
	/**
	 * @param udid string Device unique identifier
	 */
	 setUdid(udid) {
	 	this.udid = udid;
	 }
	
	/**
	 * Device-Application push parameters
	 * @return PushParams
	 */
	 getPushParameters() {
	 	return this.pushParameters;
	 }
	
	/**
	 * @param pushParameters PushParams Device-Application push parameters
	 */
	 setPushParameters(pushParameters) {
	 	this.pushParameters = pushParameters;
	 }
	
	/**
	 * Application version number
	 * @return string
	 */
	 getVersionNumber() {
	 	return this.versionNumber;
	 }
	
	/**
	 * @param versionNumber string Application version number
	 */
	 setVersionNumber(versionNumber) {
	 	this.versionNumber = versionNumber;
	 }
	
	/**
	 * Application version type
	 * @return string
	 */
	 getVersionPlatform() {
	 	return this.versionPlatform;
	 }
	
	/**
	 * @param versionPlatform string Application version type
	 */
	 setVersionPlatform(versionPlatform) {
	 	this.versionPlatform = versionPlatform;
	 }
	
	/**
	 * Application version name
	 * @return string
	 */
	 getVersionAppName() {
	 	return this.versionAppName;
	 }
	
	/**
	 * @param versionAppName string Application version name
	 */
	 setVersionAppName(versionAppName) {
	 	this.versionAppName = versionAppName;
	 }
	
	/**
	 * Last access IP
	 * @return string
	 */
	 getLastAccessIP() {
	 	return this.lastAccessIP;
	 }
	
	/**
	 * @param lastAccessIP string Last access IP
	 */
	 setLastAccessIP(lastAccessIP) {
	 	this.lastAccessIP = lastAccessIP;
	 }
	
	/**
	 * Last device configuration request date
	 * @return int
	 */
	 getLastAccessDate() {
	 	return this.lastAccessDate;
	 }
	
	/**
	 * @param lastAccessDate int Last device configuration request date
	 */
	 setLastAccessDate(lastAccessDate) {
	 	this.lastAccessDate = lastAccessDate;
	 }
	
	/**
	 * request header property
	 * @return string
	 */
	 getUserAgent() {
	 	return this.userAgent;
	 }
	
	/**
	 * @param userAgent string request header property
	 */
	 setUserAgent(userAgent) {
	 	this.userAgent = userAgent;
	 }
	
	/**
	 * Request header property
 * Incase value cannot be found - returns &quot;Unknown 0.0&quot;
	 * @return string
	 */
	 getOperationSystem() {
	 	return this.operationSystem;
	 }
	
	/**
	 * @param operationSystem string Request header property
 * Incase value cannot be found - returns &quot;Unknown 0.0&quot;
	 */
	 setOperationSystem(operationSystem) {
	 	this.operationSystem = operationSystem;
	 }
}
module.exports.DeviceReport = DeviceReport;

/**
 *
 */
class Bulk extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulk';
	}
	
	/**
	 * Bulk identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Status
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Specifies when was the bulk action created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the bulk action last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
}
module.exports.Bulk = Bulk;

/**
 *
 */
class BulkListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkListResponse';
	}
	
	/**
	 * bulk items
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array bulk items
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.BulkListResponse = BulkListResponse;

/**
 *
 */
class BaseSegmentCondition extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseSegmentCondition';
	}
}
module.exports.BaseSegmentCondition = BaseSegmentCondition;

/**
 *
 */
class BaseSegmentValue extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseSegmentValue';
	}
}
module.exports.BaseSegmentValue = BaseSegmentValue;

/**
 *
 */
class SegmentationType extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSegmentationType';
	}
	
	/**
	 * Id of segmentation type
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Name of segmentation type
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Name of segmentation type
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Description of segmentation type
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Description of segmentation type
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Segmentation conditions - can be empty
	 * @return array
	 */
	 getConditions() {
	 	return this.conditions;
	 }
	
	/**
	 * @param conditions array Segmentation conditions - can be empty
	 */
	 setConditions(conditions) {
	 	this.conditions = conditions;
	 }
	
	/**
	 * Segmentation values - can be empty (so only one segment will be created)
	 * @return BaseSegmentValue
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value BaseSegmentValue Segmentation values - can be empty (so only one segment will be created)
	 */
	 setValue(value) {
	 	this.value = value;
	 }
	
	/**
	 * Create date of segmentation type
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Segmentation type version
	 * @return int
	 */
	 getVersion() {
	 	return this.version;
	 }
}
module.exports.SegmentationType = SegmentationType;

/**
 *
 */
class SegmentationTypeListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSegmentationTypeListResponse';
	}
	
	/**
	 * Segmentation Types
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Segmentation Types
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SegmentationTypeListResponse = SegmentationTypeListResponse;

/**
 *
 */
class MonetizationCondition extends BaseSegmentCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMonetizationCondition';
	}
	
	/**
	 * The minimum value to be met
	 * @return int
	 */
	 getMinValue() {
	 	return this.minValue;
	 }
	
	/**
	 * @param minValue int The minimum value to be met
	 */
	 setMinValue(minValue) {
	 	this.minValue = minValue;
	 }
	
	/**
	 * The maximum value to be met
	 * @return int
	 */
	 getMaxValue() {
	 	return this.maxValue;
	 }
	
	/**
	 * @param maxValue int The maximum value to be met
	 */
	 setMaxValue(maxValue) {
	 	this.maxValue = maxValue;
	 }
	
	/**
	 * How many days back should the actions be considered
	 * @return int
	 */
	 getDays() {
	 	return this.days;
	 }
	
	/**
	 * @param days int How many days back should the actions be considered
	 */
	 setDays(days) {
	 	this.days = days;
	 }
	
	/**
	 * Purchase type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Purchase type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Mathermtical operator to calculate
	 * @return string
	 */
	 getOperator() {
	 	return this.operator;
	 }
	
	/**
	 * @param operator string Mathermtical operator to calculate
	 */
	 setOperator(operator) {
	 	this.operator = operator;
	 }
}
module.exports.MonetizationCondition = MonetizationCondition;

/**
 *
 */
class ContentActionCondition extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaContentActionCondition';
	}
	
	/**
	 * The relevant action to be examined
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string The relevant action to be examined
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * Optional - if action required specific length to be considered (in percentage or minutes)
	 * @return int
	 */
	 getLength() {
	 	return this.length;
	 }
	
	/**
	 * @param length int Optional - if action required specific length to be considered (in percentage or minutes)
	 */
	 setLength(length) {
	 	this.length = length;
	 }
	
	/**
	 * Optional - if action required specific length to be considered (in percentage or minutes)
	 * @return string
	 */
	 getLengthType() {
	 	return this.lengthType;
	 }
	
	/**
	 * @param lengthType string Optional - if action required specific length to be considered (in percentage or minutes)
	 */
	 setLengthType(lengthType) {
	 	this.lengthType = lengthType;
	 }
	
	/**
	 * Score multiplier - how much is a single action worth when considering the action
	 * @return int
	 */
	 getMultiplier() {
	 	return this.multiplier;
	 }
	
	/**
	 * @param multiplier int Score multiplier - how much is a single action worth when considering the action
	 */
	 setMultiplier(multiplier) {
	 	this.multiplier = multiplier;
	 }
}
module.exports.ContentActionCondition = ContentActionCondition;

/**
 *
 */
class ContentScoreCondition extends BaseSegmentCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaContentScoreCondition';
	}
	
	/**
	 * The minimum score to be met
	 * @return int
	 */
	 getMinScore() {
	 	return this.minScore;
	 }
	
	/**
	 * @param minScore int The minimum score to be met
	 */
	 setMinScore(minScore) {
	 	this.minScore = minScore;
	 }
	
	/**
	 * The maximum score to be met
	 * @return int
	 */
	 getMaxScore() {
	 	return this.maxScore;
	 }
	
	/**
	 * @param maxScore int The maximum score to be met
	 */
	 setMaxScore(maxScore) {
	 	this.maxScore = maxScore;
	 }
	
	/**
	 * How many days back should the actions be considered
	 * @return int
	 */
	 getDays() {
	 	return this.days;
	 }
	
	/**
	 * @param days int How many days back should the actions be considered
	 */
	 setDays(days) {
	 	this.days = days;
	 }
	
	/**
	 * If condition should be applied on specific field (and not the one of the segment value)
	 * @return string
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field string If condition should be applied on specific field (and not the one of the segment value)
	 */
	 setField(field) {
	 	this.field = field;
	 }
	
	/**
	 * If condition should be applied on specific field (and not the one of the segment value) -
 * list of values to be considered together
	 * @return array
	 */
	 getValues() {
	 	return this.values;
	 }
	
	/**
	 * @param values array If condition should be applied on specific field (and not the one of the segment value) -
 * list of values to be considered together
	 */
	 setValues(values) {
	 	this.values = values;
	 }
	
	/**
	 * List of the actions that consist the condition
	 * @return array
	 */
	 getActions() {
	 	return this.actions;
	 }
	
	/**
	 * @param actions array List of the actions that consist the condition
	 */
	 setActions(actions) {
	 	this.actions = actions;
	 }
}
module.exports.ContentScoreCondition = ContentScoreCondition;

/**
 *
 */
class UserDataCondition extends BaseSegmentCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserDataCondition';
	}
	
	/**
	 * Field name
	 * @return string
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field string Field name
	 */
	 setField(field) {
	 	this.field = field;
	 }
	
	/**
	 * Value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.UserDataCondition = UserDataCondition;

/**
 *
 */
class SingleSegmentValue extends BaseSegmentValue{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSingleSegmentValue';
	}
	
	/**
	 * Id of segment
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
}
module.exports.SingleSegmentValue = SingleSegmentValue;

/**
 *
 */
class SegmentSource extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSegmentSource';
	}
}
module.exports.SegmentSource = SegmentSource;

/**
 *
 */
class SegmentValue extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSegmentValue';
	}
	
	/**
	 * Id of segment
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Systematic name of segment
	 * @return string
	 */
	 getSystematicName() {
	 	return this.systematicName;
	 }
	
	/**
	 * @param systematicName string Systematic name of segment
	 */
	 setSystematicName(systematicName) {
	 	this.systematicName = systematicName;
	 }
	
	/**
	 * Name of segment
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Name of segment
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The value of the segment
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string The value of the segment
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.SegmentValue = SegmentValue;

/**
 *
 */
class SegmentValues extends BaseSegmentValue{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSegmentValues';
	}
	
	/**
	 * Segment values source
	 * @return SegmentSource
	 */
	 getSource() {
	 	return this.source;
	 }
	
	/**
	 * @param source SegmentSource Segment values source
	 */
	 setSource(source) {
	 	this.source = source;
	 }
	
	/**
	 * List of segment values
	 * @return array
	 */
	 getValues() {
	 	return this.values;
	 }
	
	/**
	 * @param values array List of segment values
	 */
	 setValues(values) {
	 	this.values = values;
	 }
}
module.exports.SegmentValues = SegmentValues;

/**
 *
 */
class SegmentAllValues extends SegmentValues{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSegmentAllValues';
	}
	
	/**
	 * Segment names&#39; format - they will be automatically generated
	 * @return string
	 */
	 getNameFormat() {
	 	return this.nameFormat;
	 }
	
	/**
	 * @param nameFormat string Segment names&#39; format - they will be automatically generated
	 */
	 setNameFormat(nameFormat) {
	 	this.nameFormat = nameFormat;
	 }
}
module.exports.SegmentAllValues = SegmentAllValues;

/**
 *
 */
class MonetizationSource extends SegmentSource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMonetizationSource';
	}
	
	/**
	 * Purchase type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Purchase type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Mathermtical operator to calculate
	 * @return string
	 */
	 getOperator() {
	 	return this.operator;
	 }
	
	/**
	 * @param operator string Mathermtical operator to calculate
	 */
	 setOperator(operator) {
	 	this.operator = operator;
	 }
	
	/**
	 * Days to consider when checking the users&#39; purchaes
	 * @return int
	 */
	 getDays() {
	 	return this.days;
	 }
	
	/**
	 * @param days int Days to consider when checking the users&#39; purchaes
	 */
	 setDays(days) {
	 	this.days = days;
	 }
}
module.exports.MonetizationSource = MonetizationSource;

/**
 *
 */
class ContentSource extends SegmentSource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaContentSource';
	}
	
	/**
	 * Topic (meta or tag) name
	 * @return string
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field string Topic (meta or tag) name
	 */
	 setField(field) {
	 	this.field = field;
	 }
}
module.exports.ContentSource = ContentSource;

/**
 *
 */
class UserDynamicDataSource extends SegmentSource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserDynamicDataSource';
	}
	
	/**
	 * Field name
	 * @return string
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field string Field name
	 */
	 setField(field) {
	 	this.field = field;
	 }
}
module.exports.UserDynamicDataSource = UserDynamicDataSource;

/**
 *
 */
class SegmentRange extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSegmentRange';
	}
	
	/**
	 * Id of segment
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Systematic name of segment
	 * @return string
	 */
	 getSystematicName() {
	 	return this.systematicName;
	 }
	
	/**
	 * @param systematicName string Systematic name of segment
	 */
	 setSystematicName(systematicName) {
	 	this.systematicName = systematicName;
	 }
	
	/**
	 * Specific segment name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Specific segment name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Greater than or equals &gt;=
	 * @return float
	 */
	 getGte() {
	 	return this.gte;
	 }
	
	/**
	 * @param gte float Greater than or equals &gt;=
	 */
	 setGte(gte) {
	 	this.gte = gte;
	 }
	
	/**
	 * Greater than &gt;
	 * @return float
	 */
	 getGt() {
	 	return this.gt;
	 }
	
	/**
	 * @param gt float Greater than &gt;
	 */
	 setGt(gt) {
	 	this.gt = gt;
	 }
	
	/**
	 * Less than or equals
	 * @return float
	 */
	 getLte() {
	 	return this.lte;
	 }
	
	/**
	 * @param lte float Less than or equals
	 */
	 setLte(lte) {
	 	this.lte = lte;
	 }
	
	/**
	 * Less than
	 * @return float
	 */
	 getLt() {
	 	return this.lt;
	 }
	
	/**
	 * @param lt float Less than
	 */
	 setLt(lt) {
	 	this.lt = lt;
	 }
	
	/**
	 * Equals
	 * @return float
	 */
	 getEquals() {
	 	return this.equals;
	 }
	
	/**
	 * @param equals float Equals
	 */
	 setEquals(equals) {
	 	this.equals = equals;
	 }
}
module.exports.SegmentRange = SegmentRange;

/**
 *
 */
class SegmentRanges extends BaseSegmentValue{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSegmentRanges';
	}
	
	/**
	 * Range source
	 * @return SegmentSource
	 */
	 getSource() {
	 	return this.source;
	 }
	
	/**
	 * @param source SegmentSource Range source
	 */
	 setSource(source) {
	 	this.source = source;
	 }
	
	/**
	 * List of ranges for segmentation
	 * @return array
	 */
	 getRanges() {
	 	return this.ranges;
	 }
	
	/**
	 * @param ranges array List of ranges for segmentation
	 */
	 setRanges(ranges) {
	 	this.ranges = ranges;
	 }
}
module.exports.SegmentRanges = SegmentRanges;

/**
 *
 */
class UserSegment extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserSegment';
	}
	
	/**
	 * Segment Id
	 * @return int
	 */
	 getSegmentId() {
	 	return this.segmentId;
	 }
	
	/**
	 * @param segmentId int Segment Id
	 */
	 setSegmentId(segmentId) {
	 	this.segmentId = segmentId;
	 }
	
	/**
	 * User Id of segment
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string User Id of segment
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
}
module.exports.UserSegment = UserSegment;

/**
 *
 */
class UserSegmentListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserSegmentListResponse';
	}
	
	/**
	 * Segmentation Types
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Segmentation Types
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.UserSegmentListResponse = UserSegmentListResponse;

/**
 *
 */
class OTTObjectSupportNullable extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTObjectSupportNullable';
	}
}
module.exports.OTTObjectSupportNullable = OTTObjectSupportNullable;

/**
 *
 */
class AssetFilePpv extends OTTObjectSupportNullable{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetFilePpv';
	}
	
	/**
	 * Asset file identifier
	 * @return int
	 */
	 getAssetFileId() {
	 	return this.assetFileId;
	 }
	
	/**
	 * @param assetFileId int Asset file identifier
	 */
	 setAssetFileId(assetFileId) {
	 	this.assetFileId = assetFileId;
	 }
	
	/**
	 * Ppv module identifier
	 * @return int
	 */
	 getPpvModuleId() {
	 	return this.ppvModuleId;
	 }
	
	/**
	 * @param ppvModuleId int Ppv module identifier
	 */
	 setPpvModuleId(ppvModuleId) {
	 	this.ppvModuleId = ppvModuleId;
	 }
	
	/**
	 * Start date and time represented as epoch
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int Start date and time represented as epoch
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * End date and time represented as epoch
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int End date and time represented as epoch
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
}
module.exports.AssetFilePpv = AssetFilePpv;

/**
 *
 */
class AssetFilePpvListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetFilePpvListResponse';
	}
	
	/**
	 * A list of asset files ppvs
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of asset files ppvs
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetFilePpvListResponse = AssetFilePpvListResponse;

/**
 *
 */
class Price extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPrice';
	}
	
	/**
	 * Price
	 * @return float
	 */
	 getAmount() {
	 	return this.amount;
	 }
	
	/**
	 * @param amount float Price
	 */
	 setAmount(amount) {
	 	this.amount = amount;
	 }
	
	/**
	 * Currency
	 * @return string
	 */
	 getCurrency() {
	 	return this.currency;
	 }
	
	/**
	 * @param currency string Currency
	 */
	 setCurrency(currency) {
	 	this.currency = currency;
	 }
	
	/**
	 * Currency Sign
	 * @return string
	 */
	 getCurrencySign() {
	 	return this.currencySign;
	 }
	
	/**
	 * @param currencySign string Currency Sign
	 */
	 setCurrencySign(currencySign) {
	 	this.currencySign = currencySign;
	 }
	
	/**
	 * Country ID
	 * @return int
	 */
	 getCountryId() {
	 	return this.countryId;
	 }
	
	/**
	 * @param countryId int Country ID
	 */
	 setCountryId(countryId) {
	 	this.countryId = countryId;
	 }
}
module.exports.Price = Price;

/**
 *
 */
class PriceDetails extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPriceDetails';
	}
	
	/**
	 * The price code identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * The price code name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The price code name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The price
	 * @return Price
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * Multi currency prices for all countries and currencies
	 * @return array
	 */
	 getMultiCurrencyPrice() {
	 	return this.multiCurrencyPrice;
	 }
	
	/**
	 * @param multiCurrencyPrice array Multi currency prices for all countries and currencies
	 */
	 setMultiCurrencyPrice(multiCurrencyPrice) {
	 	this.multiCurrencyPrice = multiCurrencyPrice;
	 }
	
	/**
	 * A list of the descriptions for this price on different languages (language code and translation)
	 * @return array
	 */
	 getDescriptions() {
	 	return this.descriptions;
	 }
	
	/**
	 * @param descriptions array A list of the descriptions for this price on different languages (language code and translation)
	 */
	 setDescriptions(descriptions) {
	 	this.descriptions = descriptions;
	 }
}
module.exports.PriceDetails = PriceDetails;

/**
 *
 */
class DiscountModule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDiscountModule';
	}
	
	/**
	 * The discount percentage
	 * @return float
	 */
	 getPercent() {
	 	return this.percent;
	 }
	
	/**
	 * @param percent float The discount percentage
	 */
	 setPercent(percent) {
	 	this.percent = percent;
	 }
	
	/**
	 * The first date the discount is available
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int The first date the discount is available
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * The last date the discount is available
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int The last date the discount is available
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
}
module.exports.DiscountModule = DiscountModule;

/**
 *
 */
class CouponsGroup extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCouponsGroup';
	}
	
	/**
	 * Coupon group identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Coupon group name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Coupon group name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The first date the coupons in this coupons group are valid
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int The first date the coupons in this coupons group are valid
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * The last date the coupons in this coupons group are valid
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int The last date the coupons in this coupons group are valid
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * Maximum number of uses for each coupon in the group
	 * @return int
	 */
	 getMaxUsesNumber() {
	 	return this.maxUsesNumber;
	 }
	
	/**
	 * @param maxUsesNumber int Maximum number of uses for each coupon in the group
	 */
	 setMaxUsesNumber(maxUsesNumber) {
	 	this.maxUsesNumber = maxUsesNumber;
	 }
	
	/**
	 * Maximum number of uses for each coupon in the group on a renewable subscription
	 * @return int
	 */
	 getMaxUsesNumberOnRenewableSub() {
	 	return this.maxUsesNumberOnRenewableSub;
	 }
	
	/**
	 * @param maxUsesNumberOnRenewableSub int Maximum number of uses for each coupon in the group on a renewable subscription
	 */
	 setMaxUsesNumberOnRenewableSub(maxUsesNumberOnRenewableSub) {
	 	this.maxUsesNumberOnRenewableSub = maxUsesNumberOnRenewableSub;
	 }
	
	/**
	 * Type of the coupon group
	 * @return string
	 */
	 getCouponGroupType() {
	 	return this.couponGroupType;
	 }
	
	/**
	 * @param couponGroupType string Type of the coupon group
	 */
	 setCouponGroupType(couponGroupType) {
	 	this.couponGroupType = couponGroupType;
	 }
	
	/**
	 * Maximum number of uses per household for each coupon in the group
	 * @return int
	 */
	 getMaxHouseholdUses() {
	 	return this.maxHouseholdUses;
	 }
	
	/**
	 * @param maxHouseholdUses int Maximum number of uses per household for each coupon in the group
	 */
	 setMaxHouseholdUses(maxHouseholdUses) {
	 	this.maxHouseholdUses = maxHouseholdUses;
	 }
	
	/**
	 * Discount ID
	 * @return int
	 */
	 getDiscountId() {
	 	return this.discountId;
	 }
	
	/**
	 * @param discountId int Discount ID
	 */
	 setDiscountId(discountId) {
	 	this.discountId = discountId;
	 }
}
module.exports.CouponsGroup = CouponsGroup;

/**
 *
 */
class UsageModule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUsageModule';
	}
	
	/**
	 * Usage module identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Usage module name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * The maximum number of times an item in this usage module can be viewed
	 * @return int
	 */
	 getMaxViewsNumber() {
	 	return this.maxViewsNumber;
	 }
	
	/**
	 * The amount time an item is available for viewing since a user started watching the item
	 * @return int
	 */
	 getViewLifeCycle() {
	 	return this.viewLifeCycle;
	 }
	
	/**
	 * The amount time an item is available for viewing
	 * @return int
	 */
	 getFullLifeCycle() {
	 	return this.fullLifeCycle;
	 }
	
	/**
	 * Identifies a specific coupon linked to this object
	 * @return int
	 */
	 getCouponId() {
	 	return this.couponId;
	 }
	
	/**
	 * Time period during which the end user can waive his rights to cancel a purchase. When the time period is passed, the purchase can no longer be cancelled
	 * @return int
	 */
	 getWaiverPeriod() {
	 	return this.waiverPeriod;
	 }
	
	/**
	 * Indicates whether or not the end user has the right to waive his rights to cancel a purchase
	 * @return bool
	 */
	 getIsWaiverEnabled() {
	 	return this.isWaiverEnabled;
	 }
	
	/**
	 * Indicates that usage is targeted for offline playback
	 * @return bool
	 */
	 getIsOfflinePlayback() {
	 	return this.isOfflinePlayback;
	 }
}
module.exports.UsageModule = UsageModule;

/**
 *
 */
class Ppv extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPpv';
	}
	
	/**
	 * PPV identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string PPV identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * the name for the ppv
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string the name for the ppv
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The price of the ppv
	 * @return PriceDetails
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price PriceDetails The price of the ppv
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * A list of file types identifiers that are supported in this ppv
	 * @return array
	 */
	 getFileTypes() {
	 	return this.fileTypes;
	 }
	
	/**
	 * @param fileTypes array A list of file types identifiers that are supported in this ppv
	 */
	 setFileTypes(fileTypes) {
	 	this.fileTypes = fileTypes;
	 }
	
	/**
	 * The internal discount module for the ppv
	 * @return DiscountModule
	 */
	 getDiscountModule() {
	 	return this.discountModule;
	 }
	
	/**
	 * @param discountModule DiscountModule The internal discount module for the ppv
	 */
	 setDiscountModule(discountModule) {
	 	this.discountModule = discountModule;
	 }
	
	/**
	 * Coupons group for the ppv
	 * @return CouponsGroup
	 */
	 getCouponsGroup() {
	 	return this.couponsGroup;
	 }
	
	/**
	 * @param couponsGroup CouponsGroup Coupons group for the ppv
	 */
	 setCouponsGroup(couponsGroup) {
	 	this.couponsGroup = couponsGroup;
	 }
	
	/**
	 * A list of the descriptions of the ppv on different languages (language code and translation)
	 * @return array
	 */
	 getDescriptions() {
	 	return this.descriptions;
	 }
	
	/**
	 * @param descriptions array A list of the descriptions of the ppv on different languages (language code and translation)
	 */
	 setDescriptions(descriptions) {
	 	this.descriptions = descriptions;
	 }
	
	/**
	 * Product code for the ppv
	 * @return string
	 */
	 getProductCode() {
	 	return this.productCode;
	 }
	
	/**
	 * @param productCode string Product code for the ppv
	 */
	 setProductCode(productCode) {
	 	this.productCode = productCode;
	 }
	
	/**
	 * Indicates whether or not this ppv can be purchased standalone or only as part of a subscription
	 * @return bool
	 */
	 getIsSubscriptionOnly() {
	 	return this.isSubscriptionOnly;
	 }
	
	/**
	 * @param isSubscriptionOnly bool Indicates whether or not this ppv can be purchased standalone or only as part of a subscription
	 */
	 setIsSubscriptionOnly(isSubscriptionOnly) {
	 	this.isSubscriptionOnly = isSubscriptionOnly;
	 }
	
	/**
	 * Indicates whether or not this ppv can be consumed only on the first device
	 * @return bool
	 */
	 getFirstDeviceLimitation() {
	 	return this.firstDeviceLimitation;
	 }
	
	/**
	 * @param firstDeviceLimitation bool Indicates whether or not this ppv can be consumed only on the first device
	 */
	 setFirstDeviceLimitation(firstDeviceLimitation) {
	 	this.firstDeviceLimitation = firstDeviceLimitation;
	 }
	
	/**
	 * PPV usage module
	 * @return UsageModule
	 */
	 getUsageModule() {
	 	return this.usageModule;
	 }
	
	/**
	 * @param usageModule UsageModule PPV usage module
	 */
	 setUsageModule(usageModule) {
	 	this.usageModule = usageModule;
	 }
}
module.exports.Ppv = Ppv;

/**
 *
 */
class PpvListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPpvListResponse';
	}
	
	/**
	 * A list of PPV
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of PPV
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PpvListResponse = PpvListResponse;

/**
 *
 */
class Discount extends Price{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDiscount';
	}
	
	/**
	 * The discount percentage
	 * @return int
	 */
	 getPercentage() {
	 	return this.percentage;
	 }
}
module.exports.Discount = Discount;

/**
 *
 */
class PricePlan extends UsageModule{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPricePlan';
	}
	
	/**
	 * Denotes whether or not this object can be renewed
	 * @return bool
	 */
	 getIsRenewable() {
	 	return this.isRenewable;
	 }
	
	/**
	 * Defines the number of times the module will be renewed (for the life_cycle period)
	 * @return int
	 */
	 getRenewalsNumber() {
	 	return this.renewalsNumber;
	 }
	
	/**
	 * The discount module identifier of the price plan
	 * @return int
	 */
	 getDiscountId() {
	 	return this.discountId;
	 }
	
	/**
	 * The ID of the price details associated with this price plan
	 * @return int
	 */
	 getPriceDetailsId() {
	 	return this.priceDetailsId;
	 }
	
	/**
	 * @param priceDetailsId int The ID of the price details associated with this price plan
	 */
	 setPriceDetailsId(priceDetailsId) {
	 	this.priceDetailsId = priceDetailsId;
	 }
}
module.exports.PricePlan = PricePlan;

/**
 *
 */
class BaseChannel extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseChannel';
	}
	
	/**
	 * Unique identifier for the channel
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
}
module.exports.BaseChannel = BaseChannel;

/**
 *
 */
class ProductCode extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProductCode';
	}
	
	/**
	 * Provider Name
	 * @return string
	 */
	 getInappProvider() {
	 	return this.inappProvider;
	 }
	
	/**
	 * @param inappProvider string Provider Name
	 */
	 setInappProvider(inappProvider) {
	 	this.inappProvider = inappProvider;
	 }
	
	/**
	 * Product Code
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string Product Code
	 */
	 setCode(code) {
	 	this.code = code;
	 }
}
module.exports.ProductCode = ProductCode;

/**
 *
 */
class Collection extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCollection';
	}
	
	/**
	 * Collection identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Collection identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * A list of channels associated with this collection
	 * @return array
	 */
	 getChannels() {
	 	return this.channels;
	 }
	
	/**
	 * @param channels array A list of channels associated with this collection
	 */
	 setChannels(channels) {
	 	this.channels = channels;
	 }
	
	/**
	 * The first date the collection is available for purchasing
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int The first date the collection is available for purchasing
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * The last date the collection is available for purchasing
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int The last date the collection is available for purchasing
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * The internal discount module for the subscription
	 * @return DiscountModule
	 */
	 getDiscountModule() {
	 	return this.discountModule;
	 }
	
	/**
	 * @param discountModule DiscountModule The internal discount module for the subscription
	 */
	 setDiscountModule(discountModule) {
	 	this.discountModule = discountModule;
	 }
	
	/**
	 * Name of the subscription
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * Name of the subscription
	 * @return array
	 */
	 getMultilingualName() {
	 	return this.multilingualName;
	 }
	
	/**
	 * @param multilingualName array Name of the subscription
	 */
	 setMultilingualName(multilingualName) {
	 	this.multilingualName = multilingualName;
	 }
	
	/**
	 * description of the subscription
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * description of the subscription
	 * @return array
	 */
	 getMultilingualDescription() {
	 	return this.multilingualDescription;
	 }
	
	/**
	 * @param multilingualDescription array description of the subscription
	 */
	 setMultilingualDescription(multilingualDescription) {
	 	this.multilingualDescription = multilingualDescription;
	 }
	
	/**
	 * Collection usage module
	 * @return UsageModule
	 */
	 getUsageModule() {
	 	return this.usageModule;
	 }
	
	/**
	 * @param usageModule UsageModule Collection usage module
	 */
	 setUsageModule(usageModule) {
	 	this.usageModule = usageModule;
	 }
	
	/**
	 * List of Coupons group
	 * @return array
	 */
	 getCouponsGroups() {
	 	return this.couponsGroups;
	 }
	
	/**
	 * @param couponsGroups array List of Coupons group
	 */
	 setCouponsGroups(couponsGroups) {
	 	this.couponsGroups = couponsGroups;
	 }
	
	/**
	 * External ID
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External ID
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * List of Collection product codes
	 * @return array
	 */
	 getProductCodes() {
	 	return this.productCodes;
	 }
	
	/**
	 * @param productCodes array List of Collection product codes
	 */
	 setProductCodes(productCodes) {
	 	this.productCodes = productCodes;
	 }
	
	/**
	 * The ID of the price details associated with this collection
	 * @return int
	 */
	 getPriceDetailsId() {
	 	return this.priceDetailsId;
	 }
	
	/**
	 * @param priceDetailsId int The ID of the price details associated with this collection
	 */
	 setPriceDetailsId(priceDetailsId) {
	 	this.priceDetailsId = priceDetailsId;
	 }
}
module.exports.Collection = Collection;

/**
 *
 */
class CollectionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCollectionListResponse';
	}
	
	/**
	 * A list of collections
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of collections
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.CollectionListResponse = CollectionListResponse;

/**
 *
 */
class AssetGroupBy extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetGroupBy';
	}
}
module.exports.AssetGroupBy = AssetGroupBy;

/**
 *
 */
class DynamicOrderBy extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDynamicOrderBy';
	}
	
	/**
	 * order by name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string order by name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * order by meta asc/desc
	 * @return string
	 */
	 getOrderBy() {
	 	return this.orderBy;
	 }
	
	/**
	 * @param orderBy string order by meta asc/desc
	 */
	 setOrderBy(orderBy) {
	 	this.orderBy = orderBy;
	 }
}
module.exports.DynamicOrderBy = DynamicOrderBy;

/**
 *
 */
class ChannelOrder extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannelOrder';
	}
	
	/**
	 * Channel dynamic order by (meta)
	 * @return DynamicOrderBy
	 */
	 getDynamicOrderBy() {
	 	return this.dynamicOrderBy;
	 }
	
	/**
	 * @param dynamicOrderBy DynamicOrderBy Channel dynamic order by (meta)
	 */
	 setDynamicOrderBy(dynamicOrderBy) {
	 	this.dynamicOrderBy = dynamicOrderBy;
	 }
	
	/**
	 * Channel order by
	 * @return string
	 */
	 getOrderBy() {
	 	return this.orderBy;
	 }
	
	/**
	 * @param orderBy string Channel order by
	 */
	 setOrderBy(orderBy) {
	 	this.orderBy = orderBy;
	 }
	
	/**
	 * Sliding window period in minutes, used only when ordering by LIKES_DESC / VOTES_DESC / RATINGS_DESC / VIEWS_DESC
	 * @return int
	 */
	 getPeriod() {
	 	return this.period;
	 }
	
	/**
	 * @param period int Sliding window period in minutes, used only when ordering by LIKES_DESC / VOTES_DESC / RATINGS_DESC / VIEWS_DESC
	 */
	 setPeriod(period) {
	 	this.period = period;
	 }
}
module.exports.ChannelOrder = ChannelOrder;

/**
 *
 */
class Channel extends BaseChannel{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannel';
	}
	
	/**
	 * Channel name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * Channel name
	 * @return array
	 */
	 getMultilingualName() {
	 	return this.multilingualName;
	 }
	
	/**
	 * @param multilingualName array Channel name
	 */
	 setMultilingualName(multilingualName) {
	 	this.multilingualName = multilingualName;
	 }
	
	/**
	 * Channel name
	 * @return string
	 */
	 getOldName() {
	 	return this.oldName;
	 }
	
	/**
	 * @param oldName string Channel name
	 */
	 setOldName(oldName) {
	 	this.oldName = oldName;
	 }
	
	/**
	 * Channel system name
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string Channel system name
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * Cannel description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * Cannel description
	 * @return array
	 */
	 getMultilingualDescription() {
	 	return this.multilingualDescription;
	 }
	
	/**
	 * @param multilingualDescription array Cannel description
	 */
	 setMultilingualDescription(multilingualDescription) {
	 	this.multilingualDescription = multilingualDescription;
	 }
	
	/**
	 * Cannel description
	 * @return string
	 */
	 getOldDescription() {
	 	return this.oldDescription;
	 }
	
	/**
	 * @param oldDescription string Cannel description
	 */
	 setOldDescription(oldDescription) {
	 	this.oldDescription = oldDescription;
	 }
	
	/**
	 * active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * Channel order by
	 * @return ChannelOrder
	 */
	 getOrderBy() {
	 	return this.orderBy;
	 }
	
	/**
	 * @param orderBy ChannelOrder Channel order by
	 */
	 setOrderBy(orderBy) {
	 	this.orderBy = orderBy;
	 }
	
	/**
	 * Specifies when was the Channel was created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the Channel last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
	
	/**
	 * Specifies whether the assets in this channel will be ordered based on their match to the user&#39;s segments (see BEO-5524)
	 * @return bool
	 */
	 getSupportSegmentBasedOrdering() {
	 	return this.supportSegmentBasedOrdering;
	 }
	
	/**
	 * @param supportSegmentBasedOrdering bool Specifies whether the assets in this channel will be ordered based on their match to the user&#39;s segments (see BEO-5524)
	 */
	 setSupportSegmentBasedOrdering(supportSegmentBasedOrdering) {
	 	this.supportSegmentBasedOrdering = supportSegmentBasedOrdering;
	 }
}
module.exports.Channel = Channel;

/**
 *
 */
class DynamicChannel extends Channel{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDynamicChannel';
	}
	
	/**
	 * Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restriced to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * user_interests - only valid value is &quot;true&quot;. When enabled, only assets that the user defined as his interests (by tags and metas) will return.
 * epg_channel_id – the channel identifier of the EPG program. *****Deprecated, please use linear_media_id instead*****
 * linear_media_id – the linear media identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in).
 * For alpha-numerical fields =, != (not), ~ (like), !~, ^ (any word starts with), ^= (phrase starts with), + (exists), !+ (not exists).
 * Logical conjunction: and, or.
 * Search values are limited to 20 characters each.
 * (maximum length of entire filter is 4096 characters)
	 * @return string
	 */
	 getKSql() {
	 	return this.kSql;
	 }
	
	/**
	 * @param kSql string Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restriced to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * user_interests - only valid value is &quot;true&quot;. When enabled, only assets that the user defined as his interests (by tags and metas) will return.
 * epg_channel_id – the channel identifier of the EPG program. *****Deprecated, please use linear_media_id instead*****
 * linear_media_id – the linear media identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in).
 * For alpha-numerical fields =, != (not), ~ (like), !~, ^ (any word starts with), ^= (phrase starts with), + (exists), !+ (not exists).
 * Logical conjunction: and, or.
 * Search values are limited to 20 characters each.
 * (maximum length of entire filter is 4096 characters)
	 */
	 setKSql(kSql) {
	 	this.kSql = kSql;
	 }
	
	/**
	 * Asset types in the channel.
 * -26 is EPG
	 * @return array
	 */
	 getAssetTypes() {
	 	return this.assetTypes;
	 }
	
	/**
	 * @param assetTypes array Asset types in the channel.
 * -26 is EPG
	 */
	 setAssetTypes(assetTypes) {
	 	this.assetTypes = assetTypes;
	 }
	
	/**
	 * Channel group by
	 * @return AssetGroupBy
	 */
	 getGroupBy() {
	 	return this.groupBy;
	 }
	
	/**
	 * @param groupBy AssetGroupBy Channel group by
	 */
	 setGroupBy(groupBy) {
	 	this.groupBy = groupBy;
	 }
}
module.exports.DynamicChannel = DynamicChannel;

/**
 *
 */
class ManualChannel extends Channel{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaManualChannel';
	}
	
	/**
	 * A list of comma separated media ids associated with this channel, according to the order of the medias in the channel
	 * @return string
	 */
	 getMediaIds() {
	 	return this.mediaIds;
	 }
	
	/**
	 * @param mediaIds string A list of comma separated media ids associated with this channel, according to the order of the medias in the channel
	 */
	 setMediaIds(mediaIds) {
	 	this.mediaIds = mediaIds;
	 }
}
module.exports.ManualChannel = ManualChannel;

/**
 *
 */
class AssetMetaOrTagGroupBy extends AssetGroupBy{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetMetaOrTagGroupBy';
	}
	
	/**
	 * Group by a tag or meta - according to the name that appears in the system (similar to KSQL)
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Group by a tag or meta - according to the name that appears in the system (similar to KSQL)
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.AssetMetaOrTagGroupBy = AssetMetaOrTagGroupBy;

/**
 *
 */
class AssetFieldGroupBy extends AssetGroupBy{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetFieldGroupBy';
	}
	
	/**
	 * Group by a specific field that is defined in enum
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Group by a specific field that is defined in enum
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.AssetFieldGroupBy = AssetFieldGroupBy;

/**
 *
 */
class DiscountDetails extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDiscountDetails';
	}
	
	/**
	 * The discount ID
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * The price code name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The price code name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Multi currency discounts for all countries and currencies
	 * @return array
	 */
	 getMultiCurrencyDiscount() {
	 	return this.multiCurrencyDiscount;
	 }
	
	/**
	 * @param multiCurrencyDiscount array Multi currency discounts for all countries and currencies
	 */
	 setMultiCurrencyDiscount(multiCurrencyDiscount) {
	 	this.multiCurrencyDiscount = multiCurrencyDiscount;
	 }
	
	/**
	 * Start date represented as epoch
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int Start date represented as epoch
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * End date represented as epoch
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int End date represented as epoch
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
}
module.exports.DiscountDetails = DiscountDetails;

/**
 *
 */
class DiscountDetailsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDiscountDetailsListResponse';
	}
	
	/**
	 * A list of price details
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of price details
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.DiscountDetailsListResponse = DiscountDetailsListResponse;

/**
 *
 */
class SubscriptionSet extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionSet';
	}
	
	/**
	 * SubscriptionSet identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * SubscriptionSet name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string SubscriptionSet name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Type of the Subscription Set
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * A list of comma separated subscription ids associated with this set ordered by priority ascending
	 * @return string
	 */
	 getSubscriptionIds() {
	 	return this.subscriptionIds;
	 }
	
	/**
	 * @param subscriptionIds string A list of comma separated subscription ids associated with this set ordered by priority ascending
	 */
	 setSubscriptionIds(subscriptionIds) {
	 	this.subscriptionIds = subscriptionIds;
	 }
}
module.exports.SubscriptionSet = SubscriptionSet;

/**
 *
 */
class SubscriptionSetListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionSetListResponse';
	}
	
	/**
	 * A list of subscriptionSets
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of subscriptionSets
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SubscriptionSetListResponse = SubscriptionSetListResponse;

/**
 *
 */
class SubscriptionDependencySet extends SubscriptionSet{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionDependencySet';
	}
	
	/**
	 * Base Subscription identifier
	 * @return int
	 */
	 getBaseSubscriptionId() {
	 	return this.baseSubscriptionId;
	 }
	
	/**
	 * @param baseSubscriptionId int Base Subscription identifier
	 */
	 setBaseSubscriptionId(baseSubscriptionId) {
	 	this.baseSubscriptionId = baseSubscriptionId;
	 }
}
module.exports.SubscriptionDependencySet = SubscriptionDependencySet;

/**
 *
 */
class SubscriptionSwitchSet extends SubscriptionSet{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionSwitchSet';
	}
}
module.exports.SubscriptionSwitchSet = SubscriptionSwitchSet;

/**
 *
 */
class ProductPrice extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProductPrice';
	}
	
	/**
	 * Product identifier
	 * @return string
	 */
	 getProductId() {
	 	return this.productId;
	 }
	
	/**
	 * @param productId string Product identifier
	 */
	 setProductId(productId) {
	 	this.productId = productId;
	 }
	
	/**
	 * Product Type
	 * @return string
	 */
	 getProductType() {
	 	return this.productType;
	 }
	
	/**
	 * @param productType string Product Type
	 */
	 setProductType(productType) {
	 	this.productType = productType;
	 }
	
	/**
	 * Product price
	 * @return Price
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price Price Product price
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * Product purchase status
	 * @return string
	 */
	 getPurchaseStatus() {
	 	return this.purchaseStatus;
	 }
	
	/**
	 * @param purchaseStatus string Product purchase status
	 */
	 setPurchaseStatus(purchaseStatus) {
	 	this.purchaseStatus = purchaseStatus;
	 }
}
module.exports.ProductPrice = ProductPrice;

/**
 *
 */
class ProductPriceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProductPriceListResponse';
	}
	
	/**
	 * A list of prices
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of prices
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ProductPriceListResponse = ProductPriceListResponse;

/**
 *
 */
class CollectionPrice extends ProductPrice{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCollectionPrice';
	}
}
module.exports.CollectionPrice = CollectionPrice;

/**
 *
 */
class PpvPrice extends ProductPrice{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPpvPrice';
	}
	
	/**
	 * Media file identifier
	 * @return int
	 */
	 getFileId() {
	 	return this.fileId;
	 }
	
	/**
	 * @param fileId int Media file identifier
	 */
	 setFileId(fileId) {
	 	this.fileId = fileId;
	 }
	
	/**
	 * The associated PPV module identifier
	 * @return string
	 */
	 getPpvModuleId() {
	 	return this.ppvModuleId;
	 }
	
	/**
	 * @param ppvModuleId string The associated PPV module identifier
	 */
	 setPpvModuleId(ppvModuleId) {
	 	this.ppvModuleId = ppvModuleId;
	 }
	
	/**
	 * Denotes whether this object is available only as part of a subscription or can be sold separately
	 * @return bool
	 */
	 getIsSubscriptionOnly() {
	 	return this.isSubscriptionOnly;
	 }
	
	/**
	 * @param isSubscriptionOnly bool Denotes whether this object is available only as part of a subscription or can be sold separately
	 */
	 setIsSubscriptionOnly(isSubscriptionOnly) {
	 	this.isSubscriptionOnly = isSubscriptionOnly;
	 }
	
	/**
	 * The full price of the item (with no discounts)
	 * @return Price
	 */
	 getFullPrice() {
	 	return this.fullPrice;
	 }
	
	/**
	 * @param fullPrice Price The full price of the item (with no discounts)
	 */
	 setFullPrice(fullPrice) {
	 	this.fullPrice = fullPrice;
	 }
	
	/**
	 * The identifier of the relevant subscription
	 * @return string
	 */
	 getSubscriptionId() {
	 	return this.subscriptionId;
	 }
	
	/**
	 * @param subscriptionId string The identifier of the relevant subscription
	 */
	 setSubscriptionId(subscriptionId) {
	 	this.subscriptionId = subscriptionId;
	 }
	
	/**
	 * The identifier of the relevant collection
	 * @return string
	 */
	 getCollectionId() {
	 	return this.collectionId;
	 }
	
	/**
	 * @param collectionId string The identifier of the relevant collection
	 */
	 setCollectionId(collectionId) {
	 	this.collectionId = collectionId;
	 }
	
	/**
	 * The identifier of the relevant pre paid
	 * @return string
	 */
	 getPrePaidId() {
	 	return this.prePaidId;
	 }
	
	/**
	 * @param prePaidId string The identifier of the relevant pre paid
	 */
	 setPrePaidId(prePaidId) {
	 	this.prePaidId = prePaidId;
	 }
	
	/**
	 * A list of the descriptions of the PPV module on different languages (language code and translation)
	 * @return array
	 */
	 getPpvDescriptions() {
	 	return this.ppvDescriptions;
	 }
	
	/**
	 * @param ppvDescriptions array A list of the descriptions of the PPV module on different languages (language code and translation)
	 */
	 setPpvDescriptions(ppvDescriptions) {
	 	this.ppvDescriptions = ppvDescriptions;
	 }
	
	/**
	 * If the item already purchased - the identifier of the user (in the household) who purchased this item
	 * @return string
	 */
	 getPurchaseUserId() {
	 	return this.purchaseUserId;
	 }
	
	/**
	 * @param purchaseUserId string If the item already purchased - the identifier of the user (in the household) who purchased this item
	 */
	 setPurchaseUserId(purchaseUserId) {
	 	this.purchaseUserId = purchaseUserId;
	 }
	
	/**
	 * If the item already purchased - the identifier of the purchased file
	 * @return int
	 */
	 getPurchasedMediaFileId() {
	 	return this.purchasedMediaFileId;
	 }
	
	/**
	 * @param purchasedMediaFileId int If the item already purchased - the identifier of the purchased file
	 */
	 setPurchasedMediaFileId(purchasedMediaFileId) {
	 	this.purchasedMediaFileId = purchasedMediaFileId;
	 }
	
	/**
	 * Related media files identifiers (different types)
	 * @return array
	 */
	 getRelatedMediaFileIds() {
	 	return this.relatedMediaFileIds;
	 }
	
	/**
	 * @param relatedMediaFileIds array Related media files identifiers (different types)
	 */
	 setRelatedMediaFileIds(relatedMediaFileIds) {
	 	this.relatedMediaFileIds = relatedMediaFileIds;
	 }
	
	/**
	 * If the item already purchased - since when the user can start watching the item
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int If the item already purchased - since when the user can start watching the item
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * If the item already purchased - until when the user can watch the item
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int If the item already purchased - until when the user can watch the item
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * Discount end date
	 * @return int
	 */
	 getDiscountEndDate() {
	 	return this.discountEndDate;
	 }
	
	/**
	 * @param discountEndDate int Discount end date
	 */
	 setDiscountEndDate(discountEndDate) {
	 	this.discountEndDate = discountEndDate;
	 }
	
	/**
	 * If the item already purchased and played - the name of the device on which it was first played
	 * @return string
	 */
	 getFirstDeviceName() {
	 	return this.firstDeviceName;
	 }
	
	/**
	 * @param firstDeviceName string If the item already purchased and played - the name of the device on which it was first played
	 */
	 setFirstDeviceName(firstDeviceName) {
	 	this.firstDeviceName = firstDeviceName;
	 }
	
	/**
	 * If waiver period is enabled - donates whether the user is still in the cancelation window
	 * @return bool
	 */
	 getIsInCancelationPeriod() {
	 	return this.isInCancelationPeriod;
	 }
	
	/**
	 * @param isInCancelationPeriod bool If waiver period is enabled - donates whether the user is still in the cancelation window
	 */
	 setIsInCancelationPeriod(isInCancelationPeriod) {
	 	this.isInCancelationPeriod = isInCancelationPeriod;
	 }
	
	/**
	 * The PPV product code
	 * @return string
	 */
	 getPpvProductCode() {
	 	return this.ppvProductCode;
	 }
	
	/**
	 * @param ppvProductCode string The PPV product code
	 */
	 setPpvProductCode(ppvProductCode) {
	 	this.ppvProductCode = ppvProductCode;
	 }
}
module.exports.PpvPrice = PpvPrice;

/**
 *
 */
class SubscriptionPrice extends ProductPrice{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionPrice';
	}
	
	/**
	 * If the item related to unified billing cycle purchased - until when the this price is relevant
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int If the item related to unified billing cycle purchased - until when the this price is relevant
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
}
module.exports.SubscriptionPrice = SubscriptionPrice;

/**
 *
 */
class CouponsGroupListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCouponsGroupListResponse';
	}
	
	/**
	 * A list of coupons groups
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of coupons groups
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.CouponsGroupListResponse = CouponsGroupListResponse;

/**
 *
 */
class PriceDetailsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPriceDetailsListResponse';
	}
	
	/**
	 * A list of price details
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of price details
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PriceDetailsListResponse = PriceDetailsListResponse;

/**
 *
 */
class PricePlanListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPricePlanListResponse';
	}
	
	/**
	 * A list of price plans
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of price plans
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PricePlanListResponse = PricePlanListResponse;

/**
 *
 */
class PreviewModule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPreviewModule';
	}
	
	/**
	 * Preview module identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Preview module name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Preview module name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Preview module life cycle - for how long the preview module is active
	 * @return int
	 */
	 getLifeCycle() {
	 	return this.lifeCycle;
	 }
	
	/**
	 * @param lifeCycle int Preview module life cycle - for how long the preview module is active
	 */
	 setLifeCycle(lifeCycle) {
	 	this.lifeCycle = lifeCycle;
	 }
	
	/**
	 * The time you can&#39;t buy the item to which the preview module is assigned to again
	 * @return int
	 */
	 getNonRenewablePeriod() {
	 	return this.nonRenewablePeriod;
	 }
	
	/**
	 * @param nonRenewablePeriod int The time you can&#39;t buy the item to which the preview module is assigned to again
	 */
	 setNonRenewablePeriod(nonRenewablePeriod) {
	 	this.nonRenewablePeriod = nonRenewablePeriod;
	 }
}
module.exports.PreviewModule = PreviewModule;

/**
 *
 */
class PremiumService extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPremiumService';
	}
	
	/**
	 * Service identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Service name / description
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Service name / description
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.PremiumService = PremiumService;

/**
 *
 */
class Subscription extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscription';
	}
	
	/**
	 * Subscription identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Subscription identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * A list of channels associated with this subscription
	 * @return array
	 */
	 getChannels() {
	 	return this.channels;
	 }
	
	/**
	 * @param channels array A list of channels associated with this subscription
	 */
	 setChannels(channels) {
	 	this.channels = channels;
	 }
	
	/**
	 * The first date the subscription is available for purchasing
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int The first date the subscription is available for purchasing
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * The last date the subscription is available for purchasing
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int The last date the subscription is available for purchasing
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * A list of file types identifiers that are supported in this subscription
	 * @return array
	 */
	 getFileTypes() {
	 	return this.fileTypes;
	 }
	
	/**
	 * @param fileTypes array A list of file types identifiers that are supported in this subscription
	 */
	 setFileTypes(fileTypes) {
	 	this.fileTypes = fileTypes;
	 }
	
	/**
	 * Denotes whether or not this subscription can be renewed
	 * @return bool
	 */
	 getIsRenewable() {
	 	return this.isRenewable;
	 }
	
	/**
	 * @param isRenewable bool Denotes whether or not this subscription can be renewed
	 */
	 setIsRenewable(isRenewable) {
	 	this.isRenewable = isRenewable;
	 }
	
	/**
	 * Defines the number of times this subscription will be renewed
	 * @return int
	 */
	 getRenewalsNumber() {
	 	return this.renewalsNumber;
	 }
	
	/**
	 * @param renewalsNumber int Defines the number of times this subscription will be renewed
	 */
	 setRenewalsNumber(renewalsNumber) {
	 	this.renewalsNumber = renewalsNumber;
	 }
	
	/**
	 * Indicates whether the subscription will renew forever
	 * @return bool
	 */
	 getIsInfiniteRenewal() {
	 	return this.isInfiniteRenewal;
	 }
	
	/**
	 * @param isInfiniteRenewal bool Indicates whether the subscription will renew forever
	 */
	 setIsInfiniteRenewal(isInfiniteRenewal) {
	 	this.isInfiniteRenewal = isInfiniteRenewal;
	 }
	
	/**
	 * The price of the subscription
	 * @return PriceDetails
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price PriceDetails The price of the subscription
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * The internal discount module for the subscription
	 * @return DiscountModule
	 */
	 getDiscountModule() {
	 	return this.discountModule;
	 }
	
	/**
	 * @param discountModule DiscountModule The internal discount module for the subscription
	 */
	 setDiscountModule(discountModule) {
	 	this.discountModule = discountModule;
	 }
	
	/**
	 * Name of the subscription
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * Name of the subscription
	 * @return array
	 */
	 getMultilingualName() {
	 	return this.multilingualName;
	 }
	
	/**
	 * @param multilingualName array Name of the subscription
	 */
	 setMultilingualName(multilingualName) {
	 	this.multilingualName = multilingualName;
	 }
	
	/**
	 * description of the subscription
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * description of the subscription
	 * @return array
	 */
	 getMultilingualDescription() {
	 	return this.multilingualDescription;
	 }
	
	/**
	 * @param multilingualDescription array description of the subscription
	 */
	 setMultilingualDescription(multilingualDescription) {
	 	this.multilingualDescription = multilingualDescription;
	 }
	
	/**
	 * Identifier of the media associated with the subscription
	 * @return int
	 */
	 getMediaId() {
	 	return this.mediaId;
	 }
	
	/**
	 * @param mediaId int Identifier of the media associated with the subscription
	 */
	 setMediaId(mediaId) {
	 	this.mediaId = mediaId;
	 }
	
	/**
	 * Subscription order (when returned in methods that retrieve subscriptions)
	 * @return int
	 */
	 getProrityInOrder() {
	 	return this.prorityInOrder;
	 }
	
	/**
	 * @param prorityInOrder int Subscription order (when returned in methods that retrieve subscriptions)
	 */
	 setProrityInOrder(prorityInOrder) {
	 	this.prorityInOrder = prorityInOrder;
	 }
	
	/**
	 * Comma separated subscription price plan IDs
	 * @return string
	 */
	 getPricePlanIds() {
	 	return this.pricePlanIds;
	 }
	
	/**
	 * @param pricePlanIds string Comma separated subscription price plan IDs
	 */
	 setPricePlanIds(pricePlanIds) {
	 	this.pricePlanIds = pricePlanIds;
	 }
	
	/**
	 * Subscription preview module
	 * @return PreviewModule
	 */
	 getPreviewModule() {
	 	return this.previewModule;
	 }
	
	/**
	 * @param previewModule PreviewModule Subscription preview module
	 */
	 setPreviewModule(previewModule) {
	 	this.previewModule = previewModule;
	 }
	
	/**
	 * The household limitation module identifier associated with this subscription
	 * @return int
	 */
	 getHouseholdLimitationsId() {
	 	return this.householdLimitationsId;
	 }
	
	/**
	 * @param householdLimitationsId int The household limitation module identifier associated with this subscription
	 */
	 setHouseholdLimitationsId(householdLimitationsId) {
	 	this.householdLimitationsId = householdLimitationsId;
	 }
	
	/**
	 * The subscription grace period in minutes
	 * @return int
	 */
	 getGracePeriodMinutes() {
	 	return this.gracePeriodMinutes;
	 }
	
	/**
	 * @param gracePeriodMinutes int The subscription grace period in minutes
	 */
	 setGracePeriodMinutes(gracePeriodMinutes) {
	 	this.gracePeriodMinutes = gracePeriodMinutes;
	 }
	
	/**
	 * List of premium services included in the subscription
	 * @return array
	 */
	 getPremiumServices() {
	 	return this.premiumServices;
	 }
	
	/**
	 * @param premiumServices array List of premium services included in the subscription
	 */
	 setPremiumServices(premiumServices) {
	 	this.premiumServices = premiumServices;
	 }
	
	/**
	 * The maximum number of times an item in this usage module can be viewed
	 * @return int
	 */
	 getMaxViewsNumber() {
	 	return this.maxViewsNumber;
	 }
	
	/**
	 * @param maxViewsNumber int The maximum number of times an item in this usage module can be viewed
	 */
	 setMaxViewsNumber(maxViewsNumber) {
	 	this.maxViewsNumber = maxViewsNumber;
	 }
	
	/**
	 * The amount time an item is available for viewing since a user started watching the item
	 * @return int
	 */
	 getViewLifeCycle() {
	 	return this.viewLifeCycle;
	 }
	
	/**
	 * @param viewLifeCycle int The amount time an item is available for viewing since a user started watching the item
	 */
	 setViewLifeCycle(viewLifeCycle) {
	 	this.viewLifeCycle = viewLifeCycle;
	 }
	
	/**
	 * Time period during which the end user can waive his rights to cancel a purchase. When the time period is passed, the purchase can no longer be cancelled
	 * @return int
	 */
	 getWaiverPeriod() {
	 	return this.waiverPeriod;
	 }
	
	/**
	 * @param waiverPeriod int Time period during which the end user can waive his rights to cancel a purchase. When the time period is passed, the purchase can no longer be cancelled
	 */
	 setWaiverPeriod(waiverPeriod) {
	 	this.waiverPeriod = waiverPeriod;
	 }
	
	/**
	 * Indicates whether or not the end user has the right to waive his rights to cancel a purchase
	 * @return bool
	 */
	 getIsWaiverEnabled() {
	 	return this.isWaiverEnabled;
	 }
	
	/**
	 * @param isWaiverEnabled bool Indicates whether or not the end user has the right to waive his rights to cancel a purchase
	 */
	 setIsWaiverEnabled(isWaiverEnabled) {
	 	this.isWaiverEnabled = isWaiverEnabled;
	 }
	
	/**
	 * List of permitted user types for the subscription
	 * @return array
	 */
	 getUserTypes() {
	 	return this.userTypes;
	 }
	
	/**
	 * @param userTypes array List of permitted user types for the subscription
	 */
	 setUserTypes(userTypes) {
	 	this.userTypes = userTypes;
	 }
	
	/**
	 * List of Coupons group
	 * @return array
	 */
	 getCouponsGroups() {
	 	return this.couponsGroups;
	 }
	
	/**
	 * @param couponsGroups array List of Coupons group
	 */
	 setCouponsGroups(couponsGroups) {
	 	this.couponsGroups = couponsGroups;
	 }
	
	/**
	 * List of Subscription product codes
	 * @return array
	 */
	 getProductCodes() {
	 	return this.productCodes;
	 }
	
	/**
	 * @param productCodes array List of Subscription product codes
	 */
	 setProductCodes(productCodes) {
	 	this.productCodes = productCodes;
	 }
	
	/**
	 * Dependency Type
	 * @return string
	 */
	 getDependencyType() {
	 	return this.dependencyType;
	 }
	
	/**
	 * @param dependencyType string Dependency Type
	 */
	 setDependencyType(dependencyType) {
	 	this.dependencyType = dependencyType;
	 }
	
	/**
	 * External ID
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External ID
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Is cancellation blocked for the subscription
	 * @return bool
	 */
	 getIsCancellationBlocked() {
	 	return this.isCancellationBlocked;
	 }
	
	/**
	 * @param isCancellationBlocked bool Is cancellation blocked for the subscription
	 */
	 setIsCancellationBlocked(isCancellationBlocked) {
	 	this.isCancellationBlocked = isCancellationBlocked;
	 }
}
module.exports.Subscription = Subscription;

/**
 *
 */
class SubscriptionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionListResponse';
	}
	
	/**
	 * A list of subscriptions
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of subscriptions
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SubscriptionListResponse = SubscriptionListResponse;

/**
 *
 */
class NpvrPremiumService extends PremiumService{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaNpvrPremiumService';
	}
	
	/**
	 * Quota in minutes
	 * @return int
	 */
	 getQuotaInMinutes() {
	 	return this.quotaInMinutes;
	 }
}
module.exports.NpvrPremiumService = NpvrPremiumService;

/**
 *
 */
class HouseholdPremiumService extends PremiumService{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPremiumService';
	}
}
module.exports.HouseholdPremiumService = HouseholdPremiumService;

/**
 *
 */
class ProductsPriceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProductsPriceListResponse';
	}
	
	/**
	 * A list of prices
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of prices
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ProductsPriceListResponse = ProductsPriceListResponse;

/**
 *
 */
class SeriesRecording extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSeriesRecording';
	}
	
	/**
	 * Kaltura unique ID representing the series recording identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Kaltura EpgId
	 * @return int
	 */
	 getEpgId() {
	 	return this.epgId;
	 }
	
	/**
	 * @param epgId int Kaltura EpgId
	 */
	 setEpgId(epgId) {
	 	this.epgId = epgId;
	 }
	
	/**
	 * Kaltura ChannelId
	 * @return int
	 */
	 getChannelId() {
	 	return this.channelId;
	 }
	
	/**
	 * @param channelId int Kaltura ChannelId
	 */
	 setChannelId(channelId) {
	 	this.channelId = channelId;
	 }
	
	/**
	 * Kaltura SeriesId
	 * @return string
	 */
	 getSeriesId() {
	 	return this.seriesId;
	 }
	
	/**
	 * @param seriesId string Kaltura SeriesId
	 */
	 setSeriesId(seriesId) {
	 	this.seriesId = seriesId;
	 }
	
	/**
	 * Kaltura SeasonNumber
	 * @return int
	 */
	 getSeasonNumber() {
	 	return this.seasonNumber;
	 }
	
	/**
	 * @param seasonNumber int Kaltura SeasonNumber
	 */
	 setSeasonNumber(seasonNumber) {
	 	this.seasonNumber = seasonNumber;
	 }
	
	/**
	 * Recording Type: single/series/season
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Recording Type: single/series/season
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Specifies when was the series recording created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the series recording last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
	
	/**
	 * List of the season numbers to exclude
	 * @return array
	 */
	 getExcludedSeasons() {
	 	return this.excludedSeasons;
	 }
}
module.exports.SeriesRecording = SeriesRecording;

/**
 *
 */
class SeriesRecordingListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSeriesRecordingListResponse';
	}
	
	/**
	 * Series Recordings
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Series Recordings
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SeriesRecordingListResponse = SeriesRecordingListResponse;

/**
 *
 */
class HouseholdPremiumServiceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPremiumServiceListResponse';
	}
	
	/**
	 * A list of premium services
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of premium services
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.HouseholdPremiumServiceListResponse = HouseholdPremiumServiceListResponse;

/**
 *
 */
class CDVRAdapterProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCDVRAdapterProfile';
	}
	
	/**
	 * C-DVR adapter identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * C-DVR adapter name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string C-DVR adapter name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * C-DVR adapter active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool C-DVR adapter active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * C-DVR adapter adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string C-DVR adapter adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * C-DVR adapter extra parameters
	 * @return map
	 */
	 getSettings() {
	 	return this.settings;
	 }
	
	/**
	 * @param settings map C-DVR adapter extra parameters
	 */
	 setSettings(settings) {
	 	this.settings = settings;
	 }
	
	/**
	 * C-DVR adapter external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string C-DVR adapter external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * C-DVR shared secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
	
	/**
	 * Indicates whether the C-DVR adapter supports dynamic URLs
	 * @return bool
	 */
	 getDynamicLinksSupport() {
	 	return this.dynamicLinksSupport;
	 }
	
	/**
	 * @param dynamicLinksSupport bool Indicates whether the C-DVR adapter supports dynamic URLs
	 */
	 setDynamicLinksSupport(dynamicLinksSupport) {
	 	this.dynamicLinksSupport = dynamicLinksSupport;
	 }
}
module.exports.CDVRAdapterProfile = CDVRAdapterProfile;

/**
 *
 */
class CDVRAdapterProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCDVRAdapterProfileListResponse';
	}
	
	/**
	 * C-DVR adapter profiles
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array C-DVR adapter profiles
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.CDVRAdapterProfileListResponse = CDVRAdapterProfileListResponse;

/**
 *
 */
class Recording extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecording';
	}
	
	/**
	 * Kaltura unique ID representing the recording identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Recording state: scheduled/recording/recorded/canceled/failed/deleted
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Kaltura unique ID representing the program identifier
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int Kaltura unique ID representing the program identifier
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * Recording Type: single/season/series
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Recording Type: single/season/series
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Specifies until when the recording is available for viewing. Date and time represented as epoch
	 * @return int
	 */
	 getViewableUntilDate() {
	 	return this.viewableUntilDate;
	 }
	
	/**
	 * Specifies whether or not the recording is protected
	 * @return bool
	 */
	 getIsProtected() {
	 	return this.isProtected;
	 }
	
	/**
	 * @param isProtected bool Specifies whether or not the recording is protected
	 */
	 setIsProtected(isProtected) {
	 	this.isProtected = isProtected;
	 }
	
	/**
	 * Specifies when was the recording created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the recording last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
}
module.exports.Recording = Recording;

/**
 *
 */
class ExternalRecording extends Recording{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalRecording';
	}
	
	/**
	 * External identifier for the recording
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External identifier for the recording
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
}
module.exports.ExternalRecording = ExternalRecording;

/**
 *
 */
class RecordingListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecordingListResponse';
	}
	
	/**
	 * Recordings
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Recordings
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.RecordingListResponse = RecordingListResponse;

/**
 *
 */
class BillingTransaction extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBillingTransaction';
	}
	
	/**
	 * Reciept Code
	 * @return string
	 */
	 getRecieptCode() {
	 	return this.recieptCode;
	 }
	
	/**
	 * Purchased Item Name
	 * @return string
	 */
	 getPurchasedItemName() {
	 	return this.purchasedItemName;
	 }
	
	/**
	 * Purchased Item Code
	 * @return string
	 */
	 getPurchasedItemCode() {
	 	return this.purchasedItemCode;
	 }
	
	/**
	 * Item Type
	 * @return string
	 */
	 getItemType() {
	 	return this.itemType;
	 }
	
	/**
	 * Billing Action
	 * @return string
	 */
	 getBillingAction() {
	 	return this.billingAction;
	 }
	
	/**
	 * price
	 * @return Price
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * Action Date
	 * @return int
	 */
	 getActionDate() {
	 	return this.actionDate;
	 }
	
	/**
	 * Start Date
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * End Date
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * Payment Method
	 * @return string
	 */
	 getPaymentMethod() {
	 	return this.paymentMethod;
	 }
	
	/**
	 * Payment Method Extra Details
	 * @return string
	 */
	 getPaymentMethodExtraDetails() {
	 	return this.paymentMethodExtraDetails;
	 }
	
	/**
	 * Is Recurring
	 * @return bool
	 */
	 getIsRecurring() {
	 	return this.isRecurring;
	 }
	
	/**
	 * Billing Provider Ref
	 * @return int
	 */
	 getBillingProviderRef() {
	 	return this.billingProviderRef;
	 }
	
	/**
	 * Purchase ID
	 * @return int
	 */
	 getPurchaseId() {
	 	return this.purchaseId;
	 }
	
	/**
	 * Remarks
	 * @return string
	 */
	 getRemarks() {
	 	return this.remarks;
	 }
	
	/**
	 * Billing Price Info
	 * @return string
	 */
	 getBillingPriceType() {
	 	return this.billingPriceType;
	 }
}
module.exports.BillingTransaction = BillingTransaction;

/**
 *
 */
class BillingTransactionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBillingTransactionListResponse';
	}
	
	/**
	 * Transactions
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Transactions
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.BillingTransactionListResponse = BillingTransactionListResponse;

/**
 *
 */
class Entitlement extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntitlement';
	}
	
	/**
	 * Purchase identifier (for subscriptions and collections only)
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Product identifier
	 * @return string
	 */
	 getProductId() {
	 	return this.productId;
	 }
	
	/**
	 * The current number of uses
	 * @return int
	 */
	 getCurrentUses() {
	 	return this.currentUses;
	 }
	
	/**
	 * The end date of the entitlement
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * Current date
	 * @return int
	 */
	 getCurrentDate() {
	 	return this.currentDate;
	 }
	
	/**
	 * The last date the item was viewed
	 * @return int
	 */
	 getLastViewDate() {
	 	return this.lastViewDate;
	 }
	
	/**
	 * Purchase date
	 * @return int
	 */
	 getPurchaseDate() {
	 	return this.purchaseDate;
	 }
	
	/**
	 * Payment Method
	 * @return string
	 */
	 getPaymentMethod() {
	 	return this.paymentMethod;
	 }
	
	/**
	 * The UDID of the device from which the purchase was made
	 * @return string
	 */
	 getDeviceUdid() {
	 	return this.deviceUdid;
	 }
	
	/**
	 * The name of the device from which the purchase was made
	 * @return string
	 */
	 getDeviceName() {
	 	return this.deviceName;
	 }
	
	/**
	 * Indicates whether a cancelation window period is enabled
	 * @return bool
	 */
	 getIsCancelationWindowEnabled() {
	 	return this.isCancelationWindowEnabled;
	 }
	
	/**
	 * The maximum number of uses available for this item (only for subscription and PPV)
	 * @return int
	 */
	 getMaxUses() {
	 	return this.maxUses;
	 }
	
	/**
	 * The Identifier of the purchasing user
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * The Identifier of the purchasing household
	 * @return int
	 */
	 getHouseholdId() {
	 	return this.householdId;
	 }
}
module.exports.Entitlement = Entitlement;

/**
 *
 */
class EntitlementListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntitlementListResponse';
	}
	
	/**
	 * A list of entitlements
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of entitlements
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.EntitlementListResponse = EntitlementListResponse;

/**
 *
 */
class CollectionEntitlement extends Entitlement{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCollectionEntitlement';
	}
}
module.exports.CollectionEntitlement = CollectionEntitlement;

/**
 *
 */
class PpvEntitlement extends Entitlement{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPpvEntitlement';
	}
	
	/**
	 * Media file identifier
	 * @return int
	 */
	 getMediaFileId() {
	 	return this.mediaFileId;
	 }
	
	/**
	 * Media identifier
	 * @return int
	 */
	 getMediaId() {
	 	return this.mediaId;
	 }
}
module.exports.PpvEntitlement = PpvEntitlement;

/**
 *
 */
class SubscriptionEntitlement extends Entitlement{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionEntitlement';
	}
	
	/**
	 * The date of the next renewal (only for subscription)
	 * @return int
	 */
	 getNextRenewalDate() {
	 	return this.nextRenewalDate;
	 }
	
	/**
	 * Indicates whether the subscription is renewable in this purchase (only for subscription)
	 * @return bool
	 */
	 getIsRenewableForPurchase() {
	 	return this.isRenewableForPurchase;
	 }
	
	/**
	 * Indicates whether a subscription is renewable (only for subscription)
	 * @return bool
	 */
	 getIsRenewable() {
	 	return this.isRenewable;
	 }
	
	/**
	 * Indicates whether the user is currently in his grace period entitlement
	 * @return bool
	 */
	 getIsInGracePeriod() {
	 	return this.isInGracePeriod;
	 }
	
	/**
	 * Payment Gateway identifier
	 * @return int
	 */
	 getPaymentGatewayId() {
	 	return this.paymentGatewayId;
	 }
	
	/**
	 * @param paymentGatewayId int Payment Gateway identifier
	 */
	 setPaymentGatewayId(paymentGatewayId) {
	 	this.paymentGatewayId = paymentGatewayId;
	 }
	
	/**
	 * Payment Method identifier
	 * @return int
	 */
	 getPaymentMethodId() {
	 	return this.paymentMethodId;
	 }
	
	/**
	 * @param paymentMethodId int Payment Method identifier
	 */
	 setPaymentMethodId(paymentMethodId) {
	 	this.paymentMethodId = paymentMethodId;
	 }
	
	/**
	 * Scheduled Subscription Identifier
	 * @return int
	 */
	 getScheduledSubscriptionId() {
	 	return this.scheduledSubscriptionId;
	 }
	
	/**
	 * Unified payment identifier
	 * @return int
	 */
	 getUnifiedPaymentId() {
	 	return this.unifiedPaymentId;
	 }
	
	/**
	 * Indicates if the subscription suspended
	 * @return bool
	 */
	 getIsSuspended() {
	 	return this.isSuspended;
	 }
}
module.exports.SubscriptionEntitlement = SubscriptionEntitlement;

/**
 *
 */
class AssetStructMeta extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStructMeta';
	}
	
	/**
	 * Asset Struct id (template_id)
	 * @return int
	 */
	 getAssetStructId() {
	 	return this.assetStructId;
	 }
	
	/**
	 * Meta id (topic_id)
	 * @return int
	 */
	 getMetaId() {
	 	return this.metaId;
	 }
	
	/**
	 * IngestReferencePath
	 * @return string
	 */
	 getIngestReferencePath() {
	 	return this.ingestReferencePath;
	 }
	
	/**
	 * @param ingestReferencePath string IngestReferencePath
	 */
	 setIngestReferencePath(ingestReferencePath) {
	 	this.ingestReferencePath = ingestReferencePath;
	 }
	
	/**
	 * ProtectFromIngest
	 * @return bool
	 */
	 getProtectFromIngest() {
	 	return this.protectFromIngest;
	 }
	
	/**
	 * @param protectFromIngest bool ProtectFromIngest
	 */
	 setProtectFromIngest(protectFromIngest) {
	 	this.protectFromIngest = protectFromIngest;
	 }
	
	/**
	 * DefaultIngestValue
	 * @return string
	 */
	 getDefaultIngestValue() {
	 	return this.defaultIngestValue;
	 }
	
	/**
	 * @param defaultIngestValue string DefaultIngestValue
	 */
	 setDefaultIngestValue(defaultIngestValue) {
	 	this.defaultIngestValue = defaultIngestValue;
	 }
	
	/**
	 * Specifies when was the Asset Struct Meta was created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the Asset Struct Meta last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
	
	/**
	 * Is inherited
	 * @return bool
	 */
	 getIsInherited() {
	 	return this.isInherited;
	 }
	
	/**
	 * @param isInherited bool Is inherited
	 */
	 setIsInherited(isInherited) {
	 	this.isInherited = isInherited;
	 }
}
module.exports.AssetStructMeta = AssetStructMeta;

/**
 *
 */
class AssetStructMetaListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStructMetaListResponse';
	}
	
	/**
	 * A list of asset struct metas
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of asset struct metas
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetStructMetaListResponse = AssetStructMetaListResponse;

/**
 *
 */
class MediaFileType extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaFileType';
	}
	
	/**
	 * Unique identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Unique name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Unique name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Unique description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Unique description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Indicates if media-file type is active or disabled
	 * @return bool
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status bool Indicates if media-file type is active or disabled
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * Specifies when was the type was created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the type last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
	
	/**
	 * Specifies whether playback as trailer is allowed
	 * @return bool
	 */
	 getIsTrailer() {
	 	return this.isTrailer;
	 }
	
	/**
	 * @param isTrailer bool Specifies whether playback as trailer is allowed
	 */
	 setIsTrailer(isTrailer) {
	 	this.isTrailer = isTrailer;
	 }
	
	/**
	 * Defines playback streamer type
	 * @return string
	 */
	 getStreamerType() {
	 	return this.streamerType;
	 }
	
	/**
	 * @param streamerType string Defines playback streamer type
	 */
	 setStreamerType(streamerType) {
	 	this.streamerType = streamerType;
	 }
	
	/**
	 * DRM adapter-profile identifier, use -1 for uDRM, 0 for no DRM
	 * @return int
	 */
	 getDrmProfileId() {
	 	return this.drmProfileId;
	 }
	
	/**
	 * @param drmProfileId int DRM adapter-profile identifier, use -1 for uDRM, 0 for no DRM
	 */
	 setDrmProfileId(drmProfileId) {
	 	this.drmProfileId = drmProfileId;
	 }
	
	/**
	 * Media file type quality
	 * @return string
	 */
	 getQuality() {
	 	return this.quality;
	 }
	
	/**
	 * @param quality string Media file type quality
	 */
	 setQuality(quality) {
	 	this.quality = quality;
	 }
	
	/**
	 * List of comma separated video codecs
	 * @return string
	 */
	 getVideoCodecs() {
	 	return this.videoCodecs;
	 }
	
	/**
	 * @param videoCodecs string List of comma separated video codecs
	 */
	 setVideoCodecs(videoCodecs) {
	 	this.videoCodecs = videoCodecs;
	 }
	
	/**
	 * List of comma separated audio codecs
	 * @return string
	 */
	 getAudioCodecs() {
	 	return this.audioCodecs;
	 }
	
	/**
	 * @param audioCodecs string List of comma separated audio codecs
	 */
	 setAudioCodecs(audioCodecs) {
	 	this.audioCodecs = audioCodecs;
	 }
}
module.exports.MediaFileType = MediaFileType;

/**
 *
 */
class MediaFileTypeListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaFileTypeListResponse';
	}
	
	/**
	 * A list of media-file types
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of media-file types
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.MediaFileTypeListResponse = MediaFileTypeListResponse;

/**
 *
 */
class ChannelListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannelListResponse';
	}
	
	/**
	 * A list of channels
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of channels
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ChannelListResponse = ChannelListResponse;

/**
 *
 */
class Image extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaImage';
	}
	
	/**
	 * Image ID
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Image version
	 * @return string
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * Image type ID
	 * @return int
	 */
	 getImageTypeId() {
	 	return this.imageTypeId;
	 }
	
	/**
	 * @param imageTypeId int Image type ID
	 */
	 setImageTypeId(imageTypeId) {
	 	this.imageTypeId = imageTypeId;
	 }
	
	/**
	 * ID of the object the image is related to
	 * @return int
	 */
	 getImageObjectId() {
	 	return this.imageObjectId;
	 }
	
	/**
	 * @param imageObjectId int ID of the object the image is related to
	 */
	 setImageObjectId(imageObjectId) {
	 	this.imageObjectId = imageObjectId;
	 }
	
	/**
	 * Type of the object the image is related to
	 * @return string
	 */
	 getImageObjectType() {
	 	return this.imageObjectType;
	 }
	
	/**
	 * @param imageObjectType string Type of the object the image is related to
	 */
	 setImageObjectType(imageObjectType) {
	 	this.imageObjectType = imageObjectType;
	 }
	
	/**
	 * Image content status
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Image URL
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * Image content ID
	 * @return string
	 */
	 getContentId() {
	 	return this.contentId;
	 }
	
	/**
	 * Specifies if the image is default for atleast one image type
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
}
module.exports.Image = Image;

/**
 *
 */
class ImageListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaImageListResponse';
	}
	
	/**
	 * A list of images
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of images
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ImageListResponse = ImageListResponse;

/**
 *
 */
class Ratio extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRatio';
	}
	
	/**
	 * ID
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Height
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * @param height int Height
	 */
	 setHeight(height) {
	 	this.height = height;
	 }
	
	/**
	 * Width
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * @param width int Width
	 */
	 setWidth(width) {
	 	this.width = width;
	 }
	
	/**
	 * Accepted error margin precentage of an image uploaded for this ratio
 * 0 - no validation, everything accepted
	 * @return int
	 */
	 getPrecisionPrecentage() {
	 	return this.precisionPrecentage;
	 }
	
	/**
	 * @param precisionPrecentage int Accepted error margin precentage of an image uploaded for this ratio
 * 0 - no validation, everything accepted
	 */
	 setPrecisionPrecentage(precisionPrecentage) {
	 	this.precisionPrecentage = precisionPrecentage;
	 }
}
module.exports.Ratio = Ratio;

/**
 *
 */
class RatioListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRatioListResponse';
	}
	
	/**
	 * A list of ratios
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of ratios
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.RatioListResponse = RatioListResponse;

/**
 *
 */
class Tag extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTag';
	}
	
	/**
	 * Tag id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Tag Type
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int Tag Type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Tag
	 * @return string
	 */
	 getTag() {
	 	return this.tag;
	 }
	
	/**
	 * Tag
	 * @return array
	 */
	 getMultilingualTag() {
	 	return this.multilingualTag;
	 }
	
	/**
	 * @param multilingualTag array Tag
	 */
	 setMultilingualTag(multilingualTag) {
	 	this.multilingualTag = multilingualTag;
	 }
}
module.exports.Tag = Tag;

/**
 *
 */
class TagListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTagListResponse';
	}
	
	/**
	 * A list of partner tags
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of partner tags
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.TagListResponse = TagListResponse;

/**
 *
 */
class Asset extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAsset';
	}
	
	/**
	 * Unique identifier for the asset
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Identifies the asset type (EPG, Recording, Movie, TV Series, etc).
 * Possible values: 0 – EPG linear programs, 1 - Recording; or any asset type ID according to the asset types IDs defined in the system
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int Identifies the asset type (EPG, Recording, Movie, TV Series, etc).
 * Possible values: 0 – EPG linear programs, 1 - Recording; or any asset type ID according to the asset types IDs defined in the system
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Asset name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * Asset name
	 * @return array
	 */
	 getMultilingualName() {
	 	return this.multilingualName;
	 }
	
	/**
	 * @param multilingualName array Asset name
	 */
	 setMultilingualName(multilingualName) {
	 	this.multilingualName = multilingualName;
	 }
	
	/**
	 * Asset description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * Asset description
	 * @return array
	 */
	 getMultilingualDescription() {
	 	return this.multilingualDescription;
	 }
	
	/**
	 * @param multilingualDescription array Asset description
	 */
	 setMultilingualDescription(multilingualDescription) {
	 	this.multilingualDescription = multilingualDescription;
	 }
	
	/**
	 * Collection of images details that can be used to represent this asset
	 * @return array
	 */
	 getImages() {
	 	return this.images;
	 }
	
	/**
	 * Files
	 * @return array
	 */
	 getMediaFiles() {
	 	return this.mediaFiles;
	 }
	
	/**
	 * Dynamic collection of key-value pairs according to the String Meta defined in the system
	 * @return map
	 */
	 getMetas() {
	 	return this.metas;
	 }
	
	/**
	 * @param metas map Dynamic collection of key-value pairs according to the String Meta defined in the system
	 */
	 setMetas(metas) {
	 	this.metas = metas;
	 }
	
	/**
	 * Dynamic collection of key-value pairs according to the Tag Types defined in the system
	 * @return map
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags map Dynamic collection of key-value pairs according to the Tag Types defined in the system
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * Date and time represented as epoch. For VOD – since when the asset is available in the catalog. For EPG/Linear – when the program is aired (can be in the future)
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int Date and time represented as epoch. For VOD – since when the asset is available in the catalog. For EPG/Linear – when the program is aired (can be in the future)
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * Date and time represented as epoch. For VOD – till when the asset be available in the catalog. For EPG/Linear – program end time and date
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int Date and time represented as epoch. For VOD – till when the asset be available in the catalog. For EPG/Linear – program end time and date
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * Specifies when was the Asset was created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the Asset last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
	
	/**
	 * External identifier for the asset
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External identifier for the asset
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
}
module.exports.Asset = Asset;

/**
 *
 */
class AssetListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetListResponse';
	}
	
	/**
	 * Assets
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Assets
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetListResponse = AssetListResponse;

/**
 *
 */
class MediaAsset extends Asset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaAsset';
	}
	
	/**
	 * External identifiers
	 * @return string
	 */
	 getExternalIds() {
	 	return this.externalIds;
	 }
	
	/**
	 * @param externalIds string External identifiers
	 */
	 setExternalIds(externalIds) {
	 	this.externalIds = externalIds;
	 }
	
	/**
	 * Entry Identifier
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string Entry Identifier
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * Device rule identifier
	 * @return int
	 */
	 getDeviceRuleId() {
	 	return this.deviceRuleId;
	 }
	
	/**
	 * @param deviceRuleId int Device rule identifier
	 */
	 setDeviceRuleId(deviceRuleId) {
	 	this.deviceRuleId = deviceRuleId;
	 }
	
	/**
	 * Geo block rule identifier
	 * @return int
	 */
	 getGeoBlockRuleId() {
	 	return this.geoBlockRuleId;
	 }
	
	/**
	 * @param geoBlockRuleId int Geo block rule identifier
	 */
	 setGeoBlockRuleId(geoBlockRuleId) {
	 	this.geoBlockRuleId = geoBlockRuleId;
	 }
	
	/**
	 * The media asset status
	 * @return bool
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status bool The media asset status
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * The media asset inheritance policy
	 * @return string
	 */
	 getInheritancePolicy() {
	 	return this.inheritancePolicy;
	 }
	
	/**
	 * @param inheritancePolicy string The media asset inheritance policy
	 */
	 setInheritancePolicy(inheritancePolicy) {
	 	this.inheritancePolicy = inheritancePolicy;
	 }
}
module.exports.MediaAsset = MediaAsset;

/**
 *
 */
class LiveAsset extends MediaAsset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveAsset';
	}
	
	/**
	 * Enable CDVR, configuration only
	 * @return string
	 */
	 getEnableCdvrState() {
	 	return this.enableCdvrState;
	 }
	
	/**
	 * @param enableCdvrState string Enable CDVR, configuration only
	 */
	 setEnableCdvrState(enableCdvrState) {
	 	this.enableCdvrState = enableCdvrState;
	 }
	
	/**
	 * Enable catch-up, configuration only
	 * @return string
	 */
	 getEnableCatchUpState() {
	 	return this.enableCatchUpState;
	 }
	
	/**
	 * @param enableCatchUpState string Enable catch-up, configuration only
	 */
	 setEnableCatchUpState(enableCatchUpState) {
	 	this.enableCatchUpState = enableCatchUpState;
	 }
	
	/**
	 * Enable start over, configuration only
	 * @return string
	 */
	 getEnableStartOverState() {
	 	return this.enableStartOverState;
	 }
	
	/**
	 * @param enableStartOverState string Enable start over, configuration only
	 */
	 setEnableStartOverState(enableStartOverState) {
	 	this.enableStartOverState = enableStartOverState;
	 }
	
	/**
	 * buffer Catch-up, configuration only
	 * @return int
	 */
	 getBufferCatchUpSetting() {
	 	return this.bufferCatchUpSetting;
	 }
	
	/**
	 * @param bufferCatchUpSetting int buffer Catch-up, configuration only
	 */
	 setBufferCatchUpSetting(bufferCatchUpSetting) {
	 	this.bufferCatchUpSetting = bufferCatchUpSetting;
	 }
	
	/**
	 * buffer Trick-play, configuration only
	 * @return int
	 */
	 getBufferTrickPlaySetting() {
	 	return this.bufferTrickPlaySetting;
	 }
	
	/**
	 * @param bufferTrickPlaySetting int buffer Trick-play, configuration only
	 */
	 setBufferTrickPlaySetting(bufferTrickPlaySetting) {
	 	this.bufferTrickPlaySetting = bufferTrickPlaySetting;
	 }
	
	/**
	 * Enable Recording playback for non entitled channel, configuration only
	 * @return string
	 */
	 getEnableRecordingPlaybackNonEntitledChannelState() {
	 	return this.enableRecordingPlaybackNonEntitledChannelState;
	 }
	
	/**
	 * @param enableRecordingPlaybackNonEntitledChannelState string Enable Recording playback for non entitled channel, configuration only
	 */
	 setEnableRecordingPlaybackNonEntitledChannelState(enableRecordingPlaybackNonEntitledChannelState) {
	 	this.enableRecordingPlaybackNonEntitledChannelState = enableRecordingPlaybackNonEntitledChannelState;
	 }
	
	/**
	 * Enable trick-play, configuration only
	 * @return string
	 */
	 getEnableTrickPlayState() {
	 	return this.enableTrickPlayState;
	 }
	
	/**
	 * @param enableTrickPlayState string Enable trick-play, configuration only
	 */
	 setEnableTrickPlayState(enableTrickPlayState) {
	 	this.enableTrickPlayState = enableTrickPlayState;
	 }
	
	/**
	 * External identifier used when ingesting programs for this linear media asset
	 * @return string
	 */
	 getExternalEpgIngestId() {
	 	return this.externalEpgIngestId;
	 }
	
	/**
	 * @param externalEpgIngestId string External identifier used when ingesting programs for this linear media asset
	 */
	 setExternalEpgIngestId(externalEpgIngestId) {
	 	this.externalEpgIngestId = externalEpgIngestId;
	 }
	
	/**
	 * External identifier for the CDVR
	 * @return string
	 */
	 getExternalCdvrId() {
	 	return this.externalCdvrId;
	 }
	
	/**
	 * @param externalCdvrId string External identifier for the CDVR
	 */
	 setExternalCdvrId(externalCdvrId) {
	 	this.externalCdvrId = externalCdvrId;
	 }
	
	/**
	 * Is CDVR enabled for this asset
	 * @return bool
	 */
	 getEnableCdvr() {
	 	return this.enableCdvr;
	 }
	
	/**
	 * Is catch-up enabled for this asset
	 * @return bool
	 */
	 getEnableCatchUp() {
	 	return this.enableCatchUp;
	 }
	
	/**
	 * Is start over enabled for this asset
	 * @return bool
	 */
	 getEnableStartOver() {
	 	return this.enableStartOver;
	 }
	
	/**
	 * summed Catch-up buffer, the TimeShiftedTvPartnerSettings are also taken into consideration
	 * @return int
	 */
	 getCatchUpBuffer() {
	 	return this.catchUpBuffer;
	 }
	
	/**
	 * summed Trick-play buffer, the TimeShiftedTvPartnerSettings are also taken into consideration
	 * @return int
	 */
	 getTrickPlayBuffer() {
	 	return this.trickPlayBuffer;
	 }
	
	/**
	 * Is recording playback for non entitled channel enabled for this asset
	 * @return bool
	 */
	 getEnableRecordingPlaybackNonEntitledChannel() {
	 	return this.enableRecordingPlaybackNonEntitledChannel;
	 }
	
	/**
	 * Is trick-play enabled for this asset
	 * @return bool
	 */
	 getEnableTrickPlay() {
	 	return this.enableTrickPlay;
	 }
	
	/**
	 * channel type, possible values: UNKNOWN, DTT, OTT, DTT_AND_OTT
	 * @return string
	 */
	 getChannelType() {
	 	return this.channelType;
	 }
	
	/**
	 * @param channelType string channel type, possible values: UNKNOWN, DTT, OTT, DTT_AND_OTT
	 */
	 setChannelType(channelType) {
	 	this.channelType = channelType;
	 }
}
module.exports.LiveAsset = LiveAsset;

/**
 *
 */
class ProgramAsset extends Asset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProgramAsset';
	}
	
	/**
	 * EPG channel identifier
	 * @return int
	 */
	 getEpgChannelId() {
	 	return this.epgChannelId;
	 }
	
	/**
	 * EPG identifier
	 * @return string
	 */
	 getEpgId() {
	 	return this.epgId;
	 }
	
	/**
	 * Ralated media identifier
	 * @return int
	 */
	 getRelatedMediaId() {
	 	return this.relatedMediaId;
	 }
	
	/**
	 * @param relatedMediaId int Ralated media identifier
	 */
	 setRelatedMediaId(relatedMediaId) {
	 	this.relatedMediaId = relatedMediaId;
	 }
	
	/**
	 * Unique identifier for the program
	 * @return string
	 */
	 getCrid() {
	 	return this.crid;
	 }
	
	/**
	 * @param crid string Unique identifier for the program
	 */
	 setCrid(crid) {
	 	this.crid = crid;
	 }
	
	/**
	 * Id of linear media asset
	 * @return int
	 */
	 getLinearAssetId() {
	 	return this.linearAssetId;
	 }
	
	/**
	 * @param linearAssetId int Id of linear media asset
	 */
	 setLinearAssetId(linearAssetId) {
	 	this.linearAssetId = linearAssetId;
	 }
	
	/**
	 * Is CDVR enabled for this asset
	 * @return bool
	 */
	 getEnableCdvr() {
	 	return this.enableCdvr;
	 }
	
	/**
	 * @param enableCdvr bool Is CDVR enabled for this asset
	 */
	 setEnableCdvr(enableCdvr) {
	 	this.enableCdvr = enableCdvr;
	 }
	
	/**
	 * Is catch-up enabled for this asset
	 * @return bool
	 */
	 getEnableCatchUp() {
	 	return this.enableCatchUp;
	 }
	
	/**
	 * @param enableCatchUp bool Is catch-up enabled for this asset
	 */
	 setEnableCatchUp(enableCatchUp) {
	 	this.enableCatchUp = enableCatchUp;
	 }
	
	/**
	 * Is start over enabled for this asset
	 * @return bool
	 */
	 getEnableStartOver() {
	 	return this.enableStartOver;
	 }
	
	/**
	 * @param enableStartOver bool Is start over enabled for this asset
	 */
	 setEnableStartOver(enableStartOver) {
	 	this.enableStartOver = enableStartOver;
	 }
	
	/**
	 * Is trick-play enabled for this asset
	 * @return bool
	 */
	 getEnableTrickPlay() {
	 	return this.enableTrickPlay;
	 }
	
	/**
	 * @param enableTrickPlay bool Is trick-play enabled for this asset
	 */
	 setEnableTrickPlay(enableTrickPlay) {
	 	this.enableTrickPlay = enableTrickPlay;
	 }
}
module.exports.ProgramAsset = ProgramAsset;

/**
 *
 */
class RecordingAsset extends ProgramAsset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecordingAsset';
	}
	
	/**
	 * Recording identifier
	 * @return string
	 */
	 getRecordingId() {
	 	return this.recordingId;
	 }
	
	/**
	 * @param recordingId string Recording identifier
	 */
	 setRecordingId(recordingId) {
	 	this.recordingId = recordingId;
	 }
	
	/**
	 * Recording Type: single/season/series
	 * @return string
	 */
	 getRecordingType() {
	 	return this.recordingType;
	 }
	
	/**
	 * @param recordingType string Recording Type: single/season/series
	 */
	 setRecordingType(recordingType) {
	 	this.recordingType = recordingType;
	 }
}
module.exports.RecordingAsset = RecordingAsset;

/**
 *
 */
class AssetStruct extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStruct';
	}
	
	/**
	 * Asset Struct id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Asset struct name for the partner
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * Asset struct name for the partner
	 * @return array
	 */
	 getMultilingualName() {
	 	return this.multilingualName;
	 }
	
	/**
	 * @param multilingualName array Asset struct name for the partner
	 */
	 setMultilingualName(multilingualName) {
	 	this.multilingualName = multilingualName;
	 }
	
	/**
	 * Asset Struct system name for the partner
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string Asset Struct system name for the partner
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * Is the Asset Struct protected by the system
	 * @return bool
	 */
	 getIsProtected() {
	 	return this.isProtected;
	 }
	
	/**
	 * @param isProtected bool Is the Asset Struct protected by the system
	 */
	 setIsProtected(isProtected) {
	 	this.isProtected = isProtected;
	 }
	
	/**
	 * A list of comma separated meta ids associated with this asset struct, returned according to the order
	 * @return string
	 */
	 getMetaIds() {
	 	return this.metaIds;
	 }
	
	/**
	 * @param metaIds string A list of comma separated meta ids associated with this asset struct, returned according to the order
	 */
	 setMetaIds(metaIds) {
	 	this.metaIds = metaIds;
	 }
	
	/**
	 * Specifies when was the Asset Struct was created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the Asset Struct last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
	
	/**
	 * List of supported features
	 * @return string
	 */
	 getFeatures() {
	 	return this.features;
	 }
	
	/**
	 * @param features string List of supported features
	 */
	 setFeatures(features) {
	 	this.features = features;
	 }
	
	/**
	 * Plural Name
	 * @return string
	 */
	 getPluralName() {
	 	return this.pluralName;
	 }
	
	/**
	 * @param pluralName string Plural Name
	 */
	 setPluralName(pluralName) {
	 	this.pluralName = pluralName;
	 }
	
	/**
	 * AssetStruct parent Id
	 * @return int
	 */
	 getParentId() {
	 	return this.parentId;
	 }
	
	/**
	 * @param parentId int AssetStruct parent Id
	 */
	 setParentId(parentId) {
	 	this.parentId = parentId;
	 }
	
	/**
	 * connectingMetaId
	 * @return int
	 */
	 getConnectingMetaId() {
	 	return this.connectingMetaId;
	 }
	
	/**
	 * @param connectingMetaId int connectingMetaId
	 */
	 setConnectingMetaId(connectingMetaId) {
	 	this.connectingMetaId = connectingMetaId;
	 }
	
	/**
	 * connectedParentMetaId
	 * @return int
	 */
	 getConnectedParentMetaId() {
	 	return this.connectedParentMetaId;
	 }
	
	/**
	 * @param connectedParentMetaId int connectedParentMetaId
	 */
	 setConnectedParentMetaId(connectedParentMetaId) {
	 	this.connectedParentMetaId = connectedParentMetaId;
	 }
}
module.exports.AssetStruct = AssetStruct;

/**
 *
 */
class AssetStructListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStructListResponse';
	}
	
	/**
	 * A list of asset structs
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of asset structs
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetStructListResponse = AssetStructListResponse;

/**
 *
 */
class ImageType extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaImageType';
	}
	
	/**
	 * Image type ID
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * System name
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string System name
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * Ration ID
	 * @return int
	 */
	 getRatioId() {
	 	return this.ratioId;
	 }
	
	/**
	 * @param ratioId int Ration ID
	 */
	 setRatioId(ratioId) {
	 	this.ratioId = ratioId;
	 }
	
	/**
	 * Help text
	 * @return string
	 */
	 getHelpText() {
	 	return this.helpText;
	 }
	
	/**
	 * @param helpText string Help text
	 */
	 setHelpText(helpText) {
	 	this.helpText = helpText;
	 }
	
	/**
	 * Default image ID
	 * @return int
	 */
	 getDefaultImageId() {
	 	return this.defaultImageId;
	 }
	
	/**
	 * @param defaultImageId int Default image ID
	 */
	 setDefaultImageId(defaultImageId) {
	 	this.defaultImageId = defaultImageId;
	 }
}
module.exports.ImageType = ImageType;

/**
 *
 */
class ImageTypeListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaImageTypeListResponse';
	}
	
	/**
	 * A list of partner image types
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of partner image types
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ImageTypeListResponse = ImageTypeListResponse;

/**
 *
 */
class AssetCount extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetCount';
	}
	
	/**
	 * Value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
	
	/**
	 * Count
	 * @return int
	 */
	 getCount() {
	 	return this.count;
	 }
	
	/**
	 * @param count int Count
	 */
	 setCount(count) {
	 	this.count = count;
	 }
	
	/**
	 * Sub groups
	 * @return array
	 */
	 getSubs() {
	 	return this.subs;
	 }
	
	/**
	 * @param subs array Sub groups
	 */
	 setSubs(subs) {
	 	this.subs = subs;
	 }
}
module.exports.AssetCount = AssetCount;

/**
 *
 */
class AssetsCount extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetsCount';
	}
	
	/**
	 * Field name
	 * @return string
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field string Field name
	 */
	 setField(field) {
	 	this.field = field;
	 }
	
	/**
	 * Values, their count and sub groups
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Values, their count and sub groups
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetsCount = AssetsCount;

/**
 *
 */
class AssetCountListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetCountListResponse';
	}
	
	/**
	 * Count of assets that match filter result, regardless of group by result
	 * @return int
	 */
	 getAssetsCount() {
	 	return this.assetsCount;
	 }
	
	/**
	 * @param assetsCount int Count of assets that match filter result, regardless of group by result
	 */
	 setAssetsCount(assetsCount) {
	 	this.assetsCount = assetsCount;
	 }
	
	/**
	 * List of groupings (field name and sub-list of values and their counts)
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array List of groupings (field name and sub-list of values and their counts)
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetCountListResponse = AssetCountListResponse;

/**
 *
 */
class SlimAsset extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSlimAsset';
	}
	
	/**
	 * Internal identifier of the asset
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Internal identifier of the asset
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * The type of the asset. Possible values: media, recording, epg
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string The type of the asset. Possible values: media, recording, epg
	 */
	 setType(type) {
	 	this.type = type;
	 }
}
module.exports.SlimAsset = SlimAsset;

/**
 *
 */
class BookmarkPlayerData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBookmarkPlayerData';
	}
	
	/**
	 * Action
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string Action
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * Average Bitrate
	 * @return int
	 */
	 getAverageBitrate() {
	 	return this.averageBitrate;
	 }
	
	/**
	 * @param averageBitrate int Average Bitrate
	 */
	 setAverageBitrate(averageBitrate) {
	 	this.averageBitrate = averageBitrate;
	 }
	
	/**
	 * Total Bitrate
	 * @return int
	 */
	 getTotalBitrate() {
	 	return this.totalBitrate;
	 }
	
	/**
	 * @param totalBitrate int Total Bitrate
	 */
	 setTotalBitrate(totalBitrate) {
	 	this.totalBitrate = totalBitrate;
	 }
	
	/**
	 * Current Bitrate
	 * @return int
	 */
	 getCurrentBitrate() {
	 	return this.currentBitrate;
	 }
	
	/**
	 * @param currentBitrate int Current Bitrate
	 */
	 setCurrentBitrate(currentBitrate) {
	 	this.currentBitrate = currentBitrate;
	 }
	
	/**
	 * Identifier of the file
	 * @return int
	 */
	 getFileId() {
	 	return this.fileId;
	 }
	
	/**
	 * @param fileId int Identifier of the file
	 */
	 setFileId(fileId) {
	 	this.fileId = fileId;
	 }
}
module.exports.BookmarkPlayerData = BookmarkPlayerData;

/**
 *
 */
class Bookmark extends SlimAsset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBookmark';
	}
	
	/**
	 * User identifier
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * The position of the user in the specific asset (in seconds)
	 * @return int
	 */
	 getPosition() {
	 	return this.position;
	 }
	
	/**
	 * @param position int The position of the user in the specific asset (in seconds)
	 */
	 setPosition(position) {
	 	this.position = position;
	 }
	
	/**
	 * Indicates who is the owner of this position
	 * @return string
	 */
	 getPositionOwner() {
	 	return this.positionOwner;
	 }
	
	/**
	 * Specifies whether the user&#39;s current position exceeded 95% of the duration
	 * @return bool
	 */
	 getFinishedWatching() {
	 	return this.finishedWatching;
	 }
	
	/**
	 * Insert only player data
	 * @return BookmarkPlayerData
	 */
	 getPlayerData() {
	 	return this.playerData;
	 }
	
	/**
	 * @param playerData BookmarkPlayerData Insert only player data
	 */
	 setPlayerData(playerData) {
	 	this.playerData = playerData;
	 }
	
	/**
	 * Program Id
	 * @return int
	 */
	 getProgramId() {
	 	return this.programId;
	 }
	
	/**
	 * @param programId int Program Id
	 */
	 setProgramId(programId) {
	 	this.programId = programId;
	 }
	
	/**
	 * Indicates if the current request is in reporting mode (hit)
	 * @return bool
	 */
	 getIsReportingMode() {
	 	return this.isReportingMode;
	 }
	
	/**
	 * @param isReportingMode bool Indicates if the current request is in reporting mode (hit)
	 */
	 setIsReportingMode(isReportingMode) {
	 	this.isReportingMode = isReportingMode;
	 }
}
module.exports.Bookmark = Bookmark;

/**
 *
 */
class BookmarkListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBookmarkListResponse';
	}
	
	/**
	 * Assets
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Assets
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.BookmarkListResponse = BookmarkListResponse;

/**
 *
 */
class AssetCommentListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetCommentListResponse';
	}
	
	/**
	 * Assets
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Assets
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetCommentListResponse = AssetCommentListResponse;

/**
 *
 */
class AssetStatisticsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStatisticsListResponse';
	}
	
	/**
	 * Assets
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Assets
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetStatisticsListResponse = AssetStatisticsListResponse;

/**
 *
 */
class MediaFileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaFileListResponse';
	}
	
	/**
	 * A list of media-file types
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of media-file types
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.MediaFileListResponse = MediaFileListResponse;

/**
 *
 */
class AssetHistory extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetHistory';
	}
	
	/**
	 * Asset identifier
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * Asset identifier
	 * @return string
	 */
	 getAssetType() {
	 	return this.assetType;
	 }
	
	/**
	 * Position in seconds of the relevant asset
	 * @return int
	 */
	 getPosition() {
	 	return this.position;
	 }
	
	/**
	 * Duration in seconds of the relevant asset
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * The date when the media was last watched
	 * @return int
	 */
	 getWatchedDate() {
	 	return this.watchedDate;
	 }
	
	/**
	 * Boolean which specifies whether the user finished watching the movie or not
	 * @return bool
	 */
	 getFinishedWatching() {
	 	return this.finishedWatching;
	 }
}
module.exports.AssetHistory = AssetHistory;

/**
 *
 */
class AssetHistoryListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetHistoryListResponse';
	}
	
	/**
	 * WatchHistoryAssets Models
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array WatchHistoryAssets Models
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetHistoryListResponse = AssetHistoryListResponse;

/**
 *
 */
class Rule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRule';
	}
	
	/**
	 * ID
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.Rule = Rule;

/**
 *
 */
class TvmRule extends Rule{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTvmRule';
	}
	
	/**
	 * Specifies when was the tvm rule was created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies the tvm rule type
	 * @return string
	 */
	 getRuleType() {
	 	return this.ruleType;
	 }
}
module.exports.TvmRule = TvmRule;

/**
 *
 */
class TvmRuleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTvmRuleListResponse';
	}
	
	/**
	 * tvm rules
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array tvm rules
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.TvmRuleListResponse = TvmRuleListResponse;

/**
 *
 */
class TvmDeviceRule extends TvmRule{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTvmDeviceRule';
	}
	
	/**
	 * Comma separated list of country Ids
	 * @return string
	 */
	 getDeviceBrandIds() {
	 	return this.deviceBrandIds;
	 }
	
	/**
	 * @param deviceBrandIds string Comma separated list of country Ids
	 */
	 setDeviceBrandIds(deviceBrandIds) {
	 	this.deviceBrandIds = deviceBrandIds;
	 }
}
module.exports.TvmDeviceRule = TvmDeviceRule;

/**
 *
 */
class TvmGeoRule extends TvmRule{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTvmGeoRule';
	}
	
	/**
	 * Indicates if the rule is relevent ONLY for the country ids or except country ids here
	 * @return bool
	 */
	 getOnlyOrBut() {
	 	return this.onlyOrBut;
	 }
	
	/**
	 * @param onlyOrBut bool Indicates if the rule is relevent ONLY for the country ids or except country ids here
	 */
	 setOnlyOrBut(onlyOrBut) {
	 	this.onlyOrBut = onlyOrBut;
	 }
	
	/**
	 * Comma separated list of country Ids
	 * @return string
	 */
	 getCountryIds() {
	 	return this.countryIds;
	 }
	
	/**
	 * @param countryIds string Comma separated list of country Ids
	 */
	 setCountryIds(countryIds) {
	 	this.countryIds = countryIds;
	 }
	
	/**
	 * proxyRule - what is that?
	 * @return int
	 */
	 getProxyRule() {
	 	return this.proxyRule;
	 }
	
	/**
	 * @param proxyRule int proxyRule - what is that?
	 */
	 setProxyRule(proxyRule) {
	 	this.proxyRule = proxyRule;
	 }
	
	/**
	 * proxyLevel - what is that?
	 * @return int
	 */
	 getProxyLevel() {
	 	return this.proxyLevel;
	 }
	
	/**
	 * @param proxyLevel int proxyLevel - what is that?
	 */
	 setProxyLevel(proxyLevel) {
	 	this.proxyLevel = proxyLevel;
	 }
}
module.exports.TvmGeoRule = TvmGeoRule;

/**
 *
 */
class Condition extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCondition';
	}
	
	/**
	 * The type of the condition
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * Description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.Condition = Condition;

/**
 *
 */
class RuleAction extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRuleAction';
	}
	
	/**
	 * The type of the action
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * Description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.RuleAction = RuleAction;

/**
 *
 */
class ApplyDiscountModuleAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaApplyDiscountModuleAction';
	}
	
	/**
	 * Discount module ID
	 * @return int
	 */
	 getDiscountModuleId() {
	 	return this.discountModuleId;
	 }
	
	/**
	 * @param discountModuleId int Discount module ID
	 */
	 setDiscountModuleId(discountModuleId) {
	 	this.discountModuleId = discountModuleId;
	 }
}
module.exports.ApplyDiscountModuleAction = ApplyDiscountModuleAction;

/**
 *
 */
class BusinessModuleRule extends Rule{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBusinessModuleRule';
	}
	
	/**
	 * List of conditions for the rule
	 * @return array
	 */
	 getConditions() {
	 	return this.conditions;
	 }
	
	/**
	 * @param conditions array List of conditions for the rule
	 */
	 setConditions(conditions) {
	 	this.conditions = conditions;
	 }
	
	/**
	 * List of actions for the rule
	 * @return array
	 */
	 getActions() {
	 	return this.actions;
	 }
	
	/**
	 * @param actions array List of actions for the rule
	 */
	 setActions(actions) {
	 	this.actions = actions;
	 }
	
	/**
	 * Create date of the rule
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Update date of the rule
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
}
module.exports.BusinessModuleRule = BusinessModuleRule;

/**
 *
 */
class NotCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaNotCondition';
	}
	
	/**
	 * Indicates whether to apply not on the other properties in the condition
	 * @return bool
	 */
	 getNot() {
	 	return this.not;
	 }
	
	/**
	 * @param not bool Indicates whether to apply not on the other properties in the condition
	 */
	 setNot(not) {
	 	this.not = not;
	 }
}
module.exports.NotCondition = NotCondition;

/**
 *
 */
class OrCondition extends NotCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOrCondition';
	}
	
	/**
	 * List of conditions with or between them
	 * @return array
	 */
	 getConditions() {
	 	return this.conditions;
	 }
	
	/**
	 * @param conditions array List of conditions with or between them
	 */
	 setConditions(conditions) {
	 	this.conditions = conditions;
	 }
}
module.exports.OrCondition = OrCondition;

/**
 *
 */
class CountryCondition extends NotCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCountryCondition';
	}
	
	/**
	 * Comma separated countries IDs list
	 * @return string
	 */
	 getCountries() {
	 	return this.countries;
	 }
	
	/**
	 * @param countries string Comma separated countries IDs list
	 */
	 setCountries(countries) {
	 	this.countries = countries;
	 }
}
module.exports.CountryCondition = CountryCondition;

/**
 *
 */
class DateCondition extends NotCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDateCondition';
	}
	
	/**
	 * Start date
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int Start date
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * End date
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int End date
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
}
module.exports.DateCondition = DateCondition;

/**
 *
 */
class HeaderCondition extends NotCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHeaderCondition';
	}
	
	/**
	 * Header key
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string Header key
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * Header value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Header value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.HeaderCondition = HeaderCondition;

/**
 *
 */
class AssetCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetCondition';
	}
	
	/**
	 * KSQL
	 * @return string
	 */
	 getKsql() {
	 	return this.ksql;
	 }
	
	/**
	 * @param ksql string KSQL
	 */
	 setKsql(ksql) {
	 	this.ksql = ksql;
	 }
}
module.exports.AssetCondition = AssetCondition;

/**
 *
 */
class ConcurrencyCondition extends AssetCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConcurrencyCondition';
	}
	
	/**
	 * Concurrency limitation
	 * @return int
	 */
	 getLimit() {
	 	return this.limit;
	 }
	
	/**
	 * @param limit int Concurrency limitation
	 */
	 setLimit(limit) {
	 	this.limit = limit;
	 }
	
	/**
	 * Concurrency limitation type
	 * @return string
	 */
	 getConcurrencyLimitationType() {
	 	return this.concurrencyLimitationType;
	 }
	
	/**
	 * @param concurrencyLimitationType string Concurrency limitation type
	 */
	 setConcurrencyLimitationType(concurrencyLimitationType) {
	 	this.concurrencyLimitationType = concurrencyLimitationType;
	 }
}
module.exports.ConcurrencyCondition = ConcurrencyCondition;

/**
 *
 */
class IpRangeCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIpRangeCondition';
	}
	
	/**
	 * From IP address range
	 * @return string
	 */
	 getFromIP() {
	 	return this.fromIP;
	 }
	
	/**
	 * @param fromIP string From IP address range
	 */
	 setFromIP(fromIP) {
	 	this.fromIP = fromIP;
	 }
	
	/**
	 * TO IP address range
	 * @return string
	 */
	 getToIP() {
	 	return this.toIP;
	 }
	
	/**
	 * @param toIP string TO IP address range
	 */
	 setToIP(toIP) {
	 	this.toIP = toIP;
	 }
}
module.exports.IpRangeCondition = IpRangeCondition;

/**
 *
 */
class BusinessModuleCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBusinessModuleCondition';
	}
	
	/**
	 * Business module type
	 * @return string
	 */
	 getBusinessModuleType() {
	 	return this.businessModuleType;
	 }
	
	/**
	 * @param businessModuleType string Business module type
	 */
	 setBusinessModuleType(businessModuleType) {
	 	this.businessModuleType = businessModuleType;
	 }
	
	/**
	 * Business module ID
	 * @return int
	 */
	 getBusinessModuleId() {
	 	return this.businessModuleId;
	 }
	
	/**
	 * @param businessModuleId int Business module ID
	 */
	 setBusinessModuleId(businessModuleId) {
	 	this.businessModuleId = businessModuleId;
	 }
}
module.exports.BusinessModuleCondition = BusinessModuleCondition;

/**
 *
 */
class SegmentsCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSegmentsCondition';
	}
	
	/**
	 * Comma separated segments IDs list
	 * @return string
	 */
	 getSegmentsIds() {
	 	return this.segmentsIds;
	 }
	
	/**
	 * @param segmentsIds string Comma separated segments IDs list
	 */
	 setSegmentsIds(segmentsIds) {
	 	this.segmentsIds = segmentsIds;
	 }
}
module.exports.SegmentsCondition = SegmentsCondition;

/**
 *
 */
class AssetRuleAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetRuleAction';
	}
}
module.exports.AssetRuleAction = AssetRuleAction;

/**
 *
 */
class AccessControlBlockAction extends AssetRuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlBlockAction';
	}
}
module.exports.AccessControlBlockAction = AccessControlBlockAction;

/**
 *
 */
class TimeOffsetRuleAction extends AssetRuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTimeOffsetRuleAction';
	}
	
	/**
	 * Offset in seconds
	 * @return int
	 */
	 getOffset() {
	 	return this.offset;
	 }
	
	/**
	 * @param offset int Offset in seconds
	 */
	 setOffset(offset) {
	 	this.offset = offset;
	 }
	
	/**
	 * Indicates whether to add time zone offset to the time
	 * @return bool
	 */
	 getTimeZone() {
	 	return this.timeZone;
	 }
	
	/**
	 * @param timeZone bool Indicates whether to add time zone offset to the time
	 */
	 setTimeZone(timeZone) {
	 	this.timeZone = timeZone;
	 }
}
module.exports.TimeOffsetRuleAction = TimeOffsetRuleAction;

/**
 *
 */
class EndDateOffsetRuleAction extends TimeOffsetRuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEndDateOffsetRuleAction';
	}
}
module.exports.EndDateOffsetRuleAction = EndDateOffsetRuleAction;

/**
 *
 */
class StartDateOffsetRuleAction extends TimeOffsetRuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStartDateOffsetRuleAction';
	}
}
module.exports.StartDateOffsetRuleAction = StartDateOffsetRuleAction;

/**
 *
 */
class AllowPlaybackAction extends AssetRuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAllowPlaybackAction';
	}
}
module.exports.AllowPlaybackAction = AllowPlaybackAction;

/**
 *
 */
class BlockPlaybackAction extends AssetRuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBlockPlaybackAction';
	}
}
module.exports.BlockPlaybackAction = BlockPlaybackAction;

/**
 *
 */
class ApplyPlaybackAdapterAction extends AssetRuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaApplyPlaybackAdapterAction';
	}
	
	/**
	 * Playback Adapter Identifier
	 * @return int
	 */
	 getAdapterId() {
	 	return this.adapterId;
	 }
	
	/**
	 * @param adapterId int Playback Adapter Identifier
	 */
	 setAdapterId(adapterId) {
	 	this.adapterId = adapterId;
	 }
}
module.exports.ApplyPlaybackAdapterAction = ApplyPlaybackAdapterAction;

/**
 *
 */
class AssetUserRuleAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetUserRuleAction';
	}
}
module.exports.AssetUserRuleAction = AssetUserRuleAction;

/**
 *
 */
class AssetUserRuleBlockAction extends AssetUserRuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetUserRuleBlockAction';
	}
}
module.exports.AssetUserRuleBlockAction = AssetUserRuleBlockAction;

/**
 *
 */
class AssetRuleBase extends Rule{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetRuleBase';
	}
}
module.exports.AssetRuleBase = AssetRuleBase;

/**
 *
 */
class AssetUserRule extends AssetRuleBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetUserRule';
	}
	
	/**
	 * List of Ksql conditions for the user rule
	 * @return array
	 */
	 getConditions() {
	 	return this.conditions;
	 }
	
	/**
	 * @param conditions array List of Ksql conditions for the user rule
	 */
	 setConditions(conditions) {
	 	this.conditions = conditions;
	 }
	
	/**
	 * List of actions for the user rule
	 * @return array
	 */
	 getActions() {
	 	return this.actions;
	 }
	
	/**
	 * @param actions array List of actions for the user rule
	 */
	 setActions(actions) {
	 	this.actions = actions;
	 }
}
module.exports.AssetUserRule = AssetUserRule;

/**
 *
 */
class AssetRule extends AssetRuleBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetRule';
	}
	
	/**
	 * List of conditions for the rule
	 * @return array
	 */
	 getConditions() {
	 	return this.conditions;
	 }
	
	/**
	 * @param conditions array List of conditions for the rule
	 */
	 setConditions(conditions) {
	 	this.conditions = conditions;
	 }
	
	/**
	 * List of actions for the rule
	 * @return array
	 */
	 getActions() {
	 	return this.actions;
	 }
	
	/**
	 * @param actions array List of actions for the rule
	 */
	 setActions(actions) {
	 	this.actions = actions;
	 }
}
module.exports.AssetRule = AssetRule;

/**
 *
 */
class PlaybackProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaybackProfile';
	}
	
	/**
	 * Playback profile identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Playback profile name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Playback profile name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Playback profile active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool Playback profile active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * Playback profile URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string Playback profile URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * Playback profile settings
	 * @return string
	 */
	 getSettings() {
	 	return this.settings;
	 }
	
	/**
	 * @param settings string Playback profile settings
	 */
	 setSettings(settings) {
	 	this.settings = settings;
	 }
	
	/**
	 * Playback profile alias
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string Playback profile alias
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * Playback adapter shared secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
}
module.exports.PlaybackProfile = PlaybackProfile;

/**
 *
 */
class PlaybackProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaybackProfileListResponse';
	}
	
	/**
	 * A list of Engagement adapter
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of Engagement adapter
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PlaybackProfileListResponse = PlaybackProfileListResponse;

/**
 *
 */
class BusinessModuleRuleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBusinessModuleRuleListResponse';
	}
	
	/**
	 * Asset rules
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Asset rules
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.BusinessModuleRuleListResponse = BusinessModuleRuleListResponse;

/**
 *
 */
class DrmProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDrmProfile';
	}
	
	/**
	 * DRM adapter identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * DRM adapter name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string DRM adapter name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * DRM adapter active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool DRM adapter active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * DRM adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string DRM adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * DRM adapter settings
	 * @return string
	 */
	 getSettings() {
	 	return this.settings;
	 }
	
	/**
	 * @param settings string DRM adapter settings
	 */
	 setSettings(settings) {
	 	this.settings = settings;
	 }
	
	/**
	 * DRM adapter alias
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string DRM adapter alias
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * DRM shared secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
}
module.exports.DrmProfile = DrmProfile;

/**
 *
 */
class DrmProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDrmProfileListResponse';
	}
	
	/**
	 * Adapters
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Adapters
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.DrmProfileListResponse = DrmProfileListResponse;

/**
 *
 */
class Permission extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermission';
	}
	
	/**
	 * Permission identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Permission name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Permission name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Permission friendly name
	 * @return string
	 */
	 getFriendlyName() {
	 	return this.friendlyName;
	 }
	
	/**
	 * @param friendlyName string Permission friendly name
	 */
	 setFriendlyName(friendlyName) {
	 	this.friendlyName = friendlyName;
	 }
}
module.exports.Permission = Permission;

/**
 *
 */
class PermissionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermissionListResponse';
	}
	
	/**
	 * A list of permissions
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of permissions
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PermissionListResponse = PermissionListResponse;

/**
 *
 */
class GroupPermission extends Permission{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGroupPermission';
	}
	
	/**
	 * Permission identifier
	 * @return string
	 */
	 getGroup() {
	 	return this.group;
	 }
	
	/**
	 * @param group string Permission identifier
	 */
	 setGroup(group) {
	 	this.group = group;
	 }
}
module.exports.GroupPermission = GroupPermission;

/**
 *
 */
class MediaConcurrencyRule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaConcurrencyRule';
	}
	
	/**
	 * Media concurrency rule  identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Media concurrency rule  identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * Media concurrency rule  name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Media concurrency rule  name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Concurrency limitation type
	 * @return string
	 */
	 getConcurrencyLimitationType() {
	 	return this.concurrencyLimitationType;
	 }
	
	/**
	 * @param concurrencyLimitationType string Concurrency limitation type
	 */
	 setConcurrencyLimitationType(concurrencyLimitationType) {
	 	this.concurrencyLimitationType = concurrencyLimitationType;
	 }
	
	/**
	 * Limitation
	 * @return int
	 */
	 getLimitation() {
	 	return this.limitation;
	 }
	
	/**
	 * @param limitation int Limitation
	 */
	 setLimitation(limitation) {
	 	this.limitation = limitation;
	 }
}
module.exports.MediaConcurrencyRule = MediaConcurrencyRule;

/**
 *
 */
class MediaConcurrencyRuleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaConcurrencyRuleListResponse';
	}
	
	/**
	 * Media CONCURRENCY RULES
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Media CONCURRENCY RULES
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.MediaConcurrencyRuleListResponse = MediaConcurrencyRuleListResponse;

/**
 *
 */
class AssetUserRuleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetUserRuleListResponse';
	}
	
	/**
	 * Asset user rules
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Asset user rules
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetUserRuleListResponse = AssetUserRuleListResponse;

/**
 *
 */
class Currency extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCurrency';
	}
	
	/**
	 * Currency name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Currency name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Currency code
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string Currency code
	 */
	 setCode(code) {
	 	this.code = code;
	 }
	
	/**
	 * Currency Sign
	 * @return string
	 */
	 getSign() {
	 	return this.sign;
	 }
	
	/**
	 * @param sign string Currency Sign
	 */
	 setSign(sign) {
	 	this.sign = sign;
	 }
	
	/**
	 * Is the default Currency of the account
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Is the default Currency of the account
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
}
module.exports.Currency = Currency;

/**
 *
 */
class CurrencyListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCurrencyListResponse';
	}
	
	/**
	 * Currencies
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Currencies
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.CurrencyListResponse = CurrencyListResponse;

/**
 *
 */
class AssetRuleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetRuleListResponse';
	}
	
	/**
	 * Asset rules
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Asset rules
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetRuleListResponse = AssetRuleListResponse;

/**
 *
 */
class Language extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLanguage';
	}
	
	/**
	 * Language name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Language name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Language system name
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string Language system name
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * Language code
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string Language code
	 */
	 setCode(code) {
	 	this.code = code;
	 }
	
	/**
	 * Language direction (LTR/RTL)
	 * @return string
	 */
	 getDirection() {
	 	return this.direction;
	 }
	
	/**
	 * @param direction string Language direction (LTR/RTL)
	 */
	 setDirection(direction) {
	 	this.direction = direction;
	 }
	
	/**
	 * Is the default language of the account
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Is the default language of the account
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
}
module.exports.Language = Language;

/**
 *
 */
class LanguageListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLanguageListResponse';
	}
	
	/**
	 * Languages
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Languages
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.LanguageListResponse = LanguageListResponse;

/**
 *
 */
class Meta extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMeta';
	}
	
	/**
	 * Meta id
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Meta name for the partner
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * Meta name for the partner
	 * @return array
	 */
	 getMultilingualName() {
	 	return this.multilingualName;
	 }
	
	/**
	 * @param multilingualName array Meta name for the partner
	 */
	 setMultilingualName(multilingualName) {
	 	this.multilingualName = multilingualName;
	 }
	
	/**
	 * Meta system name for the partner
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string Meta system name for the partner
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * Meta data type
	 * @return string
	 */
	 getDataType() {
	 	return this.dataType;
	 }
	
	/**
	 * @param dataType string Meta data type
	 */
	 setDataType(dataType) {
	 	this.dataType = dataType;
	 }
	
	/**
	 * Does the meta contain multiple values
	 * @return bool
	 */
	 getMultipleValue() {
	 	return this.multipleValue;
	 }
	
	/**
	 * @param multipleValue bool Does the meta contain multiple values
	 */
	 setMultipleValue(multipleValue) {
	 	this.multipleValue = multipleValue;
	 }
	
	/**
	 * Is the meta protected by the system
	 * @return bool
	 */
	 getIsProtected() {
	 	return this.isProtected;
	 }
	
	/**
	 * @param isProtected bool Is the meta protected by the system
	 */
	 setIsProtected(isProtected) {
	 	this.isProtected = isProtected;
	 }
	
	/**
	 * The help text of the meta to be displayed on the UI
	 * @return string
	 */
	 getHelpText() {
	 	return this.helpText;
	 }
	
	/**
	 * @param helpText string The help text of the meta to be displayed on the UI
	 */
	 setHelpText(helpText) {
	 	this.helpText = helpText;
	 }
	
	/**
	 * List of supported features
	 * @return string
	 */
	 getFeatures() {
	 	return this.features;
	 }
	
	/**
	 * @param features string List of supported features
	 */
	 setFeatures(features) {
	 	this.features = features;
	 }
	
	/**
	 * Parent meta id
	 * @return string
	 */
	 getParentId() {
	 	return this.parentId;
	 }
	
	/**
	 * @param parentId string Parent meta id
	 */
	 setParentId(parentId) {
	 	this.parentId = parentId;
	 }
	
	/**
	 * Specifies when was the meta created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the meta last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
}
module.exports.Meta = Meta;

/**
 *
 */
class MetaListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetaListResponse';
	}
	
	/**
	 * A list asset meta
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list asset meta
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.MetaListResponse = MetaListResponse;

/**
 *
 */
class DeviceBrand extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeviceBrand';
	}
	
	/**
	 * Device brand identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Device brand name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Device brand name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Device family identifier
	 * @return int
	 */
	 getDeviceFamilyid() {
	 	return this.deviceFamilyid;
	 }
}
module.exports.DeviceBrand = DeviceBrand;

/**
 *
 */
class DeviceBrandListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeviceBrandListResponse';
	}
	
	/**
	 * Device brands
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Device brands
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.DeviceBrandListResponse = DeviceBrandListResponse;

/**
 *
 */
class CountryListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCountryListResponse';
	}
	
	/**
	 * Countries
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Countries
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.CountryListResponse = CountryListResponse;

/**
 *
 */
class OSSAdapterBaseProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOSSAdapterBaseProfile';
	}
	
	/**
	 * OSS adapter id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * OSS adapter name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string OSS adapter name
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.OSSAdapterBaseProfile = OSSAdapterBaseProfile;

/**
 *
 */
class OSSAdapterProfile extends OSSAdapterBaseProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOSSAdapterProfile';
	}
	
	/**
	 * OSS adapter active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool OSS adapter active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * OSS adapter adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string OSS adapter adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * OSS adapter extra parameters
	 * @return map
	 */
	 getOssAdapterSettings() {
	 	return this.ossAdapterSettings;
	 }
	
	/**
	 * @param ossAdapterSettings map OSS adapter extra parameters
	 */
	 setOssAdapterSettings(ossAdapterSettings) {
	 	this.ossAdapterSettings = ossAdapterSettings;
	 }
	
	/**
	 * OSS adapter external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string OSS adapter external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * Shared Secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
}
module.exports.OSSAdapterProfile = OSSAdapterProfile;

/**
 *
 */
class OSSAdapterProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOSSAdapterProfileListResponse';
	}
	
	/**
	 * A list of OSS adapter-profiles
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of OSS adapter-profiles
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.OSSAdapterProfileListResponse = OSSAdapterProfileListResponse;

/**
 *
 */
class SearchHistory extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchHistory';
	}
	
	/**
	 * Search ID
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Search name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * Filter
	 * @return string
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * Search language
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * When search was performed
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Kaltura OTT Service
	 * @return string
	 */
	 getService() {
	 	return this.service;
	 }
	
	/**
	 * Kaltura OTT Service Action
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * Unique Device ID
	 * @return string
	 */
	 getDeviceId() {
	 	return this.deviceId;
	 }
}
module.exports.SearchHistory = SearchHistory;

/**
 *
 */
class SearchHistoryListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchHistoryListResponse';
	}
	
	/**
	 * KalturaSearchHistory Models
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array KalturaSearchHistory Models
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SearchHistoryListResponse = SearchHistoryListResponse;

/**
 *
 */
class DeviceFamilyBase extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeviceFamilyBase';
	}
	
	/**
	 * Device family identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Device family name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Device family name
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.DeviceFamilyBase = DeviceFamilyBase;

/**
 *
 */
class DeviceFamily extends DeviceFamilyBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeviceFamily';
	}
}
module.exports.DeviceFamily = DeviceFamily;

/**
 *
 */
class DeviceFamilyListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeviceFamilyListResponse';
	}
	
	/**
	 * Device families
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Device families
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.DeviceFamilyListResponse = DeviceFamilyListResponse;

/**
 *
 */
class HouseholdDeviceFamilyLimitations extends DeviceFamilyBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdDeviceFamilyLimitations';
	}
	
	/**
	 * Allowed device change frequency code
	 * @return int
	 */
	 getFrequency() {
	 	return this.frequency;
	 }
	
	/**
	 * @param frequency int Allowed device change frequency code
	 */
	 setFrequency(frequency) {
	 	this.frequency = frequency;
	 }
	
	/**
	 * Max number of devices allowed for this family
	 * @return int
	 */
	 getDeviceLimit() {
	 	return this.deviceLimit;
	 }
	
	/**
	 * @param deviceLimit int Max number of devices allowed for this family
	 */
	 setDeviceLimit(deviceLimit) {
	 	this.deviceLimit = deviceLimit;
	 }
	
	/**
	 * Max number of streams allowed for this family
	 * @return int
	 */
	 getConcurrentLimit() {
	 	return this.concurrentLimit;
	 }
	
	/**
	 * @param concurrentLimit int Max number of streams allowed for this family
	 */
	 setConcurrentLimit(concurrentLimit) {
	 	this.concurrentLimit = concurrentLimit;
	 }
}
module.exports.HouseholdDeviceFamilyLimitations = HouseholdDeviceFamilyLimitations;

/**
 *
 */
class RegionalChannel extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegionalChannel';
	}
	
	/**
	 * The identifier of the linear media representing the channel
	 * @return int
	 */
	 getLinearChannelId() {
	 	return this.linearChannelId;
	 }
	
	/**
	 * @param linearChannelId int The identifier of the linear media representing the channel
	 */
	 setLinearChannelId(linearChannelId) {
	 	this.linearChannelId = linearChannelId;
	 }
	
	/**
	 * The number of the channel
	 * @return int
	 */
	 getChannelNumber() {
	 	return this.channelNumber;
	 }
	
	/**
	 * @param channelNumber int The number of the channel
	 */
	 setChannelNumber(channelNumber) {
	 	this.channelNumber = channelNumber;
	 }
}
module.exports.RegionalChannel = RegionalChannel;

/**
 *
 */
class Region extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegion';
	}
	
	/**
	 * Region identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id int Region identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * Region name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Region name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Region external identifier
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string Region external identifier
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Indicates whether this is the default region for the partner
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Indicates whether this is the default region for the partner
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * List of associated linear channels
	 * @return array
	 */
	 getLinearChannels() {
	 	return this.linearChannels;
	 }
	
	/**
	 * @param linearChannels array List of associated linear channels
	 */
	 setLinearChannels(linearChannels) {
	 	this.linearChannels = linearChannels;
	 }
}
module.exports.Region = Region;

/**
 *
 */
class RegionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegionListResponse';
	}
	
	/**
	 * A list of regions
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of regions
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.RegionListResponse = RegionListResponse;

/**
 *
 */
class UserAssetRule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAssetRule';
	}
	
	/**
	 * Unique rule identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Rule type - possible values: Rule type – Parental, Geo, UserType, Device
	 * @return string
	 */
	 getRuleType() {
	 	return this.ruleType;
	 }
	
	/**
	 * @param ruleType string Rule type - possible values: Rule type – Parental, Geo, UserType, Device
	 */
	 setRuleType(ruleType) {
	 	this.ruleType = ruleType;
	 }
	
	/**
	 * Rule display name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Rule display name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Additional description for the specific rule
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Additional description for the specific rule
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.UserAssetRule = UserAssetRule;

/**
 *
 */
class UserAssetRuleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAssetRuleListResponse';
	}
	
	/**
	 * A list of generic rules
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of generic rules
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.UserAssetRuleListResponse = UserAssetRuleListResponse;

/**
 *
 */
class CDNAdapterProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCDNAdapterProfile';
	}
	
	/**
	 * CDN adapter identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * CDNR adapter name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string CDNR adapter name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * CDN adapter active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool CDN adapter active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * CDN adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string CDN adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * CDN adapter base URL
	 * @return string
	 */
	 getBaseUrl() {
	 	return this.baseUrl;
	 }
	
	/**
	 * @param baseUrl string CDN adapter base URL
	 */
	 setBaseUrl(baseUrl) {
	 	this.baseUrl = baseUrl;
	 }
	
	/**
	 * CDN adapter settings
	 * @return map
	 */
	 getSettings() {
	 	return this.settings;
	 }
	
	/**
	 * @param settings map CDN adapter settings
	 */
	 setSettings(settings) {
	 	this.settings = settings;
	 }
	
	/**
	 * CDN adapter alias
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string CDN adapter alias
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * CDN shared secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
}
module.exports.CDNAdapterProfile = CDNAdapterProfile;

/**
 *
 */
class CDNAdapterProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCDNAdapterProfileListResponse';
	}
	
	/**
	 * Adapters
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Adapters
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.CDNAdapterProfileListResponse = CDNAdapterProfileListResponse;

/**
 *
 */
class ExportTask extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExportTask';
	}
	
	/**
	 * Task identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Alias for the task used to solicit an export using API
	 * @return string
	 */
	 getAlias() {
	 	return this.alias;
	 }
	
	/**
	 * @param alias string Alias for the task used to solicit an export using API
	 */
	 setAlias(alias) {
	 	this.alias = alias;
	 }
	
	/**
	 * Task display name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Task display name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The data type exported in this task
	 * @return string
	 */
	 getDataType() {
	 	return this.dataType;
	 }
	
	/**
	 * @param dataType string The data type exported in this task
	 */
	 setDataType(dataType) {
	 	this.dataType = dataType;
	 }
	
	/**
	 * Filter to apply on the export, utilize KSQL.
 * Note: KSQL currently applies to media assets only. It cannot be used for USERS filtering
	 * @return string
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * @param filter string Filter to apply on the export, utilize KSQL.
 * Note: KSQL currently applies to media assets only. It cannot be used for USERS filtering
	 */
	 setFilter(filter) {
	 	this.filter = filter;
	 }
	
	/**
	 * Type of export batch – full or incremental
	 * @return string
	 */
	 getExportType() {
	 	return this.exportType;
	 }
	
	/**
	 * @param exportType string Type of export batch – full or incremental
	 */
	 setExportType(exportType) {
	 	this.exportType = exportType;
	 }
	
	/**
	 * How often the export should occur, reasonable minimum threshold should apply, configurable in minutes
	 * @return int
	 */
	 getFrequency() {
	 	return this.frequency;
	 }
	
	/**
	 * @param frequency int How often the export should occur, reasonable minimum threshold should apply, configurable in minutes
	 */
	 setFrequency(frequency) {
	 	this.frequency = frequency;
	 }
	
	/**
	 * The URL for sending a notification when the task&#39;s export process is done
	 * @return string
	 */
	 getNotificationUrl() {
	 	return this.notificationUrl;
	 }
	
	/**
	 * @param notificationUrl string The URL for sending a notification when the task&#39;s export process is done
	 */
	 setNotificationUrl(notificationUrl) {
	 	this.notificationUrl = notificationUrl;
	 }
	
	/**
	 * Indicates if the task is active or not
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool Indicates if the task is active or not
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
}
module.exports.ExportTask = ExportTask;

/**
 *
 */
class ExportTaskListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExportTaskListResponse';
	}
	
	/**
	 * Export task items
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Export task items
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ExportTaskListResponse = ExportTaskListResponse;

/**
 *
 */
class ChannelEnrichmentHolder extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannelEnrichmentHolder';
	}
	
	/**
	 * Enrichment type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Enrichment type
	 */
	 setType(type) {
	 	this.type = type;
	 }
}
module.exports.ChannelEnrichmentHolder = ChannelEnrichmentHolder;

/**
 *
 */
class ExternalChannelProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalChannelProfile';
	}
	
	/**
	 * External channel id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * External channel name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string External channel name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * External channel active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool External channel active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * External channel external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string External channel external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * Filter expression
	 * @return string
	 */
	 getFilterExpression() {
	 	return this.filterExpression;
	 }
	
	/**
	 * @param filterExpression string Filter expression
	 */
	 setFilterExpression(filterExpression) {
	 	this.filterExpression = filterExpression;
	 }
	
	/**
	 * Recommendation engine id
	 * @return int
	 */
	 getRecommendationEngineId() {
	 	return this.recommendationEngineId;
	 }
	
	/**
	 * @param recommendationEngineId int Recommendation engine id
	 */
	 setRecommendationEngineId(recommendationEngineId) {
	 	this.recommendationEngineId = recommendationEngineId;
	 }
	
	/**
	 * Enrichments
	 * @return array
	 */
	 getEnrichments() {
	 	return this.enrichments;
	 }
	
	/**
	 * @param enrichments array Enrichments
	 */
	 setEnrichments(enrichments) {
	 	this.enrichments = enrichments;
	 }
}
module.exports.ExternalChannelProfile = ExternalChannelProfile;

/**
 *
 */
class ExternalChannelProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalChannelProfileListResponse';
	}
	
	/**
	 * External channel profiles
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array External channel profiles
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ExternalChannelProfileListResponse = ExternalChannelProfileListResponse;

/**
 *
 */
class RecommendationProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecommendationProfile';
	}
	
	/**
	 * recommendation engine id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * recommendation engine name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string recommendation engine name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * recommendation engine is active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool recommendation engine is active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * recommendation engine adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string recommendation engine adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * recommendation engine extra parameters
	 * @return map
	 */
	 getRecommendationEngineSettings() {
	 	return this.recommendationEngineSettings;
	 }
	
	/**
	 * @param recommendationEngineSettings map recommendation engine extra parameters
	 */
	 setRecommendationEngineSettings(recommendationEngineSettings) {
	 	this.recommendationEngineSettings = recommendationEngineSettings;
	 }
	
	/**
	 * recommendation engine external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string recommendation engine external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * Shared Secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
}
module.exports.RecommendationProfile = RecommendationProfile;

/**
 *
 */
class RecommendationProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecommendationProfileListResponse';
	}
	
	/**
	 * Recommendation profiles list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Recommendation profiles list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.RecommendationProfileListResponse = RecommendationProfileListResponse;

/**
 *
 */
class RegistrySettings extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegistrySettings';
	}
	
	/**
	 * Permission item identifier
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string Permission item identifier
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * Permission item name
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Permission item name
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.RegistrySettings = RegistrySettings;

/**
 *
 */
class RegistrySettingsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegistrySettingsListResponse';
	}
	
	/**
	 * Registry settings list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Registry settings list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.RegistrySettingsListResponse = RegistrySettingsListResponse;

/**
 *
 */
class ParentalRule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaParentalRule';
	}
	
	/**
	 * Unique parental rule identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Rule display name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Rule display name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Explanatory description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Explanatory description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Rule order within the full list of rules
	 * @return int
	 */
	 getOrder() {
	 	return this.order;
	 }
	
	/**
	 * @param order int Rule order within the full list of rules
	 */
	 setOrder(order) {
	 	this.order = order;
	 }
	
	/**
	 * Media asset tag ID to in which to look for corresponding trigger values
	 * @return int
	 */
	 getMediaTag() {
	 	return this.mediaTag;
	 }
	
	/**
	 * @param mediaTag int Media asset tag ID to in which to look for corresponding trigger values
	 */
	 setMediaTag(mediaTag) {
	 	this.mediaTag = mediaTag;
	 }
	
	/**
	 * EPG asset tag ID to in which to look for corresponding trigger values
	 * @return int
	 */
	 getEpgTag() {
	 	return this.epgTag;
	 }
	
	/**
	 * @param epgTag int EPG asset tag ID to in which to look for corresponding trigger values
	 */
	 setEpgTag(epgTag) {
	 	this.epgTag = epgTag;
	 }
	
	/**
	 * Content that correspond to this rule is not available for guests
	 * @return bool
	 */
	 getBlockAnonymousAccess() {
	 	return this.blockAnonymousAccess;
	 }
	
	/**
	 * @param blockAnonymousAccess bool Content that correspond to this rule is not available for guests
	 */
	 setBlockAnonymousAccess(blockAnonymousAccess) {
	 	this.blockAnonymousAccess = blockAnonymousAccess;
	 }
	
	/**
	 * Rule type – Movies, TV series or both
	 * @return string
	 */
	 getRuleType() {
	 	return this.ruleType;
	 }
	
	/**
	 * @param ruleType string Rule type – Movies, TV series or both
	 */
	 setRuleType(ruleType) {
	 	this.ruleType = ruleType;
	 }
	
	/**
	 * Media tag values that trigger rule
	 * @return array
	 */
	 getMediaTagValues() {
	 	return this.mediaTagValues;
	 }
	
	/**
	 * @param mediaTagValues array Media tag values that trigger rule
	 */
	 setMediaTagValues(mediaTagValues) {
	 	this.mediaTagValues = mediaTagValues;
	 }
	
	/**
	 * EPG tag values that trigger rule
	 * @return array
	 */
	 getEpgTagValues() {
	 	return this.epgTagValues;
	 }
	
	/**
	 * @param epgTagValues array EPG tag values that trigger rule
	 */
	 setEpgTagValues(epgTagValues) {
	 	this.epgTagValues = epgTagValues;
	 }
	
	/**
	 * Is the rule the default rule of the account
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * Where was this rule defined account, household or user
	 * @return string
	 */
	 getOrigin() {
	 	return this.origin;
	 }
	
	/**
	 * active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * Specifies when was the parental rule created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the parental rule last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
}
module.exports.ParentalRule = ParentalRule;

/**
 *
 */
class ParentalRuleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaParentalRuleListResponse';
	}
	
	/**
	 * A list of parental rules
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of parental rules
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ParentalRuleListResponse = ParentalRuleListResponse;

/**
 *
 */
class UserRole extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRole';
	}
	
	/**
	 * User role identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * User role name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string User role name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * permissions associated with the user role
	 * @return string
	 */
	 getPermissionNames() {
	 	return this.permissionNames;
	 }
	
	/**
	 * @param permissionNames string permissions associated with the user role
	 */
	 setPermissionNames(permissionNames) {
	 	this.permissionNames = permissionNames;
	 }
	
	/**
	 * permissions associated with the user role in is_exclueded = true
	 * @return string
	 */
	 getExcludedPermissionNames() {
	 	return this.excludedPermissionNames;
	 }
	
	/**
	 * @param excludedPermissionNames string permissions associated with the user role in is_exclueded = true
	 */
	 setExcludedPermissionNames(excludedPermissionNames) {
	 	this.excludedPermissionNames = excludedPermissionNames;
	 }
}
module.exports.UserRole = UserRole;

/**
 *
 */
class UserRoleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRoleListResponse';
	}
	
	/**
	 * A list of generic rules
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of generic rules
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.UserRoleListResponse = UserRoleListResponse;

/**
 *
 */
class ClientConfiguration extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaClientConfiguration';
	}
	
	/**
	 * Client Tag
	 * @return string
	 */
	 getClientTag() {
	 	return this.clientTag;
	 }
	
	/**
	 * @param clientTag string Client Tag
	 */
	 setClientTag(clientTag) {
	 	this.clientTag = clientTag;
	 }
	
	/**
	 * API client version
	 * @return string
	 */
	 getApiVersion() {
	 	return this.apiVersion;
	 }
	
	/**
	 * @param apiVersion string API client version
	 */
	 setApiVersion(apiVersion) {
	 	this.apiVersion = apiVersion;
	 }
}
module.exports.ClientConfiguration = ClientConfiguration;

/**
 *
 */
class BaseResponseProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseResponseProfile';
	}
}
module.exports.BaseResponseProfile = BaseResponseProfile;

/**
 *
 */
class SkipCondition extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSkipCondition';
	}
}
module.exports.SkipCondition = SkipCondition;

/**
 *
 */
class RequestConfiguration extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRequestConfiguration';
	}
	
	/**
	 * Impersonated partner id
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int Impersonated partner id
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * Impersonated user id
	 * @return int
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId int Impersonated user id
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * Content language
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string Content language
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * Currency to be used
	 * @return string
	 */
	 getCurrency() {
	 	return this.currency;
	 }
	
	/**
	 * @param currency string Currency to be used
	 */
	 setCurrency(currency) {
	 	this.currency = currency;
	 }
	
	/**
	 * Kaltura API session
	 * @return string
	 */
	 getKs() {
	 	return this.ks;
	 }
	
	/**
	 * @param ks string Kaltura API session
	 */
	 setKs(ks) {
	 	this.ks = ks;
	 }
	
	/**
	 * Kaltura response profile object
	 * @return BaseResponseProfile
	 */
	 getResponseProfile() {
	 	return this.responseProfile;
	 }
	
	/**
	 * @param responseProfile BaseResponseProfile Kaltura response profile object
	 */
	 setResponseProfile(responseProfile) {
	 	this.responseProfile = responseProfile;
	 }
	
	/**
	 * Abort the Multireuqset call if any error occurs in one of the requests
	 * @return bool
	 */
	 getAbortOnError() {
	 	return this.abortOnError;
	 }
	
	/**
	 * @param abortOnError bool Abort the Multireuqset call if any error occurs in one of the requests
	 */
	 setAbortOnError(abortOnError) {
	 	this.abortOnError = abortOnError;
	 }
	
	/**
	 * Abort all following requests in Multireuqset if current request has an error
	 * @return bool
	 */
	 getAbortAllOnError() {
	 	return this.abortAllOnError;
	 }
	
	/**
	 * @param abortAllOnError bool Abort all following requests in Multireuqset if current request has an error
	 */
	 setAbortAllOnError(abortAllOnError) {
	 	this.abortAllOnError = abortAllOnError;
	 }
	
	/**
	 * Skip current request according to skip condition
	 * @return SkipCondition
	 */
	 getSkipCondition() {
	 	return this.skipCondition;
	 }
	
	/**
	 * @param skipCondition SkipCondition Skip current request according to skip condition
	 */
	 setSkipCondition(skipCondition) {
	 	this.skipCondition = skipCondition;
	 }
}
module.exports.RequestConfiguration = RequestConfiguration;

/**
 *
 */
class Filter extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFilter';
	}
	
	/**
	 * order by
	 * @return string
	 */
	 getOrderBy() {
	 	return this.orderBy;
	 }
	
	/**
	 * @param orderBy string order by
	 */
	 setOrderBy(orderBy) {
	 	this.orderBy = orderBy;
	 }
}
module.exports.Filter = Filter;

/**
 *
 */
class DetachedResponseProfile extends BaseResponseProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDetachedResponseProfile';
	}
	
	/**
	 * name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * filter
	 * @return RelatedObjectFilter
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * @param filter RelatedObjectFilter filter
	 */
	 setFilter(filter) {
	 	this.filter = filter;
	 }
	
	/**
	 * relatedProfiles
	 * @return array
	 */
	 getRelatedProfiles() {
	 	return this.relatedProfiles;
	 }
	
	/**
	 * @param relatedProfiles array relatedProfiles
	 */
	 setRelatedProfiles(relatedProfiles) {
	 	this.relatedProfiles = relatedProfiles;
	 }
}
module.exports.DetachedResponseProfile = DetachedResponseProfile;

/**
 *
 */
class RelatedObjectFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRelatedObjectFilter';
	}
}
module.exports.RelatedObjectFilter = RelatedObjectFilter;

/**
 *
 */
class SocialCommentFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialCommentFilter';
	}
	
	/**
	 * Asset ID to filter by
	 * @return int
	 */
	 getAssetIdEqual() {
	 	return this.assetIdEqual;
	 }
	
	/**
	 * @param assetIdEqual int Asset ID to filter by
	 */
	 setAssetIdEqual(assetIdEqual) {
	 	this.assetIdEqual = assetIdEqual;
	 }
	
	/**
	 * Asset type to filter by, currently only VOD (media)
	 * @return string
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual string Asset type to filter by, currently only VOD (media)
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
	
	/**
	 * Comma separated list of social actions to filter by
	 * @return string
	 */
	 getSocialPlatformEqual() {
	 	return this.socialPlatformEqual;
	 }
	
	/**
	 * @param socialPlatformEqual string Comma separated list of social actions to filter by
	 */
	 setSocialPlatformEqual(socialPlatformEqual) {
	 	this.socialPlatformEqual = socialPlatformEqual;
	 }
	
	/**
	 * The create date from which to get the comments
	 * @return int
	 */
	 getCreateDateGreaterThan() {
	 	return this.createDateGreaterThan;
	 }
	
	/**
	 * @param createDateGreaterThan int The create date from which to get the comments
	 */
	 setCreateDateGreaterThan(createDateGreaterThan) {
	 	this.createDateGreaterThan = createDateGreaterThan;
	 }
}
module.exports.SocialCommentFilter = SocialCommentFilter;

/**
 *
 */
class SocialFriendActivityFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialFriendActivityFilter';
	}
	
	/**
	 * Asset ID to filter by
	 * @return int
	 */
	 getAssetIdEqual() {
	 	return this.assetIdEqual;
	 }
	
	/**
	 * @param assetIdEqual int Asset ID to filter by
	 */
	 setAssetIdEqual(assetIdEqual) {
	 	this.assetIdEqual = assetIdEqual;
	 }
	
	/**
	 * Asset type to filter by, currently only VOD (media)
	 * @return string
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual string Asset type to filter by, currently only VOD (media)
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
	
	/**
	 * Comma separated list of social actions to filter by
	 * @return string
	 */
	 getActionTypeIn() {
	 	return this.actionTypeIn;
	 }
	
	/**
	 * @param actionTypeIn string Comma separated list of social actions to filter by
	 */
	 setActionTypeIn(actionTypeIn) {
	 	this.actionTypeIn = actionTypeIn;
	 }
}
module.exports.SocialFriendActivityFilter = SocialFriendActivityFilter;

/**
 *
 */
class SocialActionFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialActionFilter';
	}
	
	/**
	 * Comma separated list of asset identifiers
	 * @return string
	 */
	 getAssetIdIn() {
	 	return this.assetIdIn;
	 }
	
	/**
	 * @param assetIdIn string Comma separated list of asset identifiers
	 */
	 setAssetIdIn(assetIdIn) {
	 	this.assetIdIn = assetIdIn;
	 }
	
	/**
	 * Asset Type
	 * @return string
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual string Asset Type
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
	
	/**
	 * Comma separated list of social actions to filter by
	 * @return string
	 */
	 getActionTypeIn() {
	 	return this.actionTypeIn;
	 }
	
	/**
	 * @param actionTypeIn string Comma separated list of social actions to filter by
	 */
	 setActionTypeIn(actionTypeIn) {
	 	this.actionTypeIn = actionTypeIn;
	 }
}
module.exports.SocialActionFilter = SocialActionFilter;

/**
 *
 */
class PaymentMethodProfileFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentMethodProfileFilter';
	}
	
	/**
	 * Payment gateway identifier to list the payment methods for
	 * @return int
	 */
	 getPaymentGatewayIdEqual() {
	 	return this.paymentGatewayIdEqual;
	 }
	
	/**
	 * @param paymentGatewayIdEqual int Payment gateway identifier to list the payment methods for
	 */
	 setPaymentGatewayIdEqual(paymentGatewayIdEqual) {
	 	this.paymentGatewayIdEqual = paymentGatewayIdEqual;
	 }
}
module.exports.PaymentMethodProfileFilter = PaymentMethodProfileFilter;

/**
 *
 */
class HouseholdDeviceFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdDeviceFilter';
	}
	
	/**
	 * The identifier of the household
	 * @return int
	 */
	 getHouseholdIdEqual() {
	 	return this.householdIdEqual;
	 }
	
	/**
	 * @param householdIdEqual int The identifier of the household
	 */
	 setHouseholdIdEqual(householdIdEqual) {
	 	this.householdIdEqual = householdIdEqual;
	 }
	
	/**
	 * Device family Ids
	 * @return string
	 */
	 getDeviceFamilyIdIn() {
	 	return this.deviceFamilyIdIn;
	 }
	
	/**
	 * @param deviceFamilyIdIn string Device family Ids
	 */
	 setDeviceFamilyIdIn(deviceFamilyIdIn) {
	 	this.deviceFamilyIdIn = deviceFamilyIdIn;
	 }
}
module.exports.HouseholdDeviceFilter = HouseholdDeviceFilter;

/**
 *
 */
class HouseholdUserFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdUserFilter';
	}
	
	/**
	 * The identifier of the household
	 * @return int
	 */
	 getHouseholdIdEqual() {
	 	return this.householdIdEqual;
	 }
	
	/**
	 * @param householdIdEqual int The identifier of the household
	 */
	 setHouseholdIdEqual(householdIdEqual) {
	 	this.householdIdEqual = householdIdEqual;
	 }
}
module.exports.HouseholdUserFilter = HouseholdUserFilter;

/**
 *
 */
class ConfigurationsFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationsFilter';
	}
	
	/**
	 * the ID of the configuration group for which to return related configurations
	 * @return string
	 */
	 getConfigurationGroupIdEqual() {
	 	return this.configurationGroupIdEqual;
	 }
	
	/**
	 * @param configurationGroupIdEqual string the ID of the configuration group for which to return related configurations
	 */
	 setConfigurationGroupIdEqual(configurationGroupIdEqual) {
	 	this.configurationGroupIdEqual = configurationGroupIdEqual;
	 }
}
module.exports.ConfigurationsFilter = ConfigurationsFilter;

/**
 *
 */
class ReportFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportFilter';
	}
}
module.exports.ReportFilter = ReportFilter;

/**
 *
 */
class DeviceReportFilter extends ReportFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeviceReportFilter';
	}
	
	/**
	 * Filter device configuration later than specific date
	 * @return int
	 */
	 getLastAccessDateGreaterThanOrEqual() {
	 	return this.lastAccessDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param lastAccessDateGreaterThanOrEqual int Filter device configuration later than specific date
	 */
	 setLastAccessDateGreaterThanOrEqual(lastAccessDateGreaterThanOrEqual) {
	 	this.lastAccessDateGreaterThanOrEqual = lastAccessDateGreaterThanOrEqual;
	 }
}
module.exports.DeviceReportFilter = DeviceReportFilter;

/**
 *
 */
class ConfigurationGroupTagFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationGroupTagFilter';
	}
	
	/**
	 * the ID of the configuration group for which to return related configurations group tags
	 * @return string
	 */
	 getConfigurationGroupIdEqual() {
	 	return this.configurationGroupIdEqual;
	 }
	
	/**
	 * @param configurationGroupIdEqual string the ID of the configuration group for which to return related configurations group tags
	 */
	 setConfigurationGroupIdEqual(configurationGroupIdEqual) {
	 	this.configurationGroupIdEqual = configurationGroupIdEqual;
	 }
}
module.exports.ConfigurationGroupTagFilter = ConfigurationGroupTagFilter;

/**
 *
 */
class ConfigurationGroupDeviceFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurationGroupDeviceFilter';
	}
	
	/**
	 * the ID of the configuration group for which to return related configurations group devices
	 * @return string
	 */
	 getConfigurationGroupIdEqual() {
	 	return this.configurationGroupIdEqual;
	 }
	
	/**
	 * @param configurationGroupIdEqual string the ID of the configuration group for which to return related configurations group devices
	 */
	 setConfigurationGroupIdEqual(configurationGroupIdEqual) {
	 	this.configurationGroupIdEqual = configurationGroupIdEqual;
	 }
}
module.exports.ConfigurationGroupDeviceFilter = ConfigurationGroupDeviceFilter;

/**
 *
 */
class FavoriteFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFavoriteFilter';
	}
	
	/**
	 * Media type to filter by the favorite assets
	 * @return int
	 */
	 getMediaTypeEqual() {
	 	return this.mediaTypeEqual;
	 }
	
	/**
	 * @param mediaTypeEqual int Media type to filter by the favorite assets
	 */
	 setMediaTypeEqual(mediaTypeEqual) {
	 	this.mediaTypeEqual = mediaTypeEqual;
	 }
	
	/**
	 * Media identifiers from which to filter the favorite assets
	 * @return string
	 */
	 getMediaIdIn() {
	 	return this.mediaIdIn;
	 }
	
	/**
	 * @param mediaIdIn string Media identifiers from which to filter the favorite assets
	 */
	 setMediaIdIn(mediaIdIn) {
	 	this.mediaIdIn = mediaIdIn;
	 }
	
	/**
	 * Indicates whether the results should be filtered by origin UDID using the current
	 * @return bool
	 */
	 getUdidEqualCurrent() {
	 	return this.udidEqualCurrent;
	 }
	
	/**
	 * @param udidEqualCurrent bool Indicates whether the results should be filtered by origin UDID using the current
	 */
	 setUdidEqualCurrent(udidEqualCurrent) {
	 	this.udidEqualCurrent = udidEqualCurrent;
	 }
}
module.exports.FavoriteFilter = FavoriteFilter;

/**
 *
 */
class OTTUserFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTUserFilter';
	}
	
	/**
	 * Username
	 * @return string
	 */
	 getUsernameEqual() {
	 	return this.usernameEqual;
	 }
	
	/**
	 * @param usernameEqual string Username
	 */
	 setUsernameEqual(usernameEqual) {
	 	this.usernameEqual = usernameEqual;
	 }
	
	/**
	 * User external identifier
	 * @return string
	 */
	 getExternalIdEqual() {
	 	return this.externalIdEqual;
	 }
	
	/**
	 * @param externalIdEqual string User external identifier
	 */
	 setExternalIdEqual(externalIdEqual) {
	 	this.externalIdEqual = externalIdEqual;
	 }
	
	/**
	 * List of user identifiers separated by &#39;,&#39;
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string List of user identifiers separated by &#39;,&#39;
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * Comma separated list of role Ids
	 * @return string
	 */
	 getRoleIdsIn() {
	 	return this.roleIdsIn;
	 }
	
	/**
	 * @param roleIdsIn string Comma separated list of role Ids
	 */
	 setRoleIdsIn(roleIdsIn) {
	 	this.roleIdsIn = roleIdsIn;
	 }
}
module.exports.OTTUserFilter = OTTUserFilter;

/**
 *
 */
class PersonalListFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersonalListFilter';
	}
	
	/**
	 * Comma separated list of partner list types to search within.
 * If omitted – all types should be included
	 * @return string
	 */
	 getPartnerListTypeIn() {
	 	return this.partnerListTypeIn;
	 }
	
	/**
	 * @param partnerListTypeIn string Comma separated list of partner list types to search within.
 * If omitted – all types should be included
	 */
	 setPartnerListTypeIn(partnerListTypeIn) {
	 	this.partnerListTypeIn = partnerListTypeIn;
	 }
}
module.exports.PersonalListFilter = PersonalListFilter;

/**
 *
 */
class EngagementFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEngagementFilter';
	}
	
	/**
	 * List of inbox message types to search within
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string List of inbox message types to search within
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * SendTime GreaterThanOrEqual
	 * @return int
	 */
	 getSendTimeGreaterThanOrEqual() {
	 	return this.sendTimeGreaterThanOrEqual;
	 }
	
	/**
	 * @param sendTimeGreaterThanOrEqual int SendTime GreaterThanOrEqual
	 */
	 setSendTimeGreaterThanOrEqual(sendTimeGreaterThanOrEqual) {
	 	this.sendTimeGreaterThanOrEqual = sendTimeGreaterThanOrEqual;
	 }
}
module.exports.EngagementFilter = EngagementFilter;

/**
 *
 */
class ReminderFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReminderFilter';
	}
}
module.exports.ReminderFilter = ReminderFilter;

/**
 *
 */
class AssetReminderFilter extends ReminderFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetReminderFilter';
	}
}
module.exports.AssetReminderFilter = AssetReminderFilter;

/**
 *
 */
class SeriesReminderFilter extends ReminderFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSeriesReminderFilter';
	}
	
	/**
	 * Comma separated series IDs
	 * @return string
	 */
	 getSeriesIdIn() {
	 	return this.seriesIdIn;
	 }
	
	/**
	 * @param seriesIdIn string Comma separated series IDs
	 */
	 setSeriesIdIn(seriesIdIn) {
	 	this.seriesIdIn = seriesIdIn;
	 }
	
	/**
	 * EPG channel ID
	 * @return int
	 */
	 getEpgChannelIdEqual() {
	 	return this.epgChannelIdEqual;
	 }
	
	/**
	 * @param epgChannelIdEqual int EPG channel ID
	 */
	 setEpgChannelIdEqual(epgChannelIdEqual) {
	 	this.epgChannelIdEqual = epgChannelIdEqual;
	 }
}
module.exports.SeriesReminderFilter = SeriesReminderFilter;

/**
 *
 */
class SeasonsReminderFilter extends ReminderFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSeasonsReminderFilter';
	}
	
	/**
	 * Series ID
	 * @return string
	 */
	 getSeriesIdEqual() {
	 	return this.seriesIdEqual;
	 }
	
	/**
	 * @param seriesIdEqual string Series ID
	 */
	 setSeriesIdEqual(seriesIdEqual) {
	 	this.seriesIdEqual = seriesIdEqual;
	 }
	
	/**
	 * Comma separated season numbers
	 * @return string
	 */
	 getSeasonNumberIn() {
	 	return this.seasonNumberIn;
	 }
	
	/**
	 * @param seasonNumberIn string Comma separated season numbers
	 */
	 setSeasonNumberIn(seasonNumberIn) {
	 	this.seasonNumberIn = seasonNumberIn;
	 }
	
	/**
	 * EPG channel ID
	 * @return int
	 */
	 getEpgChannelIdEqual() {
	 	return this.epgChannelIdEqual;
	 }
	
	/**
	 * @param epgChannelIdEqual int EPG channel ID
	 */
	 setEpgChannelIdEqual(epgChannelIdEqual) {
	 	this.epgChannelIdEqual = epgChannelIdEqual;
	 }
}
module.exports.SeasonsReminderFilter = SeasonsReminderFilter;

/**
 *
 */
class FollowTvSeriesFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFollowTvSeriesFilter';
	}
}
module.exports.FollowTvSeriesFilter = FollowTvSeriesFilter;

/**
 *
 */
class InboxMessageFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaInboxMessageFilter';
	}
	
	/**
	 * List of inbox message types to search within
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string List of inbox message types to search within
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * createdAtGreaterThanOrEqual
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int createdAtGreaterThanOrEqual
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * createdAtLessThanOrEqual
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int createdAtLessThanOrEqual
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
}
module.exports.InboxMessageFilter = InboxMessageFilter;

/**
 *
 */
class AnnouncementFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnnouncementFilter';
	}
}
module.exports.AnnouncementFilter = AnnouncementFilter;

/**
 *
 */
class PersonalFeedFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersonalFeedFilter';
	}
}
module.exports.PersonalFeedFilter = PersonalFeedFilter;

/**
 *
 */
class TopicFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTopicFilter';
	}
}
module.exports.TopicFilter = TopicFilter;

/**
 *
 */
class PartnerConfigurationFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartnerConfigurationFilter';
	}
	
	/**
	 * Indicates which partner configuration list to return
	 * @return string
	 */
	 getPartnerConfigurationTypeEqual() {
	 	return this.partnerConfigurationTypeEqual;
	 }
	
	/**
	 * @param partnerConfigurationTypeEqual string Indicates which partner configuration list to return
	 */
	 setPartnerConfigurationTypeEqual(partnerConfigurationTypeEqual) {
	 	this.partnerConfigurationTypeEqual = partnerConfigurationTypeEqual;
	 }
}
module.exports.PartnerConfigurationFilter = PartnerConfigurationFilter;

/**
 *
 */
class AggregationCountFilter extends RelatedObjectFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAggregationCountFilter';
	}
}
module.exports.AggregationCountFilter = AggregationCountFilter;

/**
 *
 */
class PersistedFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersistedFilter';
	}
	
	/**
	 * Name for the presisted filter. If empty, no action will be done. If has value, the filter will be saved and persisted in user&#39;s search history
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Name for the presisted filter. If empty, no action will be done. If has value, the filter will be saved and persisted in user&#39;s search history
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.PersistedFilter = PersistedFilter;

/**
 *
 */
class BulkFilter extends PersistedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkFilter';
	}
	
	/**
	 * dynamicOrderBy - order by Meta
	 * @return string
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual string dynamicOrderBy - order by Meta
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
}
module.exports.BulkFilter = BulkFilter;

/**
 *
 */
class AssetFilter extends PersistedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetFilter';
	}
	
	/**
	 * dynamicOrderBy - order by Meta
	 * @return DynamicOrderBy
	 */
	 getDynamicOrderBy() {
	 	return this.dynamicOrderBy;
	 }
	
	/**
	 * @param dynamicOrderBy DynamicOrderBy dynamicOrderBy - order by Meta
	 */
	 setDynamicOrderBy(dynamicOrderBy) {
	 	this.dynamicOrderBy = dynamicOrderBy;
	 }
}
module.exports.AssetFilter = AssetFilter;

/**
 *
 */
class BaseSearchAssetFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseSearchAssetFilter';
	}
	
	/**
	 * Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restricted to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * user_interests - only valid value is &quot;true&quot;. When enabled, only assets that the user defined as his interests (by tags and metas) will return.
 * epg_channel_id – the channel identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;not_entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * asset_type - valid values: &quot;media&quot;, &quot;epg&quot;, &quot;recording&quot; or any number that represents media type in group.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in).
 * For alpha-numerical fields =, != (not), ~ (like), !~, ^ (any word starts with), ^= (phrase starts with), + (exists), !+ (not exists).
 * Logical conjunction: and, or.
 * Search values are limited to 20 characters each for the next operators: ~, !~, ^, ^=
 * (maximum length of entire filter is 4096 characters)
	 * @return string
	 */
	 getKSql() {
	 	return this.kSql;
	 }
	
	/**
	 * @param kSql string Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restricted to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * user_interests - only valid value is &quot;true&quot;. When enabled, only assets that the user defined as his interests (by tags and metas) will return.
 * epg_channel_id – the channel identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;not_entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * asset_type - valid values: &quot;media&quot;, &quot;epg&quot;, &quot;recording&quot; or any number that represents media type in group.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in).
 * For alpha-numerical fields =, != (not), ~ (like), !~, ^ (any word starts with), ^= (phrase starts with), + (exists), !+ (not exists).
 * Logical conjunction: and, or.
 * Search values are limited to 20 characters each for the next operators: ~, !~, ^, ^=
 * (maximum length of entire filter is 4096 characters)
	 */
	 setKSql(kSql) {
	 	this.kSql = kSql;
	 }
	
	/**
	 * groupBy
	 * @return array
	 */
	 getGroupBy() {
	 	return this.groupBy;
	 }
	
	/**
	 * @param groupBy array groupBy
	 */
	 setGroupBy(groupBy) {
	 	this.groupBy = groupBy;
	 }
	
	/**
	 * order by of grouping
	 * @return string
	 */
	 getGroupOrderBy() {
	 	return this.groupOrderBy;
	 }
	
	/**
	 * @param groupOrderBy string order by of grouping
	 */
	 setGroupOrderBy(groupOrderBy) {
	 	this.groupOrderBy = groupOrderBy;
	 }
}
module.exports.BaseSearchAssetFilter = BaseSearchAssetFilter;

/**
 *
 */
class PersonalListSearchFilter extends BaseSearchAssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersonalListSearchFilter';
	}
	
	/**
	 * Comma separated list of partner list types to search within.
 * If omitted – all types should be included
	 * @return string
	 */
	 getPartnerListTypeIn() {
	 	return this.partnerListTypeIn;
	 }
	
	/**
	 * @param partnerListTypeIn string Comma separated list of partner list types to search within.
 * If omitted – all types should be included
	 */
	 setPartnerListTypeIn(partnerListTypeIn) {
	 	this.partnerListTypeIn = partnerListTypeIn;
	 }
}
module.exports.PersonalListSearchFilter = PersonalListSearchFilter;

/**
 *
 */
class SearchAssetFilter extends BaseSearchAssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchAssetFilter';
	}
	
	/**
	 * (Deprecated - use KalturaBaseSearchAssetFilter.kSql)
 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries; 1 - Recordings; Any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string (Deprecated - use KalturaBaseSearchAssetFilter.kSql)
 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries; 1 - Recordings; Any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
}
module.exports.SearchAssetFilter = SearchAssetFilter;

/**
 *
 */
class SearchAssetListFilter extends SearchAssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchAssetListFilter';
	}
	
	/**
	 * Exclude watched asset
	 * @return bool
	 */
	 getExcludeWatched() {
	 	return this.excludeWatched;
	 }
	
	/**
	 * @param excludeWatched bool Exclude watched asset
	 */
	 setExcludeWatched(excludeWatched) {
	 	this.excludeWatched = excludeWatched;
	 }
}
module.exports.SearchAssetListFilter = SearchAssetListFilter;

/**
 *
 */
class ScheduledRecordingProgramFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduledRecordingProgramFilter';
	}
	
	/**
	 * The type of recordings to return
	 * @return string
	 */
	 getRecordingTypeEqual() {
	 	return this.recordingTypeEqual;
	 }
	
	/**
	 * @param recordingTypeEqual string The type of recordings to return
	 */
	 setRecordingTypeEqual(recordingTypeEqual) {
	 	this.recordingTypeEqual = recordingTypeEqual;
	 }
	
	/**
	 * Channels to filter by
	 * @return string
	 */
	 getChannelsIn() {
	 	return this.channelsIn;
	 }
	
	/**
	 * @param channelsIn string Channels to filter by
	 */
	 setChannelsIn(channelsIn) {
	 	this.channelsIn = channelsIn;
	 }
	
	/**
	 * start date
	 * @return int
	 */
	 getStartDateGreaterThanOrNull() {
	 	return this.startDateGreaterThanOrNull;
	 }
	
	/**
	 * @param startDateGreaterThanOrNull int start date
	 */
	 setStartDateGreaterThanOrNull(startDateGreaterThanOrNull) {
	 	this.startDateGreaterThanOrNull = startDateGreaterThanOrNull;
	 }
	
	/**
	 * end date
	 * @return int
	 */
	 getEndDateLessThanOrNull() {
	 	return this.endDateLessThanOrNull;
	 }
	
	/**
	 * @param endDateLessThanOrNull int end date
	 */
	 setEndDateLessThanOrNull(endDateLessThanOrNull) {
	 	this.endDateLessThanOrNull = endDateLessThanOrNull;
	 }
}
module.exports.ScheduledRecordingProgramFilter = ScheduledRecordingProgramFilter;

/**
 *
 */
class BundleFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBundleFilter';
	}
	
	/**
	 * Bundle Id
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int Bundle Id
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * bundleType - possible values: Subscription or Collection
	 * @return string
	 */
	 getBundleTypeEqual() {
	 	return this.bundleTypeEqual;
	 }
	
	/**
	 * @param bundleTypeEqual string bundleType - possible values: Subscription or Collection
	 */
	 setBundleTypeEqual(bundleTypeEqual) {
	 	this.bundleTypeEqual = bundleTypeEqual;
	 }
}
module.exports.BundleFilter = BundleFilter;

/**
 *
 */
class ChannelExternalFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannelExternalFilter';
	}
	
	/**
	 * External Channel Id
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int External Channel Id
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * UtcOffsetEqual
	 * @return float
	 */
	 getUtcOffsetEqual() {
	 	return this.utcOffsetEqual;
	 }
	
	/**
	 * @param utcOffsetEqual float UtcOffsetEqual
	 */
	 setUtcOffsetEqual(utcOffsetEqual) {
	 	this.utcOffsetEqual = utcOffsetEqual;
	 }
	
	/**
	 * FreeTextEqual
	 * @return string
	 */
	 getFreeText() {
	 	return this.freeText;
	 }
	
	/**
	 * @param freeText string FreeTextEqual
	 */
	 setFreeText(freeText) {
	 	this.freeText = freeText;
	 }
}
module.exports.ChannelExternalFilter = ChannelExternalFilter;

/**
 *
 */
class ChannelFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannelFilter';
	}
	
	/**
	 * Channel Id
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int Channel Id
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * ///
 * Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restricted to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * user_interests - only valid value is &quot;true&quot;. When enabled, only assets that the user defined as his interests (by tags and metas) will return.
 * epg_channel_id – the channel identifier of the EPG program. *****Deprecated, please use linear_media_id instead*****
 * linear_media_id – the linear media identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;not_entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * asset_type - valid values: &quot;media&quot;, &quot;epg&quot;, &quot;recording&quot; or any number that represents media type in group.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in).
 * For alpha-numerical fields =, != (not), ~ (like), !~, ^ (any word starts with), ^= (phrase starts with), + (exists), !+ (not exists).
 * Logical conjunction: and, or.
 * Search values are limited to 20 characters each for the next operators: ~, !~, ^, ^=
 * (maximum length of entire filter is 4096 characters)
	 * @return string
	 */
	 getKSql() {
	 	return this.kSql;
	 }
	
	/**
	 * @param kSql string ///
 * Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restricted to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * user_interests - only valid value is &quot;true&quot;. When enabled, only assets that the user defined as his interests (by tags and metas) will return.
 * epg_channel_id – the channel identifier of the EPG program. *****Deprecated, please use linear_media_id instead*****
 * linear_media_id – the linear media identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;not_entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * asset_type - valid values: &quot;media&quot;, &quot;epg&quot;, &quot;recording&quot; or any number that represents media type in group.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in).
 * For alpha-numerical fields =, != (not), ~ (like), !~, ^ (any word starts with), ^= (phrase starts with), + (exists), !+ (not exists).
 * Logical conjunction: and, or.
 * Search values are limited to 20 characters each for the next operators: ~, !~, ^, ^=
 * (maximum length of entire filter is 4096 characters)
	 */
	 setKSql(kSql) {
	 	this.kSql = kSql;
	 }
	
	/**
	 * Exclude watched asset
	 * @return bool
	 */
	 getExcludeWatched() {
	 	return this.excludeWatched;
	 }
	
	/**
	 * @param excludeWatched bool Exclude watched asset
	 */
	 setExcludeWatched(excludeWatched) {
	 	this.excludeWatched = excludeWatched;
	 }
}
module.exports.ChannelFilter = ChannelFilter;

/**
 *
 */
class RelatedFilter extends BaseSearchAssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRelatedFilter';
	}
	
	/**
	 * the ID of the asset for which to return related assets
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int the ID of the asset for which to return related assets
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – same type as the provided asset
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – same type as the provided asset
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * Exclude watched asset
	 * @return bool
	 */
	 getExcludeWatched() {
	 	return this.excludeWatched;
	 }
	
	/**
	 * @param excludeWatched bool Exclude watched asset
	 */
	 setExcludeWatched(excludeWatched) {
	 	this.excludeWatched = excludeWatched;
	 }
}
module.exports.RelatedFilter = RelatedFilter;

/**
 *
 */
class RelatedExternalFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRelatedExternalFilter';
	}
	
	/**
	 * the External ID of the asset for which to return related assets
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int the External ID of the asset for which to return related assets
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * UtcOffsetEqual
	 * @return int
	 */
	 getUtcOffsetEqual() {
	 	return this.utcOffsetEqual;
	 }
	
	/**
	 * @param utcOffsetEqual int UtcOffsetEqual
	 */
	 setUtcOffsetEqual(utcOffsetEqual) {
	 	this.utcOffsetEqual = utcOffsetEqual;
	 }
	
	/**
	 * FreeText
	 * @return string
	 */
	 getFreeText() {
	 	return this.freeText;
	 }
	
	/**
	 * @param freeText string FreeText
	 */
	 setFreeText(freeText) {
	 	this.freeText = freeText;
	 }
}
module.exports.RelatedExternalFilter = RelatedExternalFilter;

/**
 *
 */
class SearchExternalFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchExternalFilter';
	}
	
	/**
	 * Query
	 * @return string
	 */
	 getQuery() {
	 	return this.query;
	 }
	
	/**
	 * @param query string Query
	 */
	 setQuery(query) {
	 	this.query = query;
	 }
	
	/**
	 * UtcOffsetEqual
	 * @return int
	 */
	 getUtcOffsetEqual() {
	 	return this.utcOffsetEqual;
	 }
	
	/**
	 * @param utcOffsetEqual int UtcOffsetEqual
	 */
	 setUtcOffsetEqual(utcOffsetEqual) {
	 	this.utcOffsetEqual = utcOffsetEqual;
	 }
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
}
module.exports.SearchExternalFilter = SearchExternalFilter;

/**
 *
 */
class SegmentationTypeFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSegmentationTypeFilter';
	}
	
	/**
	 * Comma separated segmentation types identifieridentifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated segmentation types identifieridentifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
}
module.exports.SegmentationTypeFilter = SegmentationTypeFilter;

/**
 *
 */
class UserSegmentFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserSegmentFilter';
	}
	
	/**
	 * User ID
	 * @return string
	 */
	 getUserIdEqual() {
	 	return this.userIdEqual;
	 }
	
	/**
	 * @param userIdEqual string User ID
	 */
	 setUserIdEqual(userIdEqual) {
	 	this.userIdEqual = userIdEqual;
	 }
}
module.exports.UserSegmentFilter = UserSegmentFilter;

/**
 *
 */
class PpvFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPpvFilter';
	}
	
	/**
	 * Comma separated identifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated identifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
}
module.exports.PpvFilter = PpvFilter;

/**
 *
 */
class AssetFilePpvFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetFilePpvFilter';
	}
	
	/**
	 * Filter Asset file ppvs that contain a specific asset id
	 * @return int
	 */
	 getAssetIdEqual() {
	 	return this.assetIdEqual;
	 }
	
	/**
	 * @param assetIdEqual int Filter Asset file ppvs that contain a specific asset id
	 */
	 setAssetIdEqual(assetIdEqual) {
	 	this.assetIdEqual = assetIdEqual;
	 }
	
	/**
	 * Filter Asset file ppvs that contain a specific asset file id
	 * @return int
	 */
	 getAssetFileIdEqual() {
	 	return this.assetFileIdEqual;
	 }
	
	/**
	 * @param assetFileIdEqual int Filter Asset file ppvs that contain a specific asset file id
	 */
	 setAssetFileIdEqual(assetFileIdEqual) {
	 	this.assetFileIdEqual = assetFileIdEqual;
	 }
}
module.exports.AssetFilePpvFilter = AssetFilePpvFilter;

/**
 *
 */
class CollectionFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCollectionFilter';
	}
	
	/**
	 * Comma separated collection IDs
	 * @return string
	 */
	 getCollectionIdIn() {
	 	return this.collectionIdIn;
	 }
	
	/**
	 * @param collectionIdIn string Comma separated collection IDs
	 */
	 setCollectionIdIn(collectionIdIn) {
	 	this.collectionIdIn = collectionIdIn;
	 }
	
	/**
	 * Media-file ID to get the subscriptions by
	 * @return int
	 */
	 getMediaFileIdEqual() {
	 	return this.mediaFileIdEqual;
	 }
	
	/**
	 * @param mediaFileIdEqual int Media-file ID to get the subscriptions by
	 */
	 setMediaFileIdEqual(mediaFileIdEqual) {
	 	this.mediaFileIdEqual = mediaFileIdEqual;
	 }
}
module.exports.CollectionFilter = CollectionFilter;

/**
 *
 */
class DiscountDetailsFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDiscountDetailsFilter';
	}
	
	/**
	 * Comma separated discount codes
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated discount codes
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
}
module.exports.DiscountDetailsFilter = DiscountDetailsFilter;

/**
 *
 */
class PricePlanFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPricePlanFilter';
	}
	
	/**
	 * Comma separated price plans identifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated price plans identifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
}
module.exports.PricePlanFilter = PricePlanFilter;

/**
 *
 */
class PriceDetailsFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPriceDetailsFilter';
	}
	
	/**
	 * Comma separated price identifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated price identifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
}
module.exports.PriceDetailsFilter = PriceDetailsFilter;

/**
 *
 */
class SubscriptionSetFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionSetFilter';
	}
	
	/**
	 * Comma separated identifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated identifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * Comma separated subscription identifiers
	 * @return string
	 */
	 getSubscriptionIdContains() {
	 	return this.subscriptionIdContains;
	 }
	
	/**
	 * @param subscriptionIdContains string Comma separated subscription identifiers
	 */
	 setSubscriptionIdContains(subscriptionIdContains) {
	 	this.subscriptionIdContains = subscriptionIdContains;
	 }
	
	/**
	 * Subscription Type
	 * @return string
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual string Subscription Type
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
}
module.exports.SubscriptionSetFilter = SubscriptionSetFilter;

/**
 *
 */
class SubscriptionDependencySetFilter extends SubscriptionSetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionDependencySetFilter';
	}
	
	/**
	 * Comma separated identifiers
	 * @return string
	 */
	 getBaseSubscriptionIdIn() {
	 	return this.baseSubscriptionIdIn;
	 }
	
	/**
	 * @param baseSubscriptionIdIn string Comma separated identifiers
	 */
	 setBaseSubscriptionIdIn(baseSubscriptionIdIn) {
	 	this.baseSubscriptionIdIn = baseSubscriptionIdIn;
	 }
}
module.exports.SubscriptionDependencySetFilter = SubscriptionDependencySetFilter;

/**
 *
 */
class SubscriptionFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionFilter';
	}
	
	/**
	 * Comma separated subscription IDs to get the subscriptions by
	 * @return string
	 */
	 getSubscriptionIdIn() {
	 	return this.subscriptionIdIn;
	 }
	
	/**
	 * @param subscriptionIdIn string Comma separated subscription IDs to get the subscriptions by
	 */
	 setSubscriptionIdIn(subscriptionIdIn) {
	 	this.subscriptionIdIn = subscriptionIdIn;
	 }
	
	/**
	 * Media-file ID to get the subscriptions by
	 * @return int
	 */
	 getMediaFileIdEqual() {
	 	return this.mediaFileIdEqual;
	 }
	
	/**
	 * @param mediaFileIdEqual int Media-file ID to get the subscriptions by
	 */
	 setMediaFileIdEqual(mediaFileIdEqual) {
	 	this.mediaFileIdEqual = mediaFileIdEqual;
	 }
	
	/**
	 * Comma separated subscription external IDs to get the subscriptions by
	 * @return string
	 */
	 getExternalIdIn() {
	 	return this.externalIdIn;
	 }
	
	/**
	 * @param externalIdIn string Comma separated subscription external IDs to get the subscriptions by
	 */
	 setExternalIdIn(externalIdIn) {
	 	this.externalIdIn = externalIdIn;
	 }
}
module.exports.SubscriptionFilter = SubscriptionFilter;

/**
 *
 */
class SeriesRecordingFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSeriesRecordingFilter';
	}
}
module.exports.SeriesRecordingFilter = SeriesRecordingFilter;

/**
 *
 */
class ProductPriceFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProductPriceFilter';
	}
	
	/**
	 * Comma separated subscriptions identifiers
	 * @return string
	 */
	 getSubscriptionIdIn() {
	 	return this.subscriptionIdIn;
	 }
	
	/**
	 * @param subscriptionIdIn string Comma separated subscriptions identifiers
	 */
	 setSubscriptionIdIn(subscriptionIdIn) {
	 	this.subscriptionIdIn = subscriptionIdIn;
	 }
	
	/**
	 * Comma separated media files identifiers
	 * @return string
	 */
	 getFileIdIn() {
	 	return this.fileIdIn;
	 }
	
	/**
	 * @param fileIdIn string Comma separated media files identifiers
	 */
	 setFileIdIn(fileIdIn) {
	 	this.fileIdIn = fileIdIn;
	 }
	
	/**
	 * Comma separated collections identifiers
	 * @return string
	 */
	 getCollectionIdIn() {
	 	return this.collectionIdIn;
	 }
	
	/**
	 * @param collectionIdIn string Comma separated collections identifiers
	 */
	 setCollectionIdIn(collectionIdIn) {
	 	this.collectionIdIn = collectionIdIn;
	 }
	
	/**
	 * A flag that indicates if only the lowest price of an item should return
	 * @return bool
	 */
	 getIsLowest() {
	 	return this.isLowest;
	 }
	
	/**
	 * @param isLowest bool A flag that indicates if only the lowest price of an item should return
	 */
	 setIsLowest(isLowest) {
	 	this.isLowest = isLowest;
	 }
	
	/**
	 * Discount coupon code
	 * @return string
	 */
	 getCouponCodeEqual() {
	 	return this.couponCodeEqual;
	 }
	
	/**
	 * @param couponCodeEqual string Discount coupon code
	 */
	 setCouponCodeEqual(couponCodeEqual) {
	 	this.couponCodeEqual = couponCodeEqual;
	 }
}
module.exports.ProductPriceFilter = ProductPriceFilter;

/**
 *
 */
class EntitlementFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntitlementFilter';
	}
	
	/**
	 * The type of the entitlements to return
	 * @return string
	 */
	 getProductTypeEqual() {
	 	return this.productTypeEqual;
	 }
	
	/**
	 * @param productTypeEqual string The type of the entitlements to return
	 */
	 setProductTypeEqual(productTypeEqual) {
	 	this.productTypeEqual = productTypeEqual;
	 }
	
	/**
	 * Reference type to filter by
	 * @return string
	 */
	 getEntityReferenceEqual() {
	 	return this.entityReferenceEqual;
	 }
	
	/**
	 * @param entityReferenceEqual string Reference type to filter by
	 */
	 setEntityReferenceEqual(entityReferenceEqual) {
	 	this.entityReferenceEqual = entityReferenceEqual;
	 }
	
	/**
	 * Is expired
	 * @return bool
	 */
	 getIsExpiredEqual() {
	 	return this.isExpiredEqual;
	 }
	
	/**
	 * @param isExpiredEqual bool Is expired
	 */
	 setIsExpiredEqual(isExpiredEqual) {
	 	this.isExpiredEqual = isExpiredEqual;
	 }
}
module.exports.EntitlementFilter = EntitlementFilter;

/**
 *
 */
class TransactionHistoryFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTransactionHistoryFilter';
	}
	
	/**
	 * Reference type to filter by
	 * @return string
	 */
	 getEntityReferenceEqual() {
	 	return this.entityReferenceEqual;
	 }
	
	/**
	 * @param entityReferenceEqual string Reference type to filter by
	 */
	 setEntityReferenceEqual(entityReferenceEqual) {
	 	this.entityReferenceEqual = entityReferenceEqual;
	 }
	
	/**
	 * Filter transactions later than specific date
	 * @return int
	 */
	 getStartDateGreaterThanOrEqual() {
	 	return this.startDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param startDateGreaterThanOrEqual int Filter transactions later than specific date
	 */
	 setStartDateGreaterThanOrEqual(startDateGreaterThanOrEqual) {
	 	this.startDateGreaterThanOrEqual = startDateGreaterThanOrEqual;
	 }
	
	/**
	 * Filter transactions earlier than specific date
	 * @return int
	 */
	 getEndDateLessThanOrEqual() {
	 	return this.endDateLessThanOrEqual;
	 }
	
	/**
	 * @param endDateLessThanOrEqual int Filter transactions earlier than specific date
	 */
	 setEndDateLessThanOrEqual(endDateLessThanOrEqual) {
	 	this.endDateLessThanOrEqual = endDateLessThanOrEqual;
	 }
}
module.exports.TransactionHistoryFilter = TransactionHistoryFilter;

/**
 *
 */
class RecordingContextFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecordingContextFilter';
	}
	
	/**
	 * Comma separated asset ids
	 * @return string
	 */
	 getAssetIdIn() {
	 	return this.assetIdIn;
	 }
	
	/**
	 * @param assetIdIn string Comma separated asset ids
	 */
	 setAssetIdIn(assetIdIn) {
	 	this.assetIdIn = assetIdIn;
	 }
}
module.exports.RecordingContextFilter = RecordingContextFilter;

/**
 *
 */
class RecordingFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecordingFilter';
	}
	
	/**
	 * Recording Statuses
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string Recording Statuses
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * Comma separated external identifiers
	 * @return string
	 */
	 getExternalRecordingIdIn() {
	 	return this.externalRecordingIdIn;
	 }
	
	/**
	 * @param externalRecordingIdIn string Comma separated external identifiers
	 */
	 setExternalRecordingIdIn(externalRecordingIdIn) {
	 	this.externalRecordingIdIn = externalRecordingIdIn;
	 }
	
	/**
	 * KSQL expression
	 * @return string
	 */
	 getKSql() {
	 	return this.kSql;
	 }
	
	/**
	 * @param kSql string KSQL expression
	 */
	 setKSql(kSql) {
	 	this.kSql = kSql;
	 }
}
module.exports.RecordingFilter = RecordingFilter;

/**
 *
 */
class AssetStructMetaFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStructMetaFilter';
	}
	
	/**
	 * Filter Asset Struct metas that contain a specific asset struct id
	 * @return int
	 */
	 getAssetStructIdEqual() {
	 	return this.assetStructIdEqual;
	 }
	
	/**
	 * @param assetStructIdEqual int Filter Asset Struct metas that contain a specific asset struct id
	 */
	 setAssetStructIdEqual(assetStructIdEqual) {
	 	this.assetStructIdEqual = assetStructIdEqual;
	 }
	
	/**
	 * Filter Asset Struct metas that contain a specific meta id
	 * @return int
	 */
	 getMetaIdEqual() {
	 	return this.metaIdEqual;
	 }
	
	/**
	 * @param metaIdEqual int Filter Asset Struct metas that contain a specific meta id
	 */
	 setMetaIdEqual(metaIdEqual) {
	 	this.metaIdEqual = metaIdEqual;
	 }
}
module.exports.AssetStructMetaFilter = AssetStructMetaFilter;

/**
 *
 */
class ChannelsFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannelsFilter';
	}
	
	/**
	 * channel identifier to filter by
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int channel identifier to filter by
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * media identifier to filter by
	 * @return int
	 */
	 getMediaIdEqual() {
	 	return this.mediaIdEqual;
	 }
	
	/**
	 * @param mediaIdEqual int media identifier to filter by
	 */
	 setMediaIdEqual(mediaIdEqual) {
	 	this.mediaIdEqual = mediaIdEqual;
	 }
	
	/**
	 * Exact channel name to filter by
	 * @return string
	 */
	 getNameEqual() {
	 	return this.nameEqual;
	 }
	
	/**
	 * @param nameEqual string Exact channel name to filter by
	 */
	 setNameEqual(nameEqual) {
	 	this.nameEqual = nameEqual;
	 }
	
	/**
	 * Channel name starts with (auto-complete)
	 * @return string
	 */
	 getNameStartsWith() {
	 	return this.nameStartsWith;
	 }
	
	/**
	 * @param nameStartsWith string Channel name starts with (auto-complete)
	 */
	 setNameStartsWith(nameStartsWith) {
	 	this.nameStartsWith = nameStartsWith;
	 }
}
module.exports.ChannelsFilter = ChannelsFilter;

/**
 *
 */
class MediaFileFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaFileFilter';
	}
	
	/**
	 * Asset identifier to filter by
	 * @return int
	 */
	 getAssetIdEqual() {
	 	return this.assetIdEqual;
	 }
	
	/**
	 * @param assetIdEqual int Asset identifier to filter by
	 */
	 setAssetIdEqual(assetIdEqual) {
	 	this.assetIdEqual = assetIdEqual;
	 }
	
	/**
	 * Asset file identifier to filter by
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int Asset file identifier to filter by
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
}
module.exports.MediaFileFilter = MediaFileFilter;

/**
 *
 */
class ImageFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaImageFilter';
	}
	
	/**
	 * IDs to filter by
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string IDs to filter by
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * ID of the object the is related to, to filter by
	 * @return int
	 */
	 getImageObjectIdEqual() {
	 	return this.imageObjectIdEqual;
	 }
	
	/**
	 * @param imageObjectIdEqual int ID of the object the is related to, to filter by
	 */
	 setImageObjectIdEqual(imageObjectIdEqual) {
	 	this.imageObjectIdEqual = imageObjectIdEqual;
	 }
	
	/**
	 * Type of the object the image is related to, to filter by
	 * @return string
	 */
	 getImageObjectTypeEqual() {
	 	return this.imageObjectTypeEqual;
	 }
	
	/**
	 * @param imageObjectTypeEqual string Type of the object the image is related to, to filter by
	 */
	 setImageObjectTypeEqual(imageObjectTypeEqual) {
	 	this.imageObjectTypeEqual = imageObjectTypeEqual;
	 }
	
	/**
	 * Filter images that are default on at least on image type or not default at any
	 * @return bool
	 */
	 getIsDefaultEqual() {
	 	return this.isDefaultEqual;
	 }
	
	/**
	 * @param isDefaultEqual bool Filter images that are default on at least on image type or not default at any
	 */
	 setIsDefaultEqual(isDefaultEqual) {
	 	this.isDefaultEqual = isDefaultEqual;
	 }
}
module.exports.ImageFilter = ImageFilter;

/**
 *
 */
class ImageTypeFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaImageTypeFilter';
	}
	
	/**
	 * IDs to filter by
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string IDs to filter by
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * Ratio IDs to filter by
	 * @return string
	 */
	 getRatioIdIn() {
	 	return this.ratioIdIn;
	 }
	
	/**
	 * @param ratioIdIn string Ratio IDs to filter by
	 */
	 setRatioIdIn(ratioIdIn) {
	 	this.ratioIdIn = ratioIdIn;
	 }
}
module.exports.ImageTypeFilter = ImageTypeFilter;

/**
 *
 */
class TagFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTagFilter';
	}
	
	/**
	 * Tag to filter by
	 * @return string
	 */
	 getTagEqual() {
	 	return this.tagEqual;
	 }
	
	/**
	 * @param tagEqual string Tag to filter by
	 */
	 setTagEqual(tagEqual) {
	 	this.tagEqual = tagEqual;
	 }
	
	/**
	 * Tag to filter by
	 * @return string
	 */
	 getTagStartsWith() {
	 	return this.tagStartsWith;
	 }
	
	/**
	 * @param tagStartsWith string Tag to filter by
	 */
	 setTagStartsWith(tagStartsWith) {
	 	this.tagStartsWith = tagStartsWith;
	 }
	
	/**
	 * Type identifier
	 * @return int
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual int Type identifier
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * Language to filter by
	 * @return string
	 */
	 getLanguageEqual() {
	 	return this.languageEqual;
	 }
	
	/**
	 * @param languageEqual string Language to filter by
	 */
	 setLanguageEqual(languageEqual) {
	 	this.languageEqual = languageEqual;
	 }
}
module.exports.TagFilter = TagFilter;

/**
 *
 */
class AssetStructFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStructFilter';
	}
	
	/**
	 * Comma separated identifiers, id = 0 is identified as program AssetStruct
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated identifiers, id = 0 is identified as program AssetStruct
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * Filter Asset Structs that contain a specific meta id
	 * @return int
	 */
	 getMetaIdEqual() {
	 	return this.metaIdEqual;
	 }
	
	/**
	 * @param metaIdEqual int Filter Asset Structs that contain a specific meta id
	 */
	 setMetaIdEqual(metaIdEqual) {
	 	this.metaIdEqual = metaIdEqual;
	 }
	
	/**
	 * Filter Asset Structs by isProtectedEqual value
	 * @return bool
	 */
	 getIsProtectedEqual() {
	 	return this.isProtectedEqual;
	 }
	
	/**
	 * @param isProtectedEqual bool Filter Asset Structs by isProtectedEqual value
	 */
	 setIsProtectedEqual(isProtectedEqual) {
	 	this.isProtectedEqual = isProtectedEqual;
	 }
}
module.exports.AssetStructFilter = AssetStructFilter;

/**
 *
 */
class AssetCommentFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetCommentFilter';
	}
	
	/**
	 * Asset Id
	 * @return int
	 */
	 getAssetIdEqual() {
	 	return this.assetIdEqual;
	 }
	
	/**
	 * @param assetIdEqual int Asset Id
	 */
	 setAssetIdEqual(assetIdEqual) {
	 	this.assetIdEqual = assetIdEqual;
	 }
	
	/**
	 * Asset Type
	 * @return string
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual string Asset Type
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
}
module.exports.AssetCommentFilter = AssetCommentFilter;

/**
 *
 */
class BookmarkFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBookmarkFilter';
	}
	
	/**
	 * Comma separated list of assets identifiers
	 * @return string
	 */
	 getAssetIdIn() {
	 	return this.assetIdIn;
	 }
	
	/**
	 * @param assetIdIn string Comma separated list of assets identifiers
	 */
	 setAssetIdIn(assetIdIn) {
	 	this.assetIdIn = assetIdIn;
	 }
	
	/**
	 * Asset type
	 * @return string
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual string Asset type
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
}
module.exports.BookmarkFilter = BookmarkFilter;

/**
 *
 */
class AssetHistoryFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetHistoryFilter';
	}
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * Comma separated list of asset identifiers
	 * @return string
	 */
	 getAssetIdIn() {
	 	return this.assetIdIn;
	 }
	
	/**
	 * @param assetIdIn string Comma separated list of asset identifiers
	 */
	 setAssetIdIn(assetIdIn) {
	 	this.assetIdIn = assetIdIn;
	 }
	
	/**
	 * Which type of recently watched media to include in the result – those that finished watching, those that are in progress or both.
 * If omitted or specified filter = all – return all types.
 * Allowed values: progress – return medias that are in-progress, done – return medias that finished watching
	 * @return string
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual string Which type of recently watched media to include in the result – those that finished watching, those that are in progress or both.
 * If omitted or specified filter = all – return all types.
 * Allowed values: progress – return medias that are in-progress, done – return medias that finished watching
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * How many days back to return the watched media. If omitted, default to 7 days
	 * @return int
	 */
	 getDaysLessThanOrEqual() {
	 	return this.daysLessThanOrEqual;
	 }
	
	/**
	 * @param daysLessThanOrEqual int How many days back to return the watched media. If omitted, default to 7 days
	 */
	 setDaysLessThanOrEqual(daysLessThanOrEqual) {
	 	this.daysLessThanOrEqual = daysLessThanOrEqual;
	 }
}
module.exports.AssetHistoryFilter = AssetHistoryFilter;

/**
 *
 */
class TvmRuleFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTvmRuleFilter';
	}
	
	/**
	 * Indicates which tvm rule list to return by their type
	 * @return string
	 */
	 getRuleTypeEqual() {
	 	return this.ruleTypeEqual;
	 }
	
	/**
	 * @param ruleTypeEqual string Indicates which tvm rule list to return by their type
	 */
	 setRuleTypeEqual(ruleTypeEqual) {
	 	this.ruleTypeEqual = ruleTypeEqual;
	 }
	
	/**
	 * Indicates which tvm rule list to return by their name
	 * @return string
	 */
	 getNameEqual() {
	 	return this.nameEqual;
	 }
	
	/**
	 * @param nameEqual string Indicates which tvm rule list to return by their name
	 */
	 setNameEqual(nameEqual) {
	 	this.nameEqual = nameEqual;
	 }
}
module.exports.TvmRuleFilter = TvmRuleFilter;

/**
 *
 */
class BusinessModuleRuleFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBusinessModuleRuleFilter';
	}
	
	/**
	 * Business module type the rules applied on
	 * @return string
	 */
	 getBusinessModuleTypeApplied() {
	 	return this.businessModuleTypeApplied;
	 }
	
	/**
	 * @param businessModuleTypeApplied string Business module type the rules applied on
	 */
	 setBusinessModuleTypeApplied(businessModuleTypeApplied) {
	 	this.businessModuleTypeApplied = businessModuleTypeApplied;
	 }
	
	/**
	 * Business module ID the rules applied on
	 * @return int
	 */
	 getBusinessModuleIdApplied() {
	 	return this.businessModuleIdApplied;
	 }
	
	/**
	 * @param businessModuleIdApplied int Business module ID the rules applied on
	 */
	 setBusinessModuleIdApplied(businessModuleIdApplied) {
	 	this.businessModuleIdApplied = businessModuleIdApplied;
	 }
	
	/**
	 * Comma separated segment IDs the rules applied on
	 * @return string
	 */
	 getSegmentIdsApplied() {
	 	return this.segmentIdsApplied;
	 }
	
	/**
	 * @param segmentIdsApplied string Comma separated segment IDs the rules applied on
	 */
	 setSegmentIdsApplied(segmentIdsApplied) {
	 	this.segmentIdsApplied = segmentIdsApplied;
	 }
}
module.exports.BusinessModuleRuleFilter = BusinessModuleRuleFilter;

/**
 *
 */
class PlaybackProfileFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaybackProfileFilter';
	}
	
	/**
	 * Playback profile to filter by
	 * @return int
	 */
	 getPlaybackProfileEqual() {
	 	return this.playbackProfileEqual;
	 }
	
	/**
	 * @param playbackProfileEqual int Playback profile to filter by
	 */
	 setPlaybackProfileEqual(playbackProfileEqual) {
	 	this.playbackProfileEqual = playbackProfileEqual;
	 }
}
module.exports.PlaybackProfileFilter = PlaybackProfileFilter;

/**
 *
 */
class AssetRuleFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetRuleFilter';
	}
	
	/**
	 * Indicates which asset rule list to return by it KalturaRuleConditionType.
 * Default value: KalturaRuleConditionType.COUNTRY
	 * @return string
	 */
	 getConditionsContainType() {
	 	return this.conditionsContainType;
	 }
	
	/**
	 * @param conditionsContainType string Indicates which asset rule list to return by it KalturaRuleConditionType.
 * Default value: KalturaRuleConditionType.COUNTRY
	 */
	 setConditionsContainType(conditionsContainType) {
	 	this.conditionsContainType = conditionsContainType;
	 }
	
	/**
	 * Indicates if to return an asset rule list that related to specific asset
	 * @return SlimAsset
	 */
	 getAssetApplied() {
	 	return this.assetApplied;
	 }
	
	/**
	 * @param assetApplied SlimAsset Indicates if to return an asset rule list that related to specific asset
	 */
	 setAssetApplied(assetApplied) {
	 	this.assetApplied = assetApplied;
	 }
	
	/**
	 * Indicates which asset rule list to return by this KalturaRuleActionType
	 * @return string
	 */
	 getActionsContainType() {
	 	return this.actionsContainType;
	 }
	
	/**
	 * @param actionsContainType string Indicates which asset rule list to return by this KalturaRuleActionType
	 */
	 setActionsContainType(actionsContainType) {
	 	this.actionsContainType = actionsContainType;
	 }
}
module.exports.AssetRuleFilter = AssetRuleFilter;

/**
 *
 */
class AssetUserRuleFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetUserRuleFilter';
	}
	
	/**
	 * Indicates if to get the asset user rule list for the attached user or for the entire group
	 * @return bool
	 */
	 getAttachedUserIdEqualCurrent() {
	 	return this.attachedUserIdEqualCurrent;
	 }
	
	/**
	 * @param attachedUserIdEqualCurrent bool Indicates if to get the asset user rule list for the attached user or for the entire group
	 */
	 setAttachedUserIdEqualCurrent(attachedUserIdEqualCurrent) {
	 	this.attachedUserIdEqualCurrent = attachedUserIdEqualCurrent;
	 }
}
module.exports.AssetUserRuleFilter = AssetUserRuleFilter;

/**
 *
 */
class CurrencyFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCurrencyFilter';
	}
	
	/**
	 * Currency codes
	 * @return string
	 */
	 getCodeIn() {
	 	return this.codeIn;
	 }
	
	/**
	 * @param codeIn string Currency codes
	 */
	 setCodeIn(codeIn) {
	 	this.codeIn = codeIn;
	 }
}
module.exports.CurrencyFilter = CurrencyFilter;

/**
 *
 */
class LanguageFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLanguageFilter';
	}
	
	/**
	 * Language codes
	 * @return string
	 */
	 getCodeIn() {
	 	return this.codeIn;
	 }
	
	/**
	 * @param codeIn string Language codes
	 */
	 setCodeIn(codeIn) {
	 	this.codeIn = codeIn;
	 }
}
module.exports.LanguageFilter = LanguageFilter;

/**
 *
 */
class MetaFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetaFilter';
	}
	
	/**
	 * Comma separated identifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated identifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * Filter Metas that are contained in a specific asset struct
	 * @return int
	 */
	 getAssetStructIdEqual() {
	 	return this.assetStructIdEqual;
	 }
	
	/**
	 * @param assetStructIdEqual int Filter Metas that are contained in a specific asset struct
	 */
	 setAssetStructIdEqual(assetStructIdEqual) {
	 	this.assetStructIdEqual = assetStructIdEqual;
	 }
	
	/**
	 * Meta data type to filter by
	 * @return string
	 */
	 getDataTypeEqual() {
	 	return this.dataTypeEqual;
	 }
	
	/**
	 * @param dataTypeEqual string Meta data type to filter by
	 */
	 setDataTypeEqual(dataTypeEqual) {
	 	this.dataTypeEqual = dataTypeEqual;
	 }
	
	/**
	 * Filter metas by multipleValueEqual value
	 * @return bool
	 */
	 getMultipleValueEqual() {
	 	return this.multipleValueEqual;
	 }
	
	/**
	 * @param multipleValueEqual bool Filter metas by multipleValueEqual value
	 */
	 setMultipleValueEqual(multipleValueEqual) {
	 	this.multipleValueEqual = multipleValueEqual;
	 }
}
module.exports.MetaFilter = MetaFilter;

/**
 *
 */
class CountryFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCountryFilter';
	}
	
	/**
	 * Country identifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Country identifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * Ip to identify the country
	 * @return string
	 */
	 getIpEqual() {
	 	return this.ipEqual;
	 }
	
	/**
	 * @param ipEqual string Ip to identify the country
	 */
	 setIpEqual(ipEqual) {
	 	this.ipEqual = ipEqual;
	 }
	
	/**
	 * Indicates if to get the IP from the request
	 * @return bool
	 */
	 getIpEqualCurrent() {
	 	return this.ipEqualCurrent;
	 }
	
	/**
	 * @param ipEqualCurrent bool Indicates if to get the IP from the request
	 */
	 setIpEqualCurrent(ipEqualCurrent) {
	 	this.ipEqualCurrent = ipEqualCurrent;
	 }
}
module.exports.CountryFilter = CountryFilter;

/**
 *
 */
class SearchHistoryFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchHistoryFilter';
	}
}
module.exports.SearchHistoryFilter = SearchHistoryFilter;

/**
 *
 */
class RegionFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegionFilter';
	}
	
	/**
	 * List of comma separated regions external identifiers
	 * @return string
	 */
	 getExternalIdIn() {
	 	return this.externalIdIn;
	 }
	
	/**
	 * @param externalIdIn string List of comma separated regions external identifiers
	 */
	 setExternalIdIn(externalIdIn) {
	 	this.externalIdIn = externalIdIn;
	 }
}
module.exports.RegionFilter = RegionFilter;

/**
 *
 */
class UserAssetRuleFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAssetRuleFilter';
	}
	
	/**
	 * Asset identifier to filter by
	 * @return int
	 */
	 getAssetIdEqual() {
	 	return this.assetIdEqual;
	 }
	
	/**
	 * @param assetIdEqual int Asset identifier to filter by
	 */
	 setAssetIdEqual(assetIdEqual) {
	 	this.assetIdEqual = assetIdEqual;
	 }
	
	/**
	 * Asset type to filter by - 0 = EPG, 1 = media
	 * @return int
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual int Asset type to filter by - 0 = EPG, 1 = media
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
}
module.exports.UserAssetRuleFilter = UserAssetRuleFilter;

/**
 *
 */
class ParentalRuleFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaParentalRuleFilter';
	}
	
	/**
	 * Reference type to filter by
	 * @return string
	 */
	 getEntityReferenceEqual() {
	 	return this.entityReferenceEqual;
	 }
	
	/**
	 * @param entityReferenceEqual string Reference type to filter by
	 */
	 setEntityReferenceEqual(entityReferenceEqual) {
	 	this.entityReferenceEqual = entityReferenceEqual;
	 }
}
module.exports.ParentalRuleFilter = ParentalRuleFilter;

/**
 *
 */
class ExportTaskFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExportTaskFilter';
	}
	
	/**
	 * Comma separated tasks identifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated tasks identifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
}
module.exports.ExportTaskFilter = ExportTaskFilter;

/**
 *
 */
class PermissionFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermissionFilter';
	}
	
	/**
	 * Indicates whether the results should be filtered by userId using the current
	 * @return bool
	 */
	 getCurrentUserPermissionsContains() {
	 	return this.currentUserPermissionsContains;
	 }
	
	/**
	 * @param currentUserPermissionsContains bool Indicates whether the results should be filtered by userId using the current
	 */
	 setCurrentUserPermissionsContains(currentUserPermissionsContains) {
	 	this.currentUserPermissionsContains = currentUserPermissionsContains;
	 }
}
module.exports.PermissionFilter = PermissionFilter;

/**
 *
 */
class UserRoleFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRoleFilter';
	}
	
	/**
	 * Comma separated roles identifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated roles identifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * Indicates whether the results should be filtered by userId using the current
	 * @return bool
	 */
	 getCurrentUserRoleIdsContains() {
	 	return this.currentUserRoleIdsContains;
	 }
	
	/**
	 * @param currentUserRoleIdsContains bool Indicates whether the results should be filtered by userId using the current
	 */
	 setCurrentUserRoleIdsContains(currentUserRoleIdsContains) {
	 	this.currentUserRoleIdsContains = currentUserRoleIdsContains;
	 }
}
module.exports.UserRoleFilter = UserRoleFilter;

/**
 *
 */
class SkipOnErrorCondition extends SkipCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSkipOnErrorCondition';
	}
	
	/**
	 * Indicates which error should be considered to skip the current request
	 * @return string
	 */
	 getCondition() {
	 	return this.condition;
	 }
	
	/**
	 * @param condition string Indicates which error should be considered to skip the current request
	 */
	 setCondition(condition) {
	 	this.condition = condition;
	 }
}
module.exports.SkipOnErrorCondition = SkipOnErrorCondition;

/**
 *
 */
class PropertySkipCondition extends SkipCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPropertySkipCondition';
	}
	
	/**
	 * The property path on which the condition is checked
	 * @return string
	 */
	 getPropertyPath() {
	 	return this.propertyPath;
	 }
	
	/**
	 * @param propertyPath string The property path on which the condition is checked
	 */
	 setPropertyPath(propertyPath) {
	 	this.propertyPath = propertyPath;
	 }
	
	/**
	 * The operator that applies the check to the condition
	 * @return string
	 */
	 getOperator() {
	 	return this.operator;
	 }
	
	/**
	 * @param operator string The operator that applies the check to the condition
	 */
	 setOperator(operator) {
	 	this.operator = operator;
	 }
	
	/**
	 * The value on which the condition is checked
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string The value on which the condition is checked
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.PropertySkipCondition = PropertySkipCondition;

/**
 *
 */
class AggregatedPropertySkipCondition extends PropertySkipCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAggregatedPropertySkipCondition';
	}
	
	/**
	 * The aggregation type on which the condition is based on
	 * @return string
	 */
	 getAggregationType() {
	 	return this.aggregationType;
	 }
	
	/**
	 * @param aggregationType string The aggregation type on which the condition is based on
	 */
	 setAggregationType(aggregationType) {
	 	this.aggregationType = aggregationType;
	 }
}
module.exports.AggregatedPropertySkipCondition = AggregatedPropertySkipCondition;

/**
 *
 */
class FilterPager extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFilterPager';
	}
	
	/**
	 * The number of objects to retrieve. Possible range 1 ≤ value ≤ 50. If omitted or value &lt; 1 - will be set to 25. If a value &gt; 50 provided – will be set to 50
	 * @return int
	 */
	 getPageSize() {
	 	return this.pageSize;
	 }
	
	/**
	 * @param pageSize int The number of objects to retrieve. Possible range 1 ≤ value ≤ 50. If omitted or value &lt; 1 - will be set to 25. If a value &gt; 50 provided – will be set to 50
	 */
	 setPageSize(pageSize) {
	 	this.pageSize = pageSize;
	 }
	
	/**
	 * The page number for which {pageSize} of objects should be retrieved
	 * @return int
	 */
	 getPageIndex() {
	 	return this.pageIndex;
	 }
	
	/**
	 * @param pageIndex int The page number for which {pageSize} of objects should be retrieved
	 */
	 setPageIndex(pageIndex) {
	 	this.pageIndex = pageIndex;
	 }
}
module.exports.FilterPager = FilterPager;

/**
 *
 */
class AppToken extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAppToken';
	}
	
	/**
	 * The id of the application token
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Expiry time of current token (unix timestamp in seconds)
	 * @return int
	 */
	 getExpiry() {
	 	return this.expiry;
	 }
	
	/**
	 * @param expiry int Expiry time of current token (unix timestamp in seconds)
	 */
	 setExpiry(expiry) {
	 	this.expiry = expiry;
	 }
	
	/**
	 * Partner identifier
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Expiry duration of KS (Kaltura Session) that created using the current token (in seconds)
	 * @return int
	 */
	 getSessionDuration() {
	 	return this.sessionDuration;
	 }
	
	/**
	 * @param sessionDuration int Expiry duration of KS (Kaltura Session) that created using the current token (in seconds)
	 */
	 setSessionDuration(sessionDuration) {
	 	this.sessionDuration = sessionDuration;
	 }
	
	/**
	 * The hash type of the token
	 * @return string
	 */
	 getHashType() {
	 	return this.hashType;
	 }
	
	/**
	 * @param hashType string The hash type of the token
	 */
	 setHashType(hashType) {
	 	this.hashType = hashType;
	 }
	
	/**
	 * Comma separated privileges to be applied on KS (Kaltura Session) that created using the current token
	 * @return string
	 */
	 getSessionPrivileges() {
	 	return this.sessionPrivileges;
	 }
	
	/**
	 * @param sessionPrivileges string Comma separated privileges to be applied on KS (Kaltura Session) that created using the current token
	 */
	 setSessionPrivileges(sessionPrivileges) {
	 	this.sessionPrivileges = sessionPrivileges;
	 }
	
	/**
	 * The application token
	 * @return string
	 */
	 getToken() {
	 	return this.token;
	 }
	
	/**
	 * User id of KS (Kaltura Session) that created using the current token
	 * @return string
	 */
	 getSessionUserId() {
	 	return this.sessionUserId;
	 }
	
	/**
	 * @param sessionUserId string User id of KS (Kaltura Session) that created using the current token
	 */
	 setSessionUserId(sessionUserId) {
	 	this.sessionUserId = sessionUserId;
	 }
	
	/**
	 * Create date
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Update date
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
}
module.exports.AppToken = AppToken;

/**
 *
 */
class Session extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSession';
	}
	
	/**
	 * KS
	 * @return string
	 */
	 getKs() {
	 	return this.ks;
	 }
	
	/**
	 * @param ks string KS
	 */
	 setKs(ks) {
	 	this.ks = ks;
	 }
	
	/**
	 * Partner identifier
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int Partner identifier
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * User identifier
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string User identifier
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * Expiry
	 * @return int
	 */
	 getExpiry() {
	 	return this.expiry;
	 }
	
	/**
	 * @param expiry int Expiry
	 */
	 setExpiry(expiry) {
	 	this.expiry = expiry;
	 }
	
	/**
	 * Privileges
	 * @return string
	 */
	 getPrivileges() {
	 	return this.privileges;
	 }
	
	/**
	 * @param privileges string Privileges
	 */
	 setPrivileges(privileges) {
	 	this.privileges = privileges;
	 }
	
	/**
	 * UDID
	 * @return string
	 */
	 getUdid() {
	 	return this.udid;
	 }
	
	/**
	 * @param udid string UDID
	 */
	 setUdid(udid) {
	 	this.udid = udid;
	 }
	
	/**
	 * Create date
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * @param createDate int Create date
	 */
	 setCreateDate(createDate) {
	 	this.createDate = createDate;
	 }
}
module.exports.Session = Session;

/**
 *
 */
class SessionInfo extends Session{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSessionInfo';
	}
}
module.exports.SessionInfo = SessionInfo;

/**
 *
 */
class PlaybackContextOptions extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaybackContextOptions';
	}
	
	/**
	 * Protocol of the specific media object (http / https)
	 * @return string
	 */
	 getMediaProtocol() {
	 	return this.mediaProtocol;
	 }
	
	/**
	 * @param mediaProtocol string Protocol of the specific media object (http / https)
	 */
	 setMediaProtocol(mediaProtocol) {
	 	this.mediaProtocol = mediaProtocol;
	 }
	
	/**
	 * Playback streamer type: applehttp, mpegdash, url
	 * @return string
	 */
	 getStreamerType() {
	 	return this.streamerType;
	 }
	
	/**
	 * @param streamerType string Playback streamer type: applehttp, mpegdash, url
	 */
	 setStreamerType(streamerType) {
	 	this.streamerType = streamerType;
	 }
	
	/**
	 * List of comma separated media file IDs
	 * @return string
	 */
	 getAssetFileIds() {
	 	return this.assetFileIds;
	 }
	
	/**
	 * @param assetFileIds string List of comma separated media file IDs
	 */
	 setAssetFileIds(assetFileIds) {
	 	this.assetFileIds = assetFileIds;
	 }
	
	/**
	 * Playback context type
	 * @return string
	 */
	 getContext() {
	 	return this.context;
	 }
	
	/**
	 * @param context string Playback context type
	 */
	 setContext(context) {
	 	this.context = context;
	 }
	
	/**
	 * Url type
	 * @return string
	 */
	 getUrlType() {
	 	return this.urlType;
	 }
	
	/**
	 * @param urlType string Url type
	 */
	 setUrlType(urlType) {
	 	this.urlType = urlType;
	 }
}
module.exports.PlaybackContextOptions = PlaybackContextOptions;

/**
 *
 */
class AccessControlMessage extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlMessage';
	}
	
	/**
	 * Message
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string Message
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * Code
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string Code
	 */
	 setCode(code) {
	 	this.code = code;
	 }
}
module.exports.AccessControlMessage = AccessControlMessage;

/**
 *
 */
class CaptionPlaybackPluginData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCaptionPlaybackPluginData';
	}
	
	/**
	 * url
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string url
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * Language
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string Language
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * Label
	 * @return string
	 */
	 getLabel() {
	 	return this.label;
	 }
	
	/**
	 * @param label string Label
	 */
	 setLabel(label) {
	 	this.label = label;
	 }
	
	/**
	 * Format
	 * @return string
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format string Format
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
}
module.exports.CaptionPlaybackPluginData = CaptionPlaybackPluginData;

/**
 *
 */
class PlaybackPluginData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaybackPluginData';
	}
}
module.exports.PlaybackPluginData = PlaybackPluginData;

/**
 *
 */
class PlaybackContext extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaybackContext';
	}
	
	/**
	 * Sources
	 * @return array
	 */
	 getSources() {
	 	return this.sources;
	 }
	
	/**
	 * @param sources array Sources
	 */
	 setSources(sources) {
	 	this.sources = sources;
	 }
	
	/**
	 * Actions
	 * @return array
	 */
	 getActions() {
	 	return this.actions;
	 }
	
	/**
	 * @param actions array Actions
	 */
	 setActions(actions) {
	 	this.actions = actions;
	 }
	
	/**
	 * Messages
	 * @return array
	 */
	 getMessages() {
	 	return this.messages;
	 }
	
	/**
	 * @param messages array Messages
	 */
	 setMessages(messages) {
	 	this.messages = messages;
	 }
	
	/**
	 * Playback captions
	 * @return array
	 */
	 getPlaybackCaptions() {
	 	return this.playbackCaptions;
	 }
	
	/**
	 * @param playbackCaptions array Playback captions
	 */
	 setPlaybackCaptions(playbackCaptions) {
	 	this.playbackCaptions = playbackCaptions;
	 }
	
	/**
	 * Plugins
	 * @return array
	 */
	 getPlugins() {
	 	return this.plugins;
	 }
	
	/**
	 * @param plugins array Plugins
	 */
	 setPlugins(plugins) {
	 	this.plugins = plugins;
	 }
}
module.exports.PlaybackContext = PlaybackContext;

/**
 *
 */
class BumpersPlaybackPluginData extends PlaybackPluginData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBumpersPlaybackPluginData';
	}
	
	/**
	 * url
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string url
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * Streamer type: hls, dash, progressive
	 * @return string
	 */
	 getStreamertype() {
	 	return this.streamertype;
	 }
	
	/**
	 * @param streamertype string Streamer type: hls, dash, progressive
	 */
	 setStreamertype(streamertype) {
	 	this.streamertype = streamertype;
	 }
}
module.exports.BumpersPlaybackPluginData = BumpersPlaybackPluginData;

/**
 *
 */
class AdsSource extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAdsSource';
	}
	
	/**
	 * File unique identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Device types as defined in the system
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Device types as defined in the system
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Ads policy
	 * @return string
	 */
	 getAdsPolicy() {
	 	return this.adsPolicy;
	 }
	
	/**
	 * @param adsPolicy string Ads policy
	 */
	 setAdsPolicy(adsPolicy) {
	 	this.adsPolicy = adsPolicy;
	 }
	
	/**
	 * The parameters to pass to the ads server
	 * @return string
	 */
	 getAdsParam() {
	 	return this.adsParam;
	 }
	
	/**
	 * @param adsParam string The parameters to pass to the ads server
	 */
	 setAdsParam(adsParam) {
	 	this.adsParam = adsParam;
	 }
}
module.exports.AdsSource = AdsSource;

/**
 *
 */
class AdsContext extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAdsContext';
	}
	
	/**
	 * Sources
	 * @return array
	 */
	 getSources() {
	 	return this.sources;
	 }
	
	/**
	 * @param sources array Sources
	 */
	 setSources(sources) {
	 	this.sources = sources;
	 }
}
module.exports.AdsContext = AdsContext;

/**
 *
 */
class AssetFileContext extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetFileContext';
	}
	
	/**
	 * viewLifeCycle
	 * @return string
	 */
	 getViewLifeCycle() {
	 	return this.viewLifeCycle;
	 }
	
	/**
	 * fullLifeCycle
	 * @return string
	 */
	 getFullLifeCycle() {
	 	return this.fullLifeCycle;
	 }
	
	/**
	 * isOfflinePlayBack
	 * @return bool
	 */
	 getIsOfflinePlayBack() {
	 	return this.isOfflinePlayBack;
	 }
}
module.exports.AssetFileContext = AssetFileContext;

/**
 *
 */
class AssetStatisticsQuery extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStatisticsQuery';
	}
	
	/**
	 * Comma separated list of asset identifiers
	 * @return string
	 */
	 getAssetIdIn() {
	 	return this.assetIdIn;
	 }
	
	/**
	 * @param assetIdIn string Comma separated list of asset identifiers
	 */
	 setAssetIdIn(assetIdIn) {
	 	this.assetIdIn = assetIdIn;
	 }
	
	/**
	 * Asset type
	 * @return string
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual string Asset type
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
	
	/**
	 * The beginning of the time window to get the statistics for (in epoch)
	 * @return int
	 */
	 getStartDateGreaterThanOrEqual() {
	 	return this.startDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param startDateGreaterThanOrEqual int The beginning of the time window to get the statistics for (in epoch)
	 */
	 setStartDateGreaterThanOrEqual(startDateGreaterThanOrEqual) {
	 	this.startDateGreaterThanOrEqual = startDateGreaterThanOrEqual;
	 }
	
	/**
	 * /// The end of the time window to get the statistics for (in epoch)
	 * @return int
	 */
	 getEndDateGreaterThanOrEqual() {
	 	return this.endDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param endDateGreaterThanOrEqual int /// The end of the time window to get the statistics for (in epoch)
	 */
	 setEndDateGreaterThanOrEqual(endDateGreaterThanOrEqual) {
	 	this.endDateGreaterThanOrEqual = endDateGreaterThanOrEqual;
	 }
}
module.exports.AssetStatisticsQuery = AssetStatisticsQuery;

/**
 *
 */
class UploadToken extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUploadToken';
	}
	
	/**
	 * Upload-token identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Status
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * File size
	 * @return float
	 */
	 getFileSize() {
	 	return this.fileSize;
	 }
	
	/**
	 * Specifies when was the Asset was created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the Asset last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
}
module.exports.UploadToken = UploadToken;

/**
 *
 */
class CDNPartnerSettings extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCDNPartnerSettings';
	}
	
	/**
	 * Default CDN adapter identifier
	 * @return int
	 */
	 getDefaultAdapterId() {
	 	return this.defaultAdapterId;
	 }
	
	/**
	 * @param defaultAdapterId int Default CDN adapter identifier
	 */
	 setDefaultAdapterId(defaultAdapterId) {
	 	this.defaultAdapterId = defaultAdapterId;
	 }
	
	/**
	 * Default recording CDN adapter identifier
	 * @return int
	 */
	 getDefaultRecordingAdapterId() {
	 	return this.defaultRecordingAdapterId;
	 }
	
	/**
	 * @param defaultRecordingAdapterId int Default recording CDN adapter identifier
	 */
	 setDefaultRecordingAdapterId(defaultRecordingAdapterId) {
	 	this.defaultRecordingAdapterId = defaultRecordingAdapterId;
	 }
}
module.exports.CDNPartnerSettings = CDNPartnerSettings;

/**
 *
 */
class Compensation extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCompensation';
	}
	
	/**
	 * Compensation identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Subscription identifier
	 * @return int
	 */
	 getSubscriptionId() {
	 	return this.subscriptionId;
	 }
	
	/**
	 * Compensation type
	 * @return string
	 */
	 getCompensationType() {
	 	return this.compensationType;
	 }
	
	/**
	 * @param compensationType string Compensation type
	 */
	 setCompensationType(compensationType) {
	 	this.compensationType = compensationType;
	 }
	
	/**
	 * Compensation amount
	 * @return float
	 */
	 getAmount() {
	 	return this.amount;
	 }
	
	/**
	 * @param amount float Compensation amount
	 */
	 setAmount(amount) {
	 	this.amount = amount;
	 }
	
	/**
	 * The number of renewals for compensation
	 * @return int
	 */
	 getTotalRenewalIterations() {
	 	return this.totalRenewalIterations;
	 }
	
	/**
	 * @param totalRenewalIterations int The number of renewals for compensation
	 */
	 setTotalRenewalIterations(totalRenewalIterations) {
	 	this.totalRenewalIterations = totalRenewalIterations;
	 }
	
	/**
	 * The number of renewals the compensation was already applied on
	 * @return int
	 */
	 getAppliedRenewalIterations() {
	 	return this.appliedRenewalIterations;
	 }
	
	/**
	 * Purchase identifier
	 * @return int
	 */
	 getPurchaseId() {
	 	return this.purchaseId;
	 }
	
	/**
	 * @param purchaseId int Purchase identifier
	 */
	 setPurchaseId(purchaseId) {
	 	this.purchaseId = purchaseId;
	 }
}
module.exports.Compensation = Compensation;

/**
 *
 */
class ContentResource extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaContentResource';
	}
}
module.exports.ContentResource = ContentResource;

/**
 *
 */
class UploadedFileTokenResource extends ContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUploadedFileTokenResource';
	}
	
	/**
	 * Token that returned from uploadToken.add action
	 * @return string
	 */
	 getToken() {
	 	return this.token;
	 }
	
	/**
	 * @param token string Token that returned from uploadToken.add action
	 */
	 setToken(token) {
	 	this.token = token;
	 }
}
module.exports.UploadedFileTokenResource = UploadedFileTokenResource;

/**
 *
 */
class UrlResource extends ContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlResource';
	}
	
	/**
	 * URL of the content
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string URL of the content
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
}
module.exports.UrlResource = UrlResource;

/**
 *
 */
class CouponGenerationOptions extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCouponGenerationOptions';
	}
}
module.exports.CouponGenerationOptions = CouponGenerationOptions;

/**
 *
 */
class PublicCouponGenerationOptions extends CouponGenerationOptions{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPublicCouponGenerationOptions';
	}
	
	/**
	 * Coupon code (name)
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string Coupon code (name)
	 */
	 setCode(code) {
	 	this.code = code;
	 }
}
module.exports.PublicCouponGenerationOptions = PublicCouponGenerationOptions;

/**
 *
 */
class RandomCouponGenerationOptions extends CouponGenerationOptions{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRandomCouponGenerationOptions';
	}
	
	/**
	 * Number of coupons to generate
	 * @return int
	 */
	 getNumberOfCoupons() {
	 	return this.numberOfCoupons;
	 }
	
	/**
	 * @param numberOfCoupons int Number of coupons to generate
	 */
	 setNumberOfCoupons(numberOfCoupons) {
	 	this.numberOfCoupons = numberOfCoupons;
	 }
	
	/**
	 * Indicates whether to use letters in the generated codes (default is true)
	 * @return bool
	 */
	 getUseLetters() {
	 	return this.useLetters;
	 }
	
	/**
	 * @param useLetters bool Indicates whether to use letters in the generated codes (default is true)
	 */
	 setUseLetters(useLetters) {
	 	this.useLetters = useLetters;
	 }
	
	/**
	 * Indicates whether to use numbers in the generated codes (default is true)
	 * @return bool
	 */
	 getUseNumbers() {
	 	return this.useNumbers;
	 }
	
	/**
	 * @param useNumbers bool Indicates whether to use numbers in the generated codes (default is true)
	 */
	 setUseNumbers(useNumbers) {
	 	this.useNumbers = useNumbers;
	 }
	
	/**
	 * Indicates whether to use special characters in the generated codes(default is true)
	 * @return bool
	 */
	 getUseSpecialCharacters() {
	 	return this.useSpecialCharacters;
	 }
	
	/**
	 * @param useSpecialCharacters bool Indicates whether to use special characters in the generated codes(default is true)
	 */
	 setUseSpecialCharacters(useSpecialCharacters) {
	 	this.useSpecialCharacters = useSpecialCharacters;
	 }
}
module.exports.RandomCouponGenerationOptions = RandomCouponGenerationOptions;

/**
 *
 */
class KeyValue extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaKeyValue';
	}
	
	/**
	 * Key
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string Key
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * Value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.KeyValue = KeyValue;

/**
 *
 */
class EmailMessage extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailMessage';
	}
	
	/**
	 * email template name
	 * @return string
	 */
	 getTemplateName() {
	 	return this.templateName;
	 }
	
	/**
	 * @param templateName string email template name
	 */
	 setTemplateName(templateName) {
	 	this.templateName = templateName;
	 }
	
	/**
	 * email subject
	 * @return string
	 */
	 getSubject() {
	 	return this.subject;
	 }
	
	/**
	 * @param subject string email subject
	 */
	 setSubject(subject) {
	 	this.subject = subject;
	 }
	
	/**
	 * first name
	 * @return string
	 */
	 getFirstName() {
	 	return this.firstName;
	 }
	
	/**
	 * @param firstName string first name
	 */
	 setFirstName(firstName) {
	 	this.firstName = firstName;
	 }
	
	/**
	 * last name
	 * @return string
	 */
	 getLastName() {
	 	return this.lastName;
	 }
	
	/**
	 * @param lastName string last name
	 */
	 setLastName(lastName) {
	 	this.lastName = lastName;
	 }
	
	/**
	 * sender name
	 * @return string
	 */
	 getSenderName() {
	 	return this.senderName;
	 }
	
	/**
	 * @param senderName string sender name
	 */
	 setSenderName(senderName) {
	 	this.senderName = senderName;
	 }
	
	/**
	 * sender from
	 * @return string
	 */
	 getSenderFrom() {
	 	return this.senderFrom;
	 }
	
	/**
	 * @param senderFrom string sender from
	 */
	 setSenderFrom(senderFrom) {
	 	this.senderFrom = senderFrom;
	 }
	
	/**
	 * sender to
	 * @return string
	 */
	 getSenderTo() {
	 	return this.senderTo;
	 }
	
	/**
	 * @param senderTo string sender to
	 */
	 setSenderTo(senderTo) {
	 	this.senderTo = senderTo;
	 }
	
	/**
	 * bcc address - seperated by comma
	 * @return string
	 */
	 getBccAddress() {
	 	return this.bccAddress;
	 }
	
	/**
	 * @param bccAddress string bcc address - seperated by comma
	 */
	 setBccAddress(bccAddress) {
	 	this.bccAddress = bccAddress;
	 }
	
	/**
	 * extra parameters
	 * @return array
	 */
	 getExtraParameters() {
	 	return this.extraParameters;
	 }
	
	/**
	 * @param extraParameters array extra parameters
	 */
	 setExtraParameters(extraParameters) {
	 	this.extraParameters = extraParameters;
	 }
}
module.exports.EmailMessage = EmailMessage;

/**
 *
 */
class EntitlementRenewalBase extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntitlementRenewalBase';
	}
	
	/**
	 * Price that is going to be paid on the renewal
	 * @return float
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price float Price that is going to be paid on the renewal
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * Puchase ID
	 * @return int
	 */
	 getPurchaseId() {
	 	return this.purchaseId;
	 }
	
	/**
	 * @param purchaseId int Puchase ID
	 */
	 setPurchaseId(purchaseId) {
	 	this.purchaseId = purchaseId;
	 }
	
	/**
	 * Subscription ID
	 * @return int
	 */
	 getSubscriptionId() {
	 	return this.subscriptionId;
	 }
	
	/**
	 * @param subscriptionId int Subscription ID
	 */
	 setSubscriptionId(subscriptionId) {
	 	this.subscriptionId = subscriptionId;
	 }
}
module.exports.EntitlementRenewalBase = EntitlementRenewalBase;

/**
 *
 */
class UnifiedPaymentRenewal extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUnifiedPaymentRenewal';
	}
	
	/**
	 * Price that is going to be paid on the renewal
	 * @return Price
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price Price Price that is going to be paid on the renewal
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * Next renewal date
	 * @return int
	 */
	 getDate() {
	 	return this.date;
	 }
	
	/**
	 * @param date int Next renewal date
	 */
	 setDate(date) {
	 	this.date = date;
	 }
	
	/**
	 * Unified payment ID
	 * @return int
	 */
	 getUnifiedPaymentId() {
	 	return this.unifiedPaymentId;
	 }
	
	/**
	 * @param unifiedPaymentId int Unified payment ID
	 */
	 setUnifiedPaymentId(unifiedPaymentId) {
	 	this.unifiedPaymentId = unifiedPaymentId;
	 }
	
	/**
	 * List of entitlements in this unified payment renewal
	 * @return array
	 */
	 getEntitlements() {
	 	return this.entitlements;
	 }
	
	/**
	 * @param entitlements array List of entitlements in this unified payment renewal
	 */
	 setEntitlements(entitlements) {
	 	this.entitlements = entitlements;
	 }
	
	/**
	 * User ID
	 * @return int
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId int User ID
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
}
module.exports.UnifiedPaymentRenewal = UnifiedPaymentRenewal;

/**
 *
 */
class NetworkActionStatus extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaNetworkActionStatus';
	}
	
	/**
	 * Status
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status string Status
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * Social network
	 * @return string
	 */
	 getNetwork() {
	 	return this.network;
	 }
	
	/**
	 * @param network string Social network
	 */
	 setNetwork(network) {
	 	this.network = network;
	 }
}
module.exports.NetworkActionStatus = NetworkActionStatus;

/**
 *
 */
class UserSocialActionResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserSocialActionResponse';
	}
	
	/**
	 * socialAction
	 * @return SocialAction
	 */
	 getSocialAction() {
	 	return this.socialAction;
	 }
	
	/**
	 * @param socialAction SocialAction socialAction
	 */
	 setSocialAction(socialAction) {
	 	this.socialAction = socialAction;
	 }
	
	/**
	 * List of action permission items
	 * @return array
	 */
	 getFailStatus() {
	 	return this.failStatus;
	 }
	
	/**
	 * @param failStatus array List of action permission items
	 */
	 setFailStatus(failStatus) {
	 	this.failStatus = failStatus;
	 }
}
module.exports.UserSocialActionResponse = UserSocialActionResponse;

/**
 *
 */
class PaymentGatewayConfiguration extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentGatewayConfiguration';
	}
	
	/**
	 * Payment gateway configuration
	 * @return array
	 */
	 getPaymentGatewayConfiguration() {
	 	return this.paymentGatewayConfiguration;
	 }
	
	/**
	 * @param paymentGatewayConfiguration array Payment gateway configuration
	 */
	 setPaymentGatewayConfiguration(paymentGatewayConfiguration) {
	 	this.paymentGatewayConfiguration = paymentGatewayConfiguration;
	 }
}
module.exports.PaymentGatewayConfiguration = PaymentGatewayConfiguration;

/**
 *
 */
class HouseholdQuota extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdQuota';
	}
	
	/**
	 * Household identifier
	 * @return int
	 */
	 getHouseholdId() {
	 	return this.householdId;
	 }
	
	/**
	 * Total quota that is allocated to the household
	 * @return int
	 */
	 getTotalQuota() {
	 	return this.totalQuota;
	 }
	
	/**
	 * Available quota that household has remaining
	 * @return int
	 */
	 getAvailableQuota() {
	 	return this.availableQuota;
	 }
}
module.exports.HouseholdQuota = HouseholdQuota;

/**
 *
 */
class MessageTemplate extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMessageTemplate';
	}
	
	/**
	 * The message template with placeholders
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string The message template with placeholders
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * Default date format for the date &amp; time entries used in the template
	 * @return string
	 */
	 getDateFormat() {
	 	return this.dateFormat;
	 }
	
	/**
	 * @param dateFormat string Default date format for the date &amp; time entries used in the template
	 */
	 setDateFormat(dateFormat) {
	 	this.dateFormat = dateFormat;
	 }
	
	/**
	 * Template type. Possible values: Series, Reminder,Churn, SeriesReminder
	 * @return string
	 */
	 getMessageType() {
	 	return this.messageType;
	 }
	
	/**
	 * @param messageType string Template type. Possible values: Series, Reminder,Churn, SeriesReminder
	 */
	 setMessageType(messageType) {
	 	this.messageType = messageType;
	 }
	
	/**
	 * Sound file name to play upon message arrival to the device (if supported by target device)
	 * @return string
	 */
	 getSound() {
	 	return this.sound;
	 }
	
	/**
	 * @param sound string Sound file name to play upon message arrival to the device (if supported by target device)
	 */
	 setSound(sound) {
	 	this.sound = sound;
	 }
	
	/**
	 * an optional action
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string an optional action
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * URL template for deep linking. Example - /app/location/{mediaId}
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string URL template for deep linking. Example - /app/location/{mediaId}
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * Mail template name
	 * @return string
	 */
	 getMailTemplate() {
	 	return this.mailTemplate;
	 }
	
	/**
	 * @param mailTemplate string Mail template name
	 */
	 setMailTemplate(mailTemplate) {
	 	this.mailTemplate = mailTemplate;
	 }
	
	/**
	 * Mail subject
	 * @return string
	 */
	 getMailSubject() {
	 	return this.mailSubject;
	 }
	
	/**
	 * @param mailSubject string Mail subject
	 */
	 setMailSubject(mailSubject) {
	 	this.mailSubject = mailSubject;
	 }
	
	/**
	 * Ratio identifier
	 * @return string
	 */
	 getRatioId() {
	 	return this.ratioId;
	 }
	
	/**
	 * @param ratioId string Ratio identifier
	 */
	 setRatioId(ratioId) {
	 	this.ratioId = ratioId;
	 }
}
module.exports.MessageTemplate = MessageTemplate;

/**
 *
 */
class LicensedUrl extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLicensedUrl';
	}
	
	/**
	 * Main licensed URL
	 * @return string
	 */
	 getMainUrl() {
	 	return this.mainUrl;
	 }
	
	/**
	 * @param mainUrl string Main licensed URL
	 */
	 setMainUrl(mainUrl) {
	 	this.mainUrl = mainUrl;
	 }
	
	/**
	 * An alternate URL to use in case the main fails
	 * @return string
	 */
	 getAltUrl() {
	 	return this.altUrl;
	 }
	
	/**
	 * @param altUrl string An alternate URL to use in case the main fails
	 */
	 setAltUrl(altUrl) {
	 	this.altUrl = altUrl;
	 }
}
module.exports.LicensedUrl = LicensedUrl;

/**
 *
 */
class LicensedUrlBaseRequest extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLicensedUrlBaseRequest';
	}
	
	/**
	 * Asset identifier
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string Asset identifier
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
}
module.exports.LicensedUrlBaseRequest = LicensedUrlBaseRequest;

/**
 *
 */
class LicensedUrlMediaRequest extends LicensedUrlBaseRequest{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLicensedUrlMediaRequest';
	}
	
	/**
	 * Identifier of the content to get the link for (file identifier)
	 * @return int
	 */
	 getContentId() {
	 	return this.contentId;
	 }
	
	/**
	 * @param contentId int Identifier of the content to get the link for (file identifier)
	 */
	 setContentId(contentId) {
	 	this.contentId = contentId;
	 }
	
	/**
	 * Base URL for the licensed URLs
	 * @return string
	 */
	 getBaseUrl() {
	 	return this.baseUrl;
	 }
	
	/**
	 * @param baseUrl string Base URL for the licensed URLs
	 */
	 setBaseUrl(baseUrl) {
	 	this.baseUrl = baseUrl;
	 }
}
module.exports.LicensedUrlMediaRequest = LicensedUrlMediaRequest;

/**
 *
 */
class LicensedUrlEpgRequest extends LicensedUrlMediaRequest{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLicensedUrlEpgRequest';
	}
	
	/**
	 * The stream type to get the URL for
	 * @return string
	 */
	 getStreamType() {
	 	return this.streamType;
	 }
	
	/**
	 * @param streamType string The stream type to get the URL for
	 */
	 setStreamType(streamType) {
	 	this.streamType = streamType;
	 }
	
	/**
	 * The start date of the stream (epoch)
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int The start date of the stream (epoch)
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
}
module.exports.LicensedUrlEpgRequest = LicensedUrlEpgRequest;

/**
 *
 */
class LicensedUrlRecordingRequest extends LicensedUrlBaseRequest{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLicensedUrlRecordingRequest';
	}
	
	/**
	 * The file type for the URL
	 * @return string
	 */
	 getFileType() {
	 	return this.fileType;
	 }
	
	/**
	 * @param fileType string The file type for the URL
	 */
	 setFileType(fileType) {
	 	this.fileType = fileType;
	 }
}
module.exports.LicensedUrlRecordingRequest = LicensedUrlRecordingRequest;

/**
 *
 */
class RegistryResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegistryResponse';
	}
	
	/**
	 * Announcement Id
	 * @return int
	 */
	 getAnnouncementId() {
	 	return this.announcementId;
	 }
	
	/**
	 * @param announcementId int Announcement Id
	 */
	 setAnnouncementId(announcementId) {
	 	this.announcementId = announcementId;
	 }
	
	/**
	 * Key
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string Key
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * URL
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string URL
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
}
module.exports.RegistryResponse = RegistryResponse;

/**
 *
 */
class PushMessage extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPushMessage';
	}
	
	/**
	 * The message that will be presented to the user
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string The message that will be presented to the user
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * Optional. Can be used to change the default push sound on the user device
	 * @return string
	 */
	 getSound() {
	 	return this.sound;
	 }
	
	/**
	 * @param sound string Optional. Can be used to change the default push sound on the user device
	 */
	 setSound(sound) {
	 	this.sound = sound;
	 }
	
	/**
	 * Optional. Used to change the default action of the application when a push is received
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string Optional. Used to change the default action of the application when a push is received
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * Optional. Used to direct the application to the relevant page
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string Optional. Used to direct the application to the relevant page
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
}
module.exports.PushMessage = PushMessage;

/**
 *
 */
class NotificationsPartnerSettings extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaNotificationsPartnerSettings';
	}
	
	/**
	 * Push notification capability is enabled for the account
	 * @return bool
	 */
	 getPushNotificationEnabled() {
	 	return this.pushNotificationEnabled;
	 }
	
	/**
	 * @param pushNotificationEnabled bool Push notification capability is enabled for the account
	 */
	 setPushNotificationEnabled(pushNotificationEnabled) {
	 	this.pushNotificationEnabled = pushNotificationEnabled;
	 }
	
	/**
	 * System announcement capability is enabled for the account
	 * @return bool
	 */
	 getPushSystemAnnouncementsEnabled() {
	 	return this.pushSystemAnnouncementsEnabled;
	 }
	
	/**
	 * @param pushSystemAnnouncementsEnabled bool System announcement capability is enabled for the account
	 */
	 setPushSystemAnnouncementsEnabled(pushSystemAnnouncementsEnabled) {
	 	this.pushSystemAnnouncementsEnabled = pushSystemAnnouncementsEnabled;
	 }
	
	/**
	 * Window start time (UTC) for send automated push messages
	 * @return int
	 */
	 getPushStartHour() {
	 	return this.pushStartHour;
	 }
	
	/**
	 * @param pushStartHour int Window start time (UTC) for send automated push messages
	 */
	 setPushStartHour(pushStartHour) {
	 	this.pushStartHour = pushStartHour;
	 }
	
	/**
	 * Window end time (UTC) for send automated push messages
	 * @return int
	 */
	 getPushEndHour() {
	 	return this.pushEndHour;
	 }
	
	/**
	 * @param pushEndHour int Window end time (UTC) for send automated push messages
	 */
	 setPushEndHour(pushEndHour) {
	 	this.pushEndHour = pushEndHour;
	 }
	
	/**
	 * Inbox enabled
	 * @return bool
	 */
	 getInboxEnabled() {
	 	return this.inboxEnabled;
	 }
	
	/**
	 * @param inboxEnabled bool Inbox enabled
	 */
	 setInboxEnabled(inboxEnabled) {
	 	this.inboxEnabled = inboxEnabled;
	 }
	
	/**
	 * Message TTL in days
	 * @return int
	 */
	 getMessageTTLDays() {
	 	return this.messageTTLDays;
	 }
	
	/**
	 * @param messageTTLDays int Message TTL in days
	 */
	 setMessageTTLDays(messageTTLDays) {
	 	this.messageTTLDays = messageTTLDays;
	 }
	
	/**
	 * Automatic issue follow notification
	 * @return bool
	 */
	 getAutomaticIssueFollowNotification() {
	 	return this.automaticIssueFollowNotification;
	 }
	
	/**
	 * @param automaticIssueFollowNotification bool Automatic issue follow notification
	 */
	 setAutomaticIssueFollowNotification(automaticIssueFollowNotification) {
	 	this.automaticIssueFollowNotification = automaticIssueFollowNotification;
	 }
	
	/**
	 * Topic expiration duration in days
	 * @return int
	 */
	 getTopicExpirationDurationDays() {
	 	return this.topicExpirationDurationDays;
	 }
	
	/**
	 * @param topicExpirationDurationDays int Topic expiration duration in days
	 */
	 setTopicExpirationDurationDays(topicExpirationDurationDays) {
	 	this.topicExpirationDurationDays = topicExpirationDurationDays;
	 }
	
	/**
	 * Reminder enabled
	 * @return bool
	 */
	 getReminderEnabled() {
	 	return this.reminderEnabled;
	 }
	
	/**
	 * @param reminderEnabled bool Reminder enabled
	 */
	 setReminderEnabled(reminderEnabled) {
	 	this.reminderEnabled = reminderEnabled;
	 }
	
	/**
	 * Offset time (UTC) in seconds for send reminder
	 * @return int
	 */
	 getReminderOffsetSec() {
	 	return this.reminderOffsetSec;
	 }
	
	/**
	 * @param reminderOffsetSec int Offset time (UTC) in seconds for send reminder
	 */
	 setReminderOffsetSec(reminderOffsetSec) {
	 	this.reminderOffsetSec = reminderOffsetSec;
	 }
	
	/**
	 * Push adapter URL
	 * @return string
	 */
	 getPushAdapterUrl() {
	 	return this.pushAdapterUrl;
	 }
	
	/**
	 * @param pushAdapterUrl string Push adapter URL
	 */
	 setPushAdapterUrl(pushAdapterUrl) {
	 	this.pushAdapterUrl = pushAdapterUrl;
	 }
	
	/**
	 * Churn mail template name
	 * @return string
	 */
	 getChurnMailTemplateName() {
	 	return this.churnMailTemplateName;
	 }
	
	/**
	 * @param churnMailTemplateName string Churn mail template name
	 */
	 setChurnMailTemplateName(churnMailTemplateName) {
	 	this.churnMailTemplateName = churnMailTemplateName;
	 }
	
	/**
	 * Churn mail subject
	 * @return string
	 */
	 getChurnMailSubject() {
	 	return this.churnMailSubject;
	 }
	
	/**
	 * @param churnMailSubject string Churn mail subject
	 */
	 setChurnMailSubject(churnMailSubject) {
	 	this.churnMailSubject = churnMailSubject;
	 }
	
	/**
	 * Sender email
	 * @return string
	 */
	 getSenderEmail() {
	 	return this.senderEmail;
	 }
	
	/**
	 * @param senderEmail string Sender email
	 */
	 setSenderEmail(senderEmail) {
	 	this.senderEmail = senderEmail;
	 }
	
	/**
	 * Mail sender name
	 * @return string
	 */
	 getMailSenderName() {
	 	return this.mailSenderName;
	 }
	
	/**
	 * @param mailSenderName string Mail sender name
	 */
	 setMailSenderName(mailSenderName) {
	 	this.mailSenderName = mailSenderName;
	 }
	
	/**
	 * Mail notification adapter identifier
	 * @return int
	 */
	 getMailNotificationAdapterId() {
	 	return this.mailNotificationAdapterId;
	 }
	
	/**
	 * @param mailNotificationAdapterId int Mail notification adapter identifier
	 */
	 setMailNotificationAdapterId(mailNotificationAdapterId) {
	 	this.mailNotificationAdapterId = mailNotificationAdapterId;
	 }
	
	/**
	 * SMS capability is enabled for the account
	 * @return bool
	 */
	 getSmsEnabled() {
	 	return this.smsEnabled;
	 }
	
	/**
	 * @param smsEnabled bool SMS capability is enabled for the account
	 */
	 setSmsEnabled(smsEnabled) {
	 	this.smsEnabled = smsEnabled;
	 }
}
module.exports.NotificationsPartnerSettings = NotificationsPartnerSettings;

/**
 *
 */
class NotificationsSettings extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaNotificationsSettings';
	}
	
	/**
	 * Specify if the user want to receive push notifications or not
	 * @return bool
	 */
	 getPushNotificationEnabled() {
	 	return this.pushNotificationEnabled;
	 }
	
	/**
	 * @param pushNotificationEnabled bool Specify if the user want to receive push notifications or not
	 */
	 setPushNotificationEnabled(pushNotificationEnabled) {
	 	this.pushNotificationEnabled = pushNotificationEnabled;
	 }
	
	/**
	 * Specify if the user will be notified for followed content via push. (requires push_notification_enabled to be enabled)
	 * @return bool
	 */
	 getPushFollowEnabled() {
	 	return this.pushFollowEnabled;
	 }
	
	/**
	 * @param pushFollowEnabled bool Specify if the user will be notified for followed content via push. (requires push_notification_enabled to be enabled)
	 */
	 setPushFollowEnabled(pushFollowEnabled) {
	 	this.pushFollowEnabled = pushFollowEnabled;
	 }
	
	/**
	 * Specify if the user wants to receive mail notifications or not
	 * @return bool
	 */
	 getMailEnabled() {
	 	return this.mailEnabled;
	 }
	
	/**
	 * @param mailEnabled bool Specify if the user wants to receive mail notifications or not
	 */
	 setMailEnabled(mailEnabled) {
	 	this.mailEnabled = mailEnabled;
	 }
	
	/**
	 * Specify if the user wants to receive SMS notifications or not
	 * @return bool
	 */
	 getSmsEnabled() {
	 	return this.smsEnabled;
	 }
	
	/**
	 * @param smsEnabled bool Specify if the user wants to receive SMS notifications or not
	 */
	 setSmsEnabled(smsEnabled) {
	 	this.smsEnabled = smsEnabled;
	 }
}
module.exports.NotificationsSettings = NotificationsSettings;

/**
 *
 */
class TimeShiftedTvPartnerSettings extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTimeShiftedTvPartnerSettings';
	}
	
	/**
	 * Is catch-up enabled
	 * @return bool
	 */
	 getCatchUpEnabled() {
	 	return this.catchUpEnabled;
	 }
	
	/**
	 * @param catchUpEnabled bool Is catch-up enabled
	 */
	 setCatchUpEnabled(catchUpEnabled) {
	 	this.catchUpEnabled = catchUpEnabled;
	 }
	
	/**
	 * Is c-dvr enabled
	 * @return bool
	 */
	 getCdvrEnabled() {
	 	return this.cdvrEnabled;
	 }
	
	/**
	 * @param cdvrEnabled bool Is c-dvr enabled
	 */
	 setCdvrEnabled(cdvrEnabled) {
	 	this.cdvrEnabled = cdvrEnabled;
	 }
	
	/**
	 * Is start-over enabled
	 * @return bool
	 */
	 getStartOverEnabled() {
	 	return this.startOverEnabled;
	 }
	
	/**
	 * @param startOverEnabled bool Is start-over enabled
	 */
	 setStartOverEnabled(startOverEnabled) {
	 	this.startOverEnabled = startOverEnabled;
	 }
	
	/**
	 * Is trick-play enabled
	 * @return bool
	 */
	 getTrickPlayEnabled() {
	 	return this.trickPlayEnabled;
	 }
	
	/**
	 * @param trickPlayEnabled bool Is trick-play enabled
	 */
	 setTrickPlayEnabled(trickPlayEnabled) {
	 	this.trickPlayEnabled = trickPlayEnabled;
	 }
	
	/**
	 * Is recording schedule window enabled
	 * @return bool
	 */
	 getRecordingScheduleWindowEnabled() {
	 	return this.recordingScheduleWindowEnabled;
	 }
	
	/**
	 * @param recordingScheduleWindowEnabled bool Is recording schedule window enabled
	 */
	 setRecordingScheduleWindowEnabled(recordingScheduleWindowEnabled) {
	 	this.recordingScheduleWindowEnabled = recordingScheduleWindowEnabled;
	 }
	
	/**
	 * Is recording protection enabled
	 * @return bool
	 */
	 getProtectionEnabled() {
	 	return this.protectionEnabled;
	 }
	
	/**
	 * @param protectionEnabled bool Is recording protection enabled
	 */
	 setProtectionEnabled(protectionEnabled) {
	 	this.protectionEnabled = protectionEnabled;
	 }
	
	/**
	 * Catch-up buffer length
	 * @return int
	 */
	 getCatchUpBufferLength() {
	 	return this.catchUpBufferLength;
	 }
	
	/**
	 * @param catchUpBufferLength int Catch-up buffer length
	 */
	 setCatchUpBufferLength(catchUpBufferLength) {
	 	this.catchUpBufferLength = catchUpBufferLength;
	 }
	
	/**
	 * Trick play buffer length
	 * @return int
	 */
	 getTrickPlayBufferLength() {
	 	return this.trickPlayBufferLength;
	 }
	
	/**
	 * @param trickPlayBufferLength int Trick play buffer length
	 */
	 setTrickPlayBufferLength(trickPlayBufferLength) {
	 	this.trickPlayBufferLength = trickPlayBufferLength;
	 }
	
	/**
	 * Recording schedule window. Indicates how long (in minutes) after the program starts it is allowed to schedule the recording
	 * @return int
	 */
	 getRecordingScheduleWindow() {
	 	return this.recordingScheduleWindow;
	 }
	
	/**
	 * @param recordingScheduleWindow int Recording schedule window. Indicates how long (in minutes) after the program starts it is allowed to schedule the recording
	 */
	 setRecordingScheduleWindow(recordingScheduleWindow) {
	 	this.recordingScheduleWindow = recordingScheduleWindow;
	 }
	
	/**
	 * Indicates how long (in seconds) before the program starts the recording will begin
	 * @return int
	 */
	 getPaddingBeforeProgramStarts() {
	 	return this.paddingBeforeProgramStarts;
	 }
	
	/**
	 * @param paddingBeforeProgramStarts int Indicates how long (in seconds) before the program starts the recording will begin
	 */
	 setPaddingBeforeProgramStarts(paddingBeforeProgramStarts) {
	 	this.paddingBeforeProgramStarts = paddingBeforeProgramStarts;
	 }
	
	/**
	 * Indicates how long (in seconds) after the program ends the recording will end
	 * @return int
	 */
	 getPaddingAfterProgramEnds() {
	 	return this.paddingAfterProgramEnds;
	 }
	
	/**
	 * @param paddingAfterProgramEnds int Indicates how long (in seconds) after the program ends the recording will end
	 */
	 setPaddingAfterProgramEnds(paddingAfterProgramEnds) {
	 	this.paddingAfterProgramEnds = paddingAfterProgramEnds;
	 }
	
	/**
	 * Specify the time in days that a recording should be protected. Start time begins at protection request
	 * @return int
	 */
	 getProtectionPeriod() {
	 	return this.protectionPeriod;
	 }
	
	/**
	 * @param protectionPeriod int Specify the time in days that a recording should be protected. Start time begins at protection request
	 */
	 setProtectionPeriod(protectionPeriod) {
	 	this.protectionPeriod = protectionPeriod;
	 }
	
	/**
	 * Indicates how many percent of the quota can be used for protection
	 * @return int
	 */
	 getProtectionQuotaPercentage() {
	 	return this.protectionQuotaPercentage;
	 }
	
	/**
	 * @param protectionQuotaPercentage int Indicates how many percent of the quota can be used for protection
	 */
	 setProtectionQuotaPercentage(protectionQuotaPercentage) {
	 	this.protectionQuotaPercentage = protectionQuotaPercentage;
	 }
	
	/**
	 * Specify the time in days that a recording should be kept for user. Start time begins with the program end date
	 * @return int
	 */
	 getRecordingLifetimePeriod() {
	 	return this.recordingLifetimePeriod;
	 }
	
	/**
	 * @param recordingLifetimePeriod int Specify the time in days that a recording should be kept for user. Start time begins with the program end date
	 */
	 setRecordingLifetimePeriod(recordingLifetimePeriod) {
	 	this.recordingLifetimePeriod = recordingLifetimePeriod;
	 }
	
	/**
	 * The time in days before the recording lifetime is due from which the client should be able to warn user about deletion
	 * @return int
	 */
	 getCleanupNoticePeriod() {
	 	return this.cleanupNoticePeriod;
	 }
	
	/**
	 * @param cleanupNoticePeriod int The time in days before the recording lifetime is due from which the client should be able to warn user about deletion
	 */
	 setCleanupNoticePeriod(cleanupNoticePeriod) {
	 	this.cleanupNoticePeriod = cleanupNoticePeriod;
	 }
	
	/**
	 * Is recording of series enabled
	 * @return bool
	 */
	 getSeriesRecordingEnabled() {
	 	return this.seriesRecordingEnabled;
	 }
	
	/**
	 * @param seriesRecordingEnabled bool Is recording of series enabled
	 */
	 setSeriesRecordingEnabled(seriesRecordingEnabled) {
	 	this.seriesRecordingEnabled = seriesRecordingEnabled;
	 }
	
	/**
	 * Is recording playback for non-entitled channel enables
	 * @return bool
	 */
	 getNonEntitledChannelPlaybackEnabled() {
	 	return this.nonEntitledChannelPlaybackEnabled;
	 }
	
	/**
	 * @param nonEntitledChannelPlaybackEnabled bool Is recording playback for non-entitled channel enables
	 */
	 setNonEntitledChannelPlaybackEnabled(nonEntitledChannelPlaybackEnabled) {
	 	this.nonEntitledChannelPlaybackEnabled = nonEntitledChannelPlaybackEnabled;
	 }
	
	/**
	 * Is recording playback for non-existing channel enables
	 * @return bool
	 */
	 getNonExistingChannelPlaybackEnabled() {
	 	return this.nonExistingChannelPlaybackEnabled;
	 }
	
	/**
	 * @param nonExistingChannelPlaybackEnabled bool Is recording playback for non-existing channel enables
	 */
	 setNonExistingChannelPlaybackEnabled(nonExistingChannelPlaybackEnabled) {
	 	this.nonExistingChannelPlaybackEnabled = nonExistingChannelPlaybackEnabled;
	 }
	
	/**
	 * Quota Policy
	 * @return string
	 */
	 getQuotaOveragePolicy() {
	 	return this.quotaOveragePolicy;
	 }
	
	/**
	 * @param quotaOveragePolicy string Quota Policy
	 */
	 setQuotaOveragePolicy(quotaOveragePolicy) {
	 	this.quotaOveragePolicy = quotaOveragePolicy;
	 }
	
	/**
	 * Protection Policy
	 * @return string
	 */
	 getProtectionPolicy() {
	 	return this.protectionPolicy;
	 }
	
	/**
	 * @param protectionPolicy string Protection Policy
	 */
	 setProtectionPolicy(protectionPolicy) {
	 	this.protectionPolicy = protectionPolicy;
	 }
	
	/**
	 * The time in days for recovery recording that was delete by Auto Delete
	 * @return int
	 */
	 getRecoveryGracePeriod() {
	 	return this.recoveryGracePeriod;
	 }
	
	/**
	 * @param recoveryGracePeriod int The time in days for recovery recording that was delete by Auto Delete
	 */
	 setRecoveryGracePeriod(recoveryGracePeriod) {
	 	this.recoveryGracePeriod = recoveryGracePeriod;
	 }
}
module.exports.TimeShiftedTvPartnerSettings = TimeShiftedTvPartnerSettings;

/**
 *
 */
class UserAssetsListItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAssetsListItem';
	}
	
	/**
	 * Asset identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Asset identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * The order index of the asset in the list
	 * @return int
	 */
	 getOrderIndex() {
	 	return this.orderIndex;
	 }
	
	/**
	 * @param orderIndex int The order index of the asset in the list
	 */
	 setOrderIndex(orderIndex) {
	 	this.orderIndex = orderIndex;
	 }
	
	/**
	 * The type of the asset
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string The type of the asset
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * The identifier of the user who added the item to the list
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * The type of the list, all is not supported
	 * @return string
	 */
	 getListType() {
	 	return this.listType;
	 }
	
	/**
	 * @param listType string The type of the list, all is not supported
	 */
	 setListType(listType) {
	 	this.listType = listType;
	 }
}
module.exports.UserAssetsListItem = UserAssetsListItem;

/**
 *
 */
class HouseholdLimitations extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdLimitations';
	}
	
	/**
	 * Household limitation module identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Household limitation module name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * Max number of streams allowed for the household
	 * @return int
	 */
	 getConcurrentLimit() {
	 	return this.concurrentLimit;
	 }
	
	/**
	 * Max number of devices allowed for the household
	 * @return int
	 */
	 getDeviceLimit() {
	 	return this.deviceLimit;
	 }
	
	/**
	 * Allowed device change frequency code
	 * @return int
	 */
	 getDeviceFrequency() {
	 	return this.deviceFrequency;
	 }
	
	/**
	 * Allowed device change frequency description
	 * @return string
	 */
	 getDeviceFrequencyDescription() {
	 	return this.deviceFrequencyDescription;
	 }
	
	/**
	 * Allowed user change frequency code
	 * @return int
	 */
	 getUserFrequency() {
	 	return this.userFrequency;
	 }
	
	/**
	 * Allowed user change frequency description
	 * @return string
	 */
	 getUserFrequencyDescription() {
	 	return this.userFrequencyDescription;
	 }
	
	/**
	 * Allowed NPVR Quota in Seconds
	 * @return int
	 */
	 getNpvrQuotaInSeconds() {
	 	return this.npvrQuotaInSeconds;
	 }
	
	/**
	 * Max number of users allowed for the household
	 * @return int
	 */
	 getUsersLimit() {
	 	return this.usersLimit;
	 }
	
	/**
	 * Device families limitations
	 * @return array
	 */
	 getDeviceFamiliesLimitations() {
	 	return this.deviceFamiliesLimitations;
	 }
}
module.exports.HouseholdLimitations = HouseholdLimitations;

/**
 *
 */
class LoginSession extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLoginSession';
	}
	
	/**
	 * Access token in a KS format
	 * @return string
	 */
	 getKs() {
	 	return this.ks;
	 }
	
	/**
	 * @param ks string Access token in a KS format
	 */
	 setKs(ks) {
	 	this.ks = ks;
	 }
}
module.exports.LoginSession = LoginSession;

/**
 *
 */
class Household extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHousehold';
	}
	
	/**
	 * Household identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Household name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Household name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Household description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Household description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Household external identifier
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string Household external identifier
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Household limitation module identifier
	 * @return int
	 */
	 getHouseholdLimitationsId() {
	 	return this.householdLimitationsId;
	 }
	
	/**
	 * The max number of the devices that can be added to the household
	 * @return int
	 */
	 getDevicesLimit() {
	 	return this.devicesLimit;
	 }
	
	/**
	 * The max number of the users that can be added to the household
	 * @return int
	 */
	 getUsersLimit() {
	 	return this.usersLimit;
	 }
	
	/**
	 * The max number of concurrent streams in the household
	 * @return int
	 */
	 getConcurrentLimit() {
	 	return this.concurrentLimit;
	 }
	
	/**
	 * The households region identifier
	 * @return int
	 */
	 getRegionId() {
	 	return this.regionId;
	 }
	
	/**
	 * Household state
	 * @return string
	 */
	 getState() {
	 	return this.state;
	 }
	
	/**
	 * Is household frequency enabled
	 * @return bool
	 */
	 getIsFrequencyEnabled() {
	 	return this.isFrequencyEnabled;
	 }
	
	/**
	 * The next time a device is allowed to be removed from the household (epoch)
	 * @return int
	 */
	 getFrequencyNextDeviceAction() {
	 	return this.frequencyNextDeviceAction;
	 }
	
	/**
	 * The next time a user is allowed to be removed from the household (epoch)
	 * @return int
	 */
	 getFrequencyNextUserAction() {
	 	return this.frequencyNextUserAction;
	 }
	
	/**
	 * Household restriction
	 * @return string
	 */
	 getRestriction() {
	 	return this.restriction;
	 }
	
	/**
	 * suspended roleId
	 * @return int
	 */
	 getRoleId() {
	 	return this.roleId;
	 }
}
module.exports.Household = Household;

/**
 *
 */
class DevicePin extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDevicePin';
	}
	
	/**
	 * Device pin
	 * @return string
	 */
	 getPin() {
	 	return this.pin;
	 }
	
	/**
	 * @param pin string Device pin
	 */
	 setPin(pin) {
	 	this.pin = pin;
	 }
}
module.exports.DevicePin = DevicePin;

/**
 *
 */
class LoginResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLoginResponse';
	}
	
	/**
	 * User
	 * @return OTTUser
	 */
	 getUser() {
	 	return this.user;
	 }
	
	/**
	 * @param user OTTUser User
	 */
	 setUser(user) {
	 	this.user = user;
	 }
	
	/**
	 * Kaltura login session details
	 * @return LoginSession
	 */
	 getLoginSession() {
	 	return this.loginSession;
	 }
	
	/**
	 * @param loginSession LoginSession Kaltura login session details
	 */
	 setLoginSession(loginSession) {
	 	this.loginSession = loginSession;
	 }
}
module.exports.LoginResponse = LoginResponse;

/**
 *
 */
class Pin extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPin';
	}
	
	/**
	 * PIN code
	 * @return string
	 */
	 getPin() {
	 	return this.pin;
	 }
	
	/**
	 * @param pin string PIN code
	 */
	 setPin(pin) {
	 	this.pin = pin;
	 }
	
	/**
	 * Where the PIN was defined at – account, household or user
	 * @return string
	 */
	 getOrigin() {
	 	return this.origin;
	 }
	
	/**
	 * @param origin string Where the PIN was defined at – account, household or user
	 */
	 setOrigin(origin) {
	 	this.origin = origin;
	 }
	
	/**
	 * PIN type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string PIN type
	 */
	 setType(type) {
	 	this.type = type;
	 }
}
module.exports.Pin = Pin;

/**
 *
 */
class PurchaseSettings extends Pin{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPurchaseSettings';
	}
	
	/**
	 * Purchase permission - block, ask or allow
	 * @return string
	 */
	 getPermission() {
	 	return this.permission;
	 }
	
	/**
	 * @param permission string Purchase permission - block, ask or allow
	 */
	 setPermission(permission) {
	 	this.permission = permission;
	 }
}
module.exports.PurchaseSettings = PurchaseSettings;

/**
 *
 */
class Coupon extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCoupon';
	}
	
	/**
	 * Coupons group details
	 * @return CouponsGroup
	 */
	 getCouponsGroup() {
	 	return this.couponsGroup;
	 }
	
	/**
	 * Coupon status
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Total available coupon uses
	 * @return int
	 */
	 getTotalUses() {
	 	return this.totalUses;
	 }
	
	/**
	 * Left coupon uses
	 * @return int
	 */
	 getLeftUses() {
	 	return this.leftUses;
	 }
}
module.exports.Coupon = Coupon;

/**
 *
 */
class OTTCategory extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTCategory';
	}
	
	/**
	 * Unique identifier for the category
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Category name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Category name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Category parent identifier
	 * @return int
	 */
	 getParentCategoryId() {
	 	return this.parentCategoryId;
	 }
	
	/**
	 * @param parentCategoryId int Category parent identifier
	 */
	 setParentCategoryId(parentCategoryId) {
	 	this.parentCategoryId = parentCategoryId;
	 }
	
	/**
	 * Child categories
	 * @return array
	 */
	 getChildCategories() {
	 	return this.childCategories;
	 }
	
	/**
	 * @param childCategories array Child categories
	 */
	 setChildCategories(childCategories) {
	 	this.childCategories = childCategories;
	 }
	
	/**
	 * Category channels
	 * @return array
	 */
	 getChannels() {
	 	return this.channels;
	 }
	
	/**
	 * @param channels array Category channels
	 */
	 setChannels(channels) {
	 	this.channels = channels;
	 }
	
	/**
	 * Category images
	 * @return array
	 */
	 getImages() {
	 	return this.images;
	 }
	
	/**
	 * @param images array Category images
	 */
	 setImages(images) {
	 	this.images = images;
	 }
}
module.exports.OTTCategory = OTTCategory;

/**
 *
 */
class EntitlementRenewal extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntitlementRenewal';
	}
	
	/**
	 * Price that is going to be paid on the renewal
	 * @return Price
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price Price Price that is going to be paid on the renewal
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * Next renewal date
	 * @return int
	 */
	 getDate() {
	 	return this.date;
	 }
	
	/**
	 * @param date int Next renewal date
	 */
	 setDate(date) {
	 	this.date = date;
	 }
	
	/**
	 * Puchase ID
	 * @return int
	 */
	 getPurchaseId() {
	 	return this.purchaseId;
	 }
	
	/**
	 * @param purchaseId int Puchase ID
	 */
	 setPurchaseId(purchaseId) {
	 	this.purchaseId = purchaseId;
	 }
	
	/**
	 * Subscription ID
	 * @return int
	 */
	 getSubscriptionId() {
	 	return this.subscriptionId;
	 }
	
	/**
	 * @param subscriptionId int Subscription ID
	 */
	 setSubscriptionId(subscriptionId) {
	 	this.subscriptionId = subscriptionId;
	 }
	
	/**
	 * User ID
	 * @return int
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId int User ID
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
}
module.exports.EntitlementRenewal = EntitlementRenewal;

/**
 *
 */
class Social extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocial';
	}
	
	/**
	 * Facebook identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Full name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Full name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * First name
	 * @return string
	 */
	 getFirstName() {
	 	return this.firstName;
	 }
	
	/**
	 * @param firstName string First name
	 */
	 setFirstName(firstName) {
	 	this.firstName = firstName;
	 }
	
	/**
	 * Last name
	 * @return string
	 */
	 getLastName() {
	 	return this.lastName;
	 }
	
	/**
	 * @param lastName string Last name
	 */
	 setLastName(lastName) {
	 	this.lastName = lastName;
	 }
	
	/**
	 * User email
	 * @return string
	 */
	 getEmail() {
	 	return this.email;
	 }
	
	/**
	 * @param email string User email
	 */
	 setEmail(email) {
	 	this.email = email;
	 }
	
	/**
	 * Gender
	 * @return string
	 */
	 getGender() {
	 	return this.gender;
	 }
	
	/**
	 * @param gender string Gender
	 */
	 setGender(gender) {
	 	this.gender = gender;
	 }
	
	/**
	 * User identifier
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * User birthday
	 * @return string
	 */
	 getBirthday() {
	 	return this.birthday;
	 }
	
	/**
	 * @param birthday string User birthday
	 */
	 setBirthday(birthday) {
	 	this.birthday = birthday;
	 }
	
	/**
	 * User model status
 * Possible values: UNKNOWN, OK, ERROR, NOACTION, NOTEXIST, CONFLICT, MERGE, MERGEOK, NEWUSER, MINFRIENDS, INVITEOK, INVITEERROR, ACCESSDENIED, WRONGPASSWORDORUSERNAME, UNMERGEOK, USEREMAILISMISSING
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Profile picture URL
	 * @return string
	 */
	 getPictureUrl() {
	 	return this.pictureUrl;
	 }
	
	/**
	 * @param pictureUrl string Profile picture URL
	 */
	 setPictureUrl(pictureUrl) {
	 	this.pictureUrl = pictureUrl;
	 }
}
module.exports.Social = Social;

/**
 *
 */
class FacebookSocial extends Social{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFacebookSocial';
	}
}
module.exports.FacebookSocial = FacebookSocial;

/**
 *
 */
class SocialConfig extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialConfig';
	}
}
module.exports.SocialConfig = SocialConfig;

/**
 *
 */
class SocialFacebookConfig extends SocialConfig{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialFacebookConfig';
	}
	
	/**
	 * The application identifier
	 * @return string
	 */
	 getAppId() {
	 	return this.appId;
	 }
	
	/**
	 * @param appId string The application identifier
	 */
	 setAppId(appId) {
	 	this.appId = appId;
	 }
	
	/**
	 * List of application permissions
	 * @return string
	 */
	 getPermissions() {
	 	return this.permissions;
	 }
	
	/**
	 * @param permissions string List of application permissions
	 */
	 setPermissions(permissions) {
	 	this.permissions = permissions;
	 }
}
module.exports.SocialFacebookConfig = SocialFacebookConfig;

/**
 *
 */
class ActionPermissionItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaActionPermissionItem';
	}
	
	/**
	 * Social network
	 * @return string
	 */
	 getNetwork() {
	 	return this.network;
	 }
	
	/**
	 * @param network string Social network
	 */
	 setNetwork(network) {
	 	this.network = network;
	 }
	
	/**
	 * Action privacy
	 * @return string
	 */
	 getActionPrivacy() {
	 	return this.actionPrivacy;
	 }
	
	/**
	 * @param actionPrivacy string Action privacy
	 */
	 setActionPrivacy(actionPrivacy) {
	 	this.actionPrivacy = actionPrivacy;
	 }
	
	/**
	 * Social privacy
	 * @return string
	 */
	 getPrivacy() {
	 	return this.privacy;
	 }
	
	/**
	 * @param privacy string Social privacy
	 */
	 setPrivacy(privacy) {
	 	this.privacy = privacy;
	 }
	
	/**
	 * Action - separated with comma
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string Action - separated with comma
	 */
	 setAction(action) {
	 	this.action = action;
	 }
}
module.exports.ActionPermissionItem = ActionPermissionItem;

/**
 *
 */
class SocialUserConfig extends SocialConfig{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialUserConfig';
	}
	
	/**
	 * List of action permission items
	 * @return array
	 */
	 getActionPermissionItems() {
	 	return this.actionPermissionItems;
	 }
	
	/**
	 * @param actionPermissionItems array List of action permission items
	 */
	 setActionPermissionItems(actionPermissionItems) {
	 	this.actionPermissionItems = actionPermissionItems;
	 }
}
module.exports.SocialUserConfig = SocialUserConfig;

/**
 *
 */
class PurchaseBase extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPurchaseBase';
	}
	
	/**
	 * Identifier for the package from which this content is offered
	 * @return int
	 */
	 getProductId() {
	 	return this.productId;
	 }
	
	/**
	 * @param productId int Identifier for the package from which this content is offered
	 */
	 setProductId(productId) {
	 	this.productId = productId;
	 }
	
	/**
	 * Identifier for the content to purchase. Relevant only if Product type = PPV
	 * @return int
	 */
	 getContentId() {
	 	return this.contentId;
	 }
	
	/**
	 * @param contentId int Identifier for the content to purchase. Relevant only if Product type = PPV
	 */
	 setContentId(contentId) {
	 	this.contentId = contentId;
	 }
	
	/**
	 * Package type. Possible values: PPV, Subscription, Collection
	 * @return string
	 */
	 getProductType() {
	 	return this.productType;
	 }
	
	/**
	 * @param productType string Package type. Possible values: PPV, Subscription, Collection
	 */
	 setProductType(productType) {
	 	this.productType = productType;
	 }
}
module.exports.PurchaseBase = PurchaseBase;

/**
 *
 */
class Purchase extends PurchaseBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPurchase';
	}
	
	/**
	 * Identifier for paying currency, according to ISO 4217
	 * @return string
	 */
	 getCurrency() {
	 	return this.currency;
	 }
	
	/**
	 * @param currency string Identifier for paying currency, according to ISO 4217
	 */
	 setCurrency(currency) {
	 	this.currency = currency;
	 }
	
	/**
	 * Net sum to charge – as a one-time transaction. Price must match the previously provided price for the specified content
	 * @return float
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price float Net sum to charge – as a one-time transaction. Price must match the previously provided price for the specified content
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * Identifier for a pre-entered payment method. If not provided – the household’s default payment method is used
	 * @return int
	 */
	 getPaymentMethodId() {
	 	return this.paymentMethodId;
	 }
	
	/**
	 * @param paymentMethodId int Identifier for a pre-entered payment method. If not provided – the household’s default payment method is used
	 */
	 setPaymentMethodId(paymentMethodId) {
	 	this.paymentMethodId = paymentMethodId;
	 }
	
	/**
	 * Identifier for a pre-associated payment gateway. If not provided – the account’s default payment gateway is used
	 * @return int
	 */
	 getPaymentGatewayId() {
	 	return this.paymentGatewayId;
	 }
	
	/**
	 * @param paymentGatewayId int Identifier for a pre-associated payment gateway. If not provided – the account’s default payment gateway is used
	 */
	 setPaymentGatewayId(paymentGatewayId) {
	 	this.paymentGatewayId = paymentGatewayId;
	 }
	
	/**
	 * Coupon code
	 * @return string
	 */
	 getCoupon() {
	 	return this.coupon;
	 }
	
	/**
	 * @param coupon string Coupon code
	 */
	 setCoupon(coupon) {
	 	this.coupon = coupon;
	 }
	
	/**
	 * Additional data for the adapter
	 * @return string
	 */
	 getAdapterData() {
	 	return this.adapterData;
	 }
	
	/**
	 * @param adapterData string Additional data for the adapter
	 */
	 setAdapterData(adapterData) {
	 	this.adapterData = adapterData;
	 }
}
module.exports.Purchase = Purchase;

/**
 *
 */
class PurchaseSession extends Purchase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPurchaseSession';
	}
	
	/**
	 * Preview module identifier (relevant only for subscription)
	 * @return int
	 */
	 getPreviewModuleId() {
	 	return this.previewModuleId;
	 }
	
	/**
	 * @param previewModuleId int Preview module identifier (relevant only for subscription)
	 */
	 setPreviewModuleId(previewModuleId) {
	 	this.previewModuleId = previewModuleId;
	 }
}
module.exports.PurchaseSession = PurchaseSession;

/**
 *
 */
class ExternalReceipt extends PurchaseBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalReceipt';
	}
	
	/**
	 * A unique identifier that was provided by the In-App billing service to validate the purchase
	 * @return string
	 */
	 getReceiptId() {
	 	return this.receiptId;
	 }
	
	/**
	 * @param receiptId string A unique identifier that was provided by the In-App billing service to validate the purchase
	 */
	 setReceiptId(receiptId) {
	 	this.receiptId = receiptId;
	 }
	
	/**
	 * The payment gateway name for the In-App billing service to be used. Possible values: Google/Apple
	 * @return string
	 */
	 getPaymentGatewayName() {
	 	return this.paymentGatewayName;
	 }
	
	/**
	 * @param paymentGatewayName string The payment gateway name for the In-App billing service to be used. Possible values: Google/Apple
	 */
	 setPaymentGatewayName(paymentGatewayName) {
	 	this.paymentGatewayName = paymentGatewayName;
	 }
}
module.exports.ExternalReceipt = ExternalReceipt;

/**
 *
 */
class Transaction extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTransaction';
	}
	
	/**
	 * Kaltura unique ID representing the transaction
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Kaltura unique ID representing the transaction
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * Transaction reference ID received from the payment gateway.
 * Value is available only if the payment gateway provides this information
	 * @return string
	 */
	 getPaymentGatewayReferenceId() {
	 	return this.paymentGatewayReferenceId;
	 }
	
	/**
	 * @param paymentGatewayReferenceId string Transaction reference ID received from the payment gateway.
 * Value is available only if the payment gateway provides this information
	 */
	 setPaymentGatewayReferenceId(paymentGatewayReferenceId) {
	 	this.paymentGatewayReferenceId = paymentGatewayReferenceId;
	 }
	
	/**
	 * Response ID received from by the payment gateway.
 * Value is available only if the payment gateway provides this information
	 * @return string
	 */
	 getPaymentGatewayResponseId() {
	 	return this.paymentGatewayResponseId;
	 }
	
	/**
	 * @param paymentGatewayResponseId string Response ID received from by the payment gateway.
 * Value is available only if the payment gateway provides this information
	 */
	 setPaymentGatewayResponseId(paymentGatewayResponseId) {
	 	this.paymentGatewayResponseId = paymentGatewayResponseId;
	 }
	
	/**
	 * Transaction state: OK/Pending/Failed
	 * @return string
	 */
	 getState() {
	 	return this.state;
	 }
	
	/**
	 * @param state string Transaction state: OK/Pending/Failed
	 */
	 setState(state) {
	 	this.state = state;
	 }
	
	/**
	 * Adapter failure reason code
 * Insufficient funds = 20, Invalid account = 21, User unknown = 22, Reason unknown = 23, Unknown payment gateway response = 24,
 * No response from payment gateway = 25, Exceeded retry limit = 26, Illegal client request = 27, Expired = 28
	 * @return int
	 */
	 getFailReasonCode() {
	 	return this.failReasonCode;
	 }
	
	/**
	 * @param failReasonCode int Adapter failure reason code
 * Insufficient funds = 20, Invalid account = 21, User unknown = 22, Reason unknown = 23, Unknown payment gateway response = 24,
 * No response from payment gateway = 25, Exceeded retry limit = 26, Illegal client request = 27, Expired = 28
	 */
	 setFailReasonCode(failReasonCode) {
	 	this.failReasonCode = failReasonCode;
	 }
	
	/**
	 * Entitlement creation date
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * @param createdAt int Entitlement creation date
	 */
	 setCreatedAt(createdAt) {
	 	this.createdAt = createdAt;
	 }
}
module.exports.Transaction = Transaction;

/**
 *
 */
class TransactionStatus extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTransactionStatus';
	}
	
	/**
	 * Payment gateway adapter application state for the transaction to update
	 * @return string
	 */
	 getAdapterTransactionStatus() {
	 	return this.adapterTransactionStatus;
	 }
	
	/**
	 * @param adapterTransactionStatus string Payment gateway adapter application state for the transaction to update
	 */
	 setAdapterTransactionStatus(adapterTransactionStatus) {
	 	this.adapterTransactionStatus = adapterTransactionStatus;
	 }
	
	/**
	 * External transaction identifier
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External transaction identifier
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Payment gateway transaction status
	 * @return string
	 */
	 getExternalStatus() {
	 	return this.externalStatus;
	 }
	
	/**
	 * @param externalStatus string Payment gateway transaction status
	 */
	 setExternalStatus(externalStatus) {
	 	this.externalStatus = externalStatus;
	 }
	
	/**
	 * Payment gateway message
	 * @return string
	 */
	 getExternalMessage() {
	 	return this.externalMessage;
	 }
	
	/**
	 * @param externalMessage string Payment gateway message
	 */
	 setExternalMessage(externalMessage) {
	 	this.externalMessage = externalMessage;
	 }
	
	/**
	 * The reason the transaction failed
	 * @return int
	 */
	 getFailReason() {
	 	return this.failReason;
	 }
	
	/**
	 * @param failReason int The reason the transaction failed
	 */
	 setFailReason(failReason) {
	 	this.failReason = failReason;
	 }
}
module.exports.TransactionStatus = TransactionStatus;

/**
 *
 */
class UserLoginPin extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserLoginPin';
	}
	
	/**
	 * Generated login pin code
	 * @return string
	 */
	 getPinCode() {
	 	return this.pinCode;
	 }
	
	/**
	 * @param pinCode string Generated login pin code
	 */
	 setPinCode(pinCode) {
	 	this.pinCode = pinCode;
	 }
	
	/**
	 * Login pin expiration time (epoch)
	 * @return int
	 */
	 getExpirationTime() {
	 	return this.expirationTime;
	 }
	
	/**
	 * @param expirationTime int Login pin expiration time (epoch)
	 */
	 setExpirationTime(expirationTime) {
	 	this.expirationTime = expirationTime;
	 }
	
	/**
	 * User Identifier
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
}
module.exports.UserLoginPin = UserLoginPin;

/**
 *
 */
class OTTUserDynamicData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTUserDynamicData';
	}
	
	/**
	 * User identifier
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * Key
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string Key
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * Value
	 * @return StringValue
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value StringValue Value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.OTTUserDynamicData = OTTUserDynamicData;
