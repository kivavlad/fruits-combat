class WebSocketService {
  private coinsSocket: WebSocket | null = null;
  private energySocket: WebSocket | null = null;
  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  connectCoinsGain(onLoad: () => void) {
    this.coinsSocket = new WebSocket(`ws://127.0.0.1:8002/ws/coins_gain/${this.userId}/`);

    this.coinsSocket.onopen = () => {
      console.log("connected");
    }

    this.coinsSocket.onmessage = (e) => {
      console.log(e.data);
      onLoad(); 
    }

    this.coinsSocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    }
  }

  connectEnergyGain(onLoad: () => void) {
    this.energySocket = new WebSocket(`ws://127.0.0.1:8002/ws/energy_gain/${this.userId}/`);

    this.energySocket.onopen = () => {
      console.log("connected");
    }

    this.energySocket.onmessage = (e) => {
      console.log(e.data);
      onLoad();
    }

    this.energySocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    }
  }
}

export default WebSocketService;