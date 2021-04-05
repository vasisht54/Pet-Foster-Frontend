import {
    Typography,
  } from "@material-ui/core";

 export default function HeadingFormat(props) {
    return (
        <div>
            <Typography variant="h4">{props.value}</Typography>
        </div>
    );
};