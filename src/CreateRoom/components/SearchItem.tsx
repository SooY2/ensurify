import styled from '@emotion/styled';

const SearchItem = ({ title, tag }: { title: string; tag: string }) => {
  return (
    <StContainer>
      <StTitle>{title}</StTitle>
      <StTag>{tag}</StTag>
    </StContainer>
  );
};

export default SearchItem;

const StContainer = styled.div`
  cursor: pointer;

  display: flex;
  gap: 0.5rem;
  align-items: end;

  width: 100%;
  height: 7rem;
  padding: 2rem;

  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.mint};
  }
`;

const StTitle = styled.p`
  overflow: hidden;

  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StTag = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.blue};
  white-space: nowrap;
`;
