/**
 * Created by leonardoluisvicario on 28/12/16.
 */
class AlbumDetailsService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    getAlbumById(albumId) {
        return this.$http.get(`/album/${albumId}`);
    }
}

export default AlbumDetailsService;