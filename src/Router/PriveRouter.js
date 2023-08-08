
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
const PriveRouter = (props) => {
    const user = useSelector(state => state.user.count)
    if (user && !user.auth) {
        return (
            <>
                <Alert variant="danger">
                    <Alert.Heading>You can login user!</Alert.Heading>
                    <p>
                        Error you need login user of manager !
                    </p>
                </Alert>
            </>
        )
    }
    return (
        <>
            {props.children}

        </>
    )




}
export default PriveRouter;