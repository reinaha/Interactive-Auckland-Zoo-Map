$(function(){

	let center = [ -36.86260923377209,174.72008228302002];

	let map = L.map('map').setView(center,17);

	let services = [
		{
			latlng:[-36.86414144235529,174.71983551979065],
			description:'restroom',
			iconImage:'assets/restroom.svg'
		},
		{
			latlng:[-36.86336890405267,174.71921861171722],
			description:'restroom',
			iconImage:'assets/restroom.svg'
		},
		{
			latlng:[-36.86313284912454,174.7200608253479],
			description:'restroom',
			iconImage:'assets/restroom.svg'
		},
		{
			latlng:[-36.86405131328911,174.72195982933042],
			description:'restroom',
			iconImage:'assets/restroom.svg'
		},
		{
			latlng:[-36.86431740832095,174.72114980220795],
			description:'restroom',
			iconImage:'assets/restroom.svg'
		},
		{
			latlng:[-36.86175084018616,174.71992135047913],
			description:'restroom',
			iconImage:'assets/restroom.svg'
		},
		{
			latlng:[-36.86205127903808,174.72149312496185],
			description:'restroom',
			iconImage:'assets/restroom.svg'
		},

		{
			latlng:[-36.86412856678091,174.72003400325775],
			description:'Food',
			iconImage:'assets/food.svg'
		},
		{
			latlng:[-36.863128557210004,174.72021102905273],
			description:'Food',
			iconImage:'assets/food.svg'
		},
		{
			latlng:[-36.86230879711385,174.7218632698059],
			description:'Food',
			iconImage:'assets/food.svg'
		},
		{
			latlng:[-36.86392684916581,174.72210466861725],
			description:'Food',
			iconImage:'assets/food.svg'
		},
		{
			latlng:[-36.863134995081715,174.71991330385208],
			description:'Water',
			iconImage:'assets/water.svg'
		},
		{
			latlng:[-36.86235171670878,174.71920251846313],
			description:'Water',
			iconImage:'assets/water.svg'
		},
		{
			latlng:[-36.86220578998768,174.71994280815125],
			description:'Water',
			iconImage:'assets/water.svg'
		},
		{
			latlng:[-36.861561992303244,174.72018420696259],
			description:'Water',
			iconImage:'assets/water.svg'
		},
		{
			latlng:[-36.862707948416265,174.72202956676483],
			description:'Water',
			iconImage:'assets/water.svg'
		},
		{
			latlng:[-36.86227875338306,174.72235143184662],
			description:'Water',
			iconImage:'assets/water.svg'
		},
		{
			latlng:[-36.86291396117595,174.72100496292114],
			description:'Water',
			iconImage:'assets/water.svg'
		},
		{
			latlng:[-36.86410281562566,174.7211980819702],
			description:'Water',
			iconImage:'assets/water.svg'
		},
		{
			latlng:[-36.86334744454389,174.7193741798401],
			description:'Baby',
			iconImage:'assets/baby.svg'
		},
		{
			latlng:[-36.86312426529523,174.7203665971756],
			description:'Baby',
			iconImage:'assets/baby.svg'
		},
		{
			latlng:[-36.86207703088471,174.7216433286667],
			description:'Baby',
			iconImage:'assets/baby.svg'
		},
		{
			latlng:[-36.86414144235529,174.72206711769104],
			description:'Baby',
			iconImage:'assets/baby.svg'
		},
		{
			latlng:[-36.86414144235529,174.72206711769104],
			description:'Baby',
			iconImage:'assets/baby.svg'
		},
		{
			latlng:[-36.86414144235529,174.71966385841367],
			description:'Disabled',
			iconImage:'assets/disabled.svg'
		},
		{
			latlng:[-36.86314143295289,174.71974968910217],
			description:'Disabled',
			iconImage:'assets/disabled.svg'
		},
		{
			latlng:[-36.86384101172127,174.71966922283173],
			description:'First Aid',
			iconImage:'assets/firstAid.svg'
		},
		{
			latlng:[-36.86383242797151,174.71983551979065],
			description:'Info',
			iconImage:'assets/info.svg'
		},
	];
	_(services).each(function(service){

		let serviceIcon = L.icon({
									iconUrl:service.iconImage,
									iconSize:[40,40]
								});

		let marker = L.marker(service.latlng,{icon:serviceIcon}).addTo(map);
		marker.bindPopup('<div>'+service.description+'<div>')

	});

	let animals = [
		{
			latlng:[-36.862677904842414,174.71918642520905],
			description:'tiger',
			iconImage:'assets/tiger.svg'
		},
		{
			latlng:[-36.86249335120099,174.71907377243042],
			description:'tiger',
			iconImage:'assets/tiger.svg'
		},
		{
			latlng:[-36.8639740597192,174.7207796573639],
			description:'giraffe',
			iconImage:'assets/giraffe.svg'
		},
		{
			latlng:[-36.86391826542568,174.7203880548477],
			description:'zebra',
			iconImage:'assets/zebra.svg'
		},
		{
			latlng:[-36.86303413502927,174.71930444240567],
			description:'redpanda',
			iconImage:'assets/redpanda.svg'
		},
		{
			latlng:[-36.8635148285526,174.72153067588806],
			description:'rhinoceros',
			iconImage:'assets/rhinoceros.svg'
		},
		{
			latlng:[-36.863768049817594,174.72062945365906],
			description:'ostrich',
			iconImage:'assets/ostrich.svg'
		},
		{
			latlng:[-36.86293542080647,174.72201883792877],
			description:'cheetah',
			iconImage:'assets/cheetah.svg'
		},
		{
			latlng:[-36.863287357887216,174.72216367721555],
			description:'baboon',
			iconImage:'assets/baboon.svg'
		},
		{
			latlng:[-36.86403414583589,174.72237825393677],
			description:'elephant',
			iconImage:'assets/elephant.svg'
		},
		{
			latlng:[-36.86398693531961,174.72280204296112],
			description:'elephant',
			iconImage:'assets/elephant.svg'
		},
		{
			latlng:[-36.86287533382581,174.7207260131836],
			description:'otter',
			iconImage:'assets/otter.svg'
		},


		
	];
	_(animals).each(function(animal){

		let animalIcon = L.icon({
									iconUrl:animal.iconImage,
									iconSize:[40,40]
								});

		let marker = L.marker(animal.latlng,{icon:animalIcon}).addTo(map);
		marker.bindPopup('<div>'+animal.description+'<div>')

	});

	// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VtaW5oYSIsImEiOiJjajZsZ3J2eXcxcmRoMnhtcW1ndDk1bDFoIn0.PpGjhQLuoYSwFYEMSaIw1g').addTo(map);

	L.geoJSON(areas, {
	    style: function(feature) {
	  
	    	if( typeof (feature.properties.color) != 'undefined' ){
	    		return {color: feature.properties.color,weight:0};  
	    	}else if( typeof (feature.properties.stroke) != 'undefined' ){
	    		return {color: feature.properties.stroke,fillOpacity: feature.properties.fillOpacity, weight:10};
	    	}else{
	    		return {stroke:'red',weight:5};  
	    	}
	                
	    },
	    onEachFeature: function(feature, layer){

	    	if(typeof(feature.properties.name) != 'undefined'){
	    		console.log(feature)
	    		let popup = L.popup({
					closeButton:false,
					closeOnClick: false,
					className: 'popup-style',
					offset:[0,0]
				})

				.setLatLng(feature.properties.latlng)
				.setContent(feature.properties.name);
				

				layer.on('click',function(){

					if(map.hasLayer(popup)){
						//hide it
						map.closePopup(popup);
					}else{
						//show it
						map.addLayer(popup);
					}

				});

	    	}

	    }
	}).addTo(map);

});