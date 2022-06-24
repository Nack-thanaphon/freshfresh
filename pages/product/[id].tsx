function user({ users }) {
  return (
    <>
      <div key={users.id}>
        <p>{users.name}</p>
      </div>
    </>
  );
}
export default user;

export async function getStaticPaths() {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await resp.json();

  const paths = data.map((user) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await resp.json();

  return {
    props: {
      users: data,
    },
  };
}
