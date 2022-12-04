import styled from "styled-components";

export const ColumnWrapper = styled.div`
    padding: 10px 15px;
    background: #333333;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    overflow-y: auto;

    width: 200px;
    max-height: 600px;

    text-align: center;

    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;
