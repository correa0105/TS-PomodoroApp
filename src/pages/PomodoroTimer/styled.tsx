import styled from 'styled-components';

export const Pomodoro = styled.div`
    background-color: #fff;
    margin: 20px 20px;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);

    h1 {
        font-size: 25px;
        text-align: center;
    }

    div p {
        margin-bottom: .5rem;
    }
`;

export const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
`;
