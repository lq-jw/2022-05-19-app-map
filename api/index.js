import axios from "axios";

export const getUbikeInfo = async () => {
   const { data } = await axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json?fbclid=IwAR1JqlvfAWOTK3LTulK1JPqzI4L_ouQFJ0Fk4gVa6VRqn97LrLudhDrYnKY');
   return data;
 };
