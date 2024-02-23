async function makeGetRequest(): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000/articles');
      if (!response.ok) {
        throw new Error(`GET request failed: ${response.statusText}`);
      }
      const data = await response.json();
      document.getElementById('result')!.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('GET request failed to reach the server or error in response.', error);
    }
  }

  async function makePostRequest(): Promise<void> {
    const title = (document.getElementById('post-title') as HTMLInputElement).value;
    const article = (document.getElementById('post-article') as HTMLInputElement).value;
    const data = JSON.stringify({ title, article });
  
    try {
      const response = await fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });
  
      if (!response.ok) {
        throw new Error(`POST request failed: ${response.statusText}`);
      }
      const responseData = await response.json();
      document.getElementById('result')!.innerHTML = JSON.stringify(responseData, null, 2);
    } catch (error) {
      console.error('POST request failed to reach the server or error in response.', error);
    }
  }

  async function makePutRequest(): Promise<void> {
    const id = (document.getElementById('put-id') as HTMLInputElement).value;
    const title = (document.getElementById('put-title') as HTMLInputElement).value;
    const article = (document.getElementById('put-article') as HTMLInputElement).value;
    const data = JSON.stringify({ title, article });
  
    try {
      const response = await fetch(`http://localhost:3000/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });
  
      if (!response.ok) {
        throw new Error(`PUT request failed: ${response.statusText}`);
      }
      const responseData = await response.json();
      document.getElementById('result')!.innerHTML = JSON.stringify(responseData, null, 2);
    } catch (error) {
      console.error('PUT request failed to reach the server or error in response.', error);
    }
  }

  async function makeDeleteRequest(): Promise<void> {
    const id = (document.getElementById('delete-id') as HTMLInputElement).value;
    if (!id) {
      alert('Please enter an ID to delete.');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/articles/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`DELETE request failed: ${response.statusText}`);
      }
      document.getElementById('result')!.innerHTML = 'Resource deleted successfully';
    } catch (error) {
      console.error('DELETE request failed to reach the server or error in response.', error);
      document.getElementById('result')!.innerHTML = 'Failed to reach the server.';
    }
  }
  
