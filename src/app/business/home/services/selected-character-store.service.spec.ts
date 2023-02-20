import { SelectedCharacterStoreService } from "./selected-character-store.service";

describe('SelectedCharacterStoreService', () => {
  let service: SelectedCharacterStoreService;
  beforeEach(() => {
    service = new SelectedCharacterStoreService();
  });

  it('#getObservableValue should return "string | null" from observable',
    (done: DoneFn) => {
      service.selectedCharacterId$.subscribe((value: string | null) => {
        expect(value).toBe(null);
        done();
      });
    });
});
