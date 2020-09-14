var blog_list = new Vue({
	el: '#js-grid-list',
	data: {
		// The layout mode, possible values are "grid" or "list".
		layout: 'grid',

		blog_posts: [{
			title: 'La mansión de El príncipe de Bel Air se puede alquilar en Airbnb',
			url: 'https://elpais.com/gente/2020-09-14/la-mansion-de-el-principe-de-bel-air-se-puede-alquilar-en-airbnb.html',
			image: 'https://imagenes.elpais.com/resizer/kELY_waYlVWcgNM3gb_yUPbBd5Y=/1500x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/U6CVYOQMCFGYJJIK2NUEK26LMA.jpg',
			number: 9
		}, {
			title: 'Will Smith comparte imágenes del reencuentro de The Fresh Prince of Bel-Air',
			url: 'https://www.cnet.com/es/noticias/will-smith-reencuentro-the-fresh-prince-of-bel-air-fotos/',
			image: 'https://cnet2.cbsistatic.com/img/LUz4vz3UePl-mdAWe9H-JCs1Ry8=/940x0/2020/09/11/27c4f97a-5687-4923-928d-449a608bfc23/unnamed.jpg',
			number: 7
		}, {
			title: '007: Conoce a las mejores Chicas Bond de la franquicia',
			url: 'https://www.tonica.la/cine/007-Conoce-a-las-mejores-Chicas-Bond-de-la-franquicia-20200910-0010.html',
			image: 'https://www.tonica.la/__export/1599770751381/sites/debate/img/2020/09/10/diana_rigg-tracy_di_vicenzo-james_bond-bond_girls_1.jpg_1074402577.jpg',
			number: 2
		}, {
			title: 'El trailer final de James Bond, ‘007: No Time to Die’, revela detalles del último villano al que Daniel Craig se enfrentará',
			url: 'https://hipertextual.com/2020/09/trailer-final-james-bond-007-no-time-to-die-con-daniel-craig',
			image: 'https://hipertextual.com/files/2019/07/hipertextual-primera-imagen-oficial-bond-25-2019188800.jpg',
			number: 4
		}, {
			title: 'Travis Scott lanza su propia hamburguesa en McDonalds',
			url: 'https://okdiario.com/happyfm/travis-scott-lanza-propia-hamburguesa-mcdonalds-6138758',
			image: 'https://okdiario.com/img/2020/09/14/travis-scott-655x368.jpg',
			number: 1
		}, {
			title: 'Llegan las nuevas “Yeezy” de Kanye West para Adidas: por sorteo y a través de App',
			url: 'https://fashionunited.es/noticias/moda/llegan-las-nuevas-yeezy-de-kanye-west-para-adidas-por-sorteo-y-a-traves-de-app/2020081933451',
			image: 'https://fashionunited.es/images/202008/r/810/24Lleganop1.jpg',
			number: 6
		}]
	}
});