define([
	"backbone",
	"postal"
],function(Backbone,postal){

	var R = Backbone.Router.extend({
		channel: postal.channel('app'),
		routes: {
			"":"index",

			"nowplaying/:track_id":"nowplaying",
			"nowplaying":"nowplaying",
			
			"playlists/:hash":"playlist",
			"playlists":"playlists",

			"search":"search",
			"popular":"popular"
			
		},
		index: function(){
			this.channel.publish('module.start',{
				module:'default'
			});
		},
		search: function(){
			
			this.channel.publish('module.start',{
				module:'search'
			});
		},
		nowplaying: function(track_id){
			
			this.channel.publish('module.start',{
				module:'nowplaying',
				track_id: track_id
			});
		},
		playlists: function(playlist_id){
			
			this.channel.publish('module.start',{
				module:'playlists'
			});
		},
		playlist: function(hash){
			if (hash && (hash.length === 40 || hash.length === 64)) {

				this.channel.publish('module.start',{
					module:'playlist',
					hash: hash
				});	

			} else {
				// not a valid playlist hash, navigate to search
				Backbone.history.navigate('search',true);
			}
			
		},
		popular: function(){
			this.channel.publish('module.start',{
				module:'popular'
			});	
		}

	});

	return R;
});