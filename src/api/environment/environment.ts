const create = async (request: { name: string, description: string }) => {
  try {
    const res = await fetch('http://localhost:8080/environments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    });
    const result = await res.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};

export const environment = {
  create
};