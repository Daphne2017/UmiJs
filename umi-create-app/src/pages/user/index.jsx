import router from 'umi/router';

function User(props) {
    function goToListPage() {
        router.push('/');
      }
  return (
    <div>
     User:严燕姗拉拉
     <button onClick={goToListPage}>回到首页</button>
    </div>
  );

}

export default User;