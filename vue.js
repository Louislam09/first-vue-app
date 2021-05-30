var app = new Vue({
	el: '#app',
	data: {
		anime: '',
        selectedAnime: null,
        isEditting: false,
		animes: JSON.parse(localStorage.ANIME_LIST||`[]`) 
	},
	methods: {
		addItem() {
            if(!this.anime) return
            if(this.isEditting) {
                this.updateItem() 
                return
            };
			this.animes.push({ name: this.anime });
			localStorage.ANIME_LIST = JSON.stringify(this.animes)
            this.anime = ""
		},
        deleteItem(index) {
            this.animes = this.animes.filter(item => item != this.animes[index]);
            localStorage.ANIME_LIST = JSON.stringify(this.animes)
        },
        editItem(index) {
            this.anime = this.animes[index].name;
            this.selectedAnime = index;
            this.isEditting = true;
        },
        updateItem() {
            this.animes[this.selectedAnime].name = this.anime;
            localStorage.ANIME_LIST = JSON.stringify(this.animes)
            this.selectedAnime = null;
			this.anime = ""
            this.isEditting = false;

        },
        getAnimes(){
            const animes = JSON.parse(localStorage.ANIME_LIST) 
            return  animes ? animes : []
        }
	}
});
