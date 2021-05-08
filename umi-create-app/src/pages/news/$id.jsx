import router from 'umi/router';

function News(props) {
    const {match:{params}} = props
    console.log(123,props);
  return (
    <div>
     UserId:{params.id}
    
    </div>
  );

}

export default News;