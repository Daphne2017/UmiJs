import dynamic from 'umi/dynamic';
const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
const Ucenter = dynamic({
  loader: async function() {
    await delay(/* 1s */1000);
    return () => <div>I will render after 1s</div>;
  },
});
export default Ucenter;