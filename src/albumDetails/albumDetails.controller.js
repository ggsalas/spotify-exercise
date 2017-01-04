class AlbumDetailsController {
  constructor(albumDetailsService) {
    'ngInject';
    this.albumDetailsService = albumDetailsService;
  }

  $onInit() {
      this.albumDetailsService.getAlbumById('7xl50xr9NDkd3i2kBbzsNZ').then((res) => {
          console.log(res);
      });
  }
}

export default AlbumDetailsController;
