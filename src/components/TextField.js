import  TextField  from "@mui/material/TextField";

export const TextInput = ({
    name,
    label,
    state,
    onChange,
    multiline,
    rows
}) => {
    const { data, errors } = state

    return (
        <TextField
            label={label}
            fullWidth={true}
            name={name}
            value={data[name]}
            error={errors[name] ? true : false}
            helperText={errors[name]}
            onChange={onChange}
            multiline={multiline}
            rows={rows}  
        />
    )
}