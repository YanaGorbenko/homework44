import styled from '@emotion/styled';
export const BookList = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.li`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
`;

export const BookTitle = styled.h3`
  color: #2c3e50;
  font-size: 20px;
  margin-bottom: 12px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 8px;
`;

export const BookText = styled.p`
  text-align: left;
  padding: 0;
  margin: 8px 0;
  color: #555;
  font-size: 14px;
`;

export const Span = styled.span`
  font-weight: 600;
  color: #2c3e50;
  margin-right: 8px;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 12px;
  transition: background-color 0.2s ease;

  &: hover {
    background-color: #c0392b;
  }
`;
