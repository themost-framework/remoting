import { RemoteContext } from '@themost/remoting';

describe('RemoteContext', () => {
    it('should create instance', () => {
        const context = new RemoteContext();
        expect(context).toBeTruthy()
    })
})