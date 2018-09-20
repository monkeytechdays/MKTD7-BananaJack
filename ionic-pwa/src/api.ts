import { Player, Room, Action } from './model'

class BackendApi {

    constructor(readonly url: string) { }

    private handle<T>(res: Response): Promise<T> {
        if (res.ok) {
            return res.json();
        } else {
            return res.text()
                .then(msg => Promise.reject(msg));
        }
    }

    private getJson<T>(uri: string): Promise<T> {
        return fetch(this.url + uri)
            .then(res => this.handle<T>(res));
    };

    private postJson<T>(uri: string, json: any): Promise<T> {
        const request: RequestInit = {
            method: 'POST',
            body: JSON.stringify(json)
        };
        return fetch(this.url + uri, request)
            .then(res => this.handle<T>(res));
    };

    // Auth
    login(name: string): Promise<Player> {
        return this.postJson('/api/auth/login', { name });
    }

    logout(playerId: string): Promise<Player> {
        return this.postJson('/api/auth/logout', { playerId });
    }

    // Room
    getRooms(): Promise<Room[]> {
        return this.getJson('/api/room');
    }

    join(roomId: number, playerId: string): Promise<Room> {
        return this.postJson<Room>('/api/room/join', { roomId, playerId });
    }

    leave(roomId: number, playerId: string): Promise<Room> {
        return this.postJson('/api/room/leave', { roomId, playerId })
    }

    action(roomId: number, playerId: string, action: Action): Promise<Room> {
        return this.postJson('/api/room/move', { roomId, playerId, action })
    }
}

export default new BackendApi('http://ilaborie.org:9898');
