/**
 * The User object captures the profile of a user who is interacting with the website. Although typically web data has a single user per recorded interaction, this object is an array and can capture multiple users.
 *
 * Esta chave deve estar presente em todas as páginas, a patir do login do usuário.
 *
 * @scope all
 * @path digitalData.user[n]
 *
 * @param {Object}  profile   A profile for information about the purchaser, typically associated with a registered user
 *
 * @jsFiddle http://jsfiddle.net/phms/RP576/embedded/js/
 */
digitalData.user = [{
	profile: {}
}];


/**
 * A profile for information about the purchaser, typically associated with a registered user.
 *
 * @scope all
 * @path digitalData.user[n].profile
 *
 * @param {Object}     profileInfo   An extensible object for providing information about the purchaser profile.
 */
user.profile = {
	profileInfo: {}
};


/**
 * An extensible object for providing information about the purchaser profile.
 *
 * @scope all
 * @path digitalData.user[n].profile.profileInfo
 *
 * @param {String}     profileID   A unique identifier for a particular user
 * @param {String}     userName    The username used on the site registration
 * @param {String}     email       Email address from the user
 * @param {String)     language	   Language code (ISO 639 two-letter lowercase culture code associated with a language and an ISO 3166 two-letter uppercase subculture code associated with a country or region)
 * @param {String}     type        User type as 'premium' versus 'basic' membership, or any other forms of segmentation
 */
profile.profileInfo = {
	profileID: "",
	userName: "",
	email: "",
	language: "",
	type: ""
};