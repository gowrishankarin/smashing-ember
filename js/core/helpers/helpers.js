/* 
* @Author: Gowri Gary Shankar
* @Date:   2014-01-09 11:14:52
* @Last Modified by:   Gowri Gary Shankar
* @Last Modified time: 2014-01-09 11:20:57
*/


Ember.Handlebars.helper('formatDate', function(date) {
	return moment(date).fromNow();
});