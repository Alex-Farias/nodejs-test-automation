module.exports = () => {
  describe('API Endpoints', () => {
    it('should return a list of items', async () => {
      const response = await fetch('http://localhost:3000/api/items');
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toBeInstanceOf(Array);
    });

    it('should create a new item', async () => {
      const newItem = { name: 'Test Item' };
      const response = await fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      const data = await response.json();
      expect(response.status).toBe(201);
      expect(data.name).toBe(newItem.name);
    });

    it('should return a single item', async () => {
      const response = await fetch('http://localhost:3000/api/items/1');
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toHaveProperty('name');
    });

    it('should update an existing item', async () => {
      const updatedItem = { name: 'Updated Item' };
      const response = await fetch('http://localhost:3000/api/items/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data.name).toBe(updatedItem.name);
    });

    it('should delete an item', async () => {
      const response = await fetch('http://localhost:3000/api/items/1', {
        method: 'DELETE',
      });
      expect(response.status).toBe(204);
    });
  });
};