import {useCallback, useEffect} from "react";
import {useCoins} from "../store";
import {userId} from "../api/api";
import WebSocketService from "../api/socket";
import Container from "../components/container";
import Score from "../components/score";
import Layout from "../components/layout";
import Clicker from "../components/clicker";
import Energy from "../components/energy";

const App: React.FC = () => {
  const socket = new WebSocketService(String(userId));
  const store = useCoins(state => state);

  const callbacks = {
    setCoins: useCallback((counter: number) => {
      store.send({
        coins: store.coins + counter,
        energy: store.current_energy - 1
      })
      socket.connectCoinsGain(() => store.load());
    }, [store, socket]),
  }

  useEffect(() => {
    store.load();
  }, [])

  useEffect(() => {
    if (store.max_energy > store.current_energy) {
      const interval = setInterval(() => {
        store.send({
          coins: store.coins,
          energy: store.current_energy + 1
        })
        store.load();
      }, 1000);
  
      return () => {
        clearInterval(interval);
      }
    }
  }, [store.current_energy, store.max_energy])

  return (
    <Container>
      <Score score={store.coins}/>
      <Layout>
        <Clicker setCoins={callbacks.setCoins} energy={store.current_energy}/>
        <Energy maxEnergy={store.max_energy} currentEnergy={store.current_energy}/>
      </Layout>
    </Container>
  )
}

export default App
