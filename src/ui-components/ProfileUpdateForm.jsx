/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Profile } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProfileUpdateForm(props) {
  const {
    id: idProp,
    profile,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    name: "",
    isKids: false,
    imagePath: "",
    isPrimary: false,
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [name, setName] = React.useState(initialValues.name);
  const [isKids, setIsKids] = React.useState(initialValues.isKids);
  const [imagePath, setImagePath] = React.useState(initialValues.imagePath);
  const [isPrimary, setIsPrimary] = React.useState(initialValues.isPrimary);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = profileRecord
      ? { ...initialValues, ...profileRecord }
      : initialValues;
    setEmail(cleanValues.email);
    setName(cleanValues.name);
    setIsKids(cleanValues.isKids);
    setImagePath(cleanValues.imagePath);
    setIsPrimary(cleanValues.isPrimary);
    setErrors({});
  };
  const [profileRecord, setProfileRecord] = React.useState(profile);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Profile, idProp) : profile;
      setProfileRecord(record);
    };
    queryData();
  }, [idProp, profile]);
  React.useEffect(resetStateValues, [profileRecord]);
  const validations = {
    email: [{ type: "Required" }],
    name: [{ type: "Required" }],
    isKids: [{ type: "Required" }],
    imagePath: [],
    isPrimary: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          email,
          name,
          isKids,
          imagePath,
          isPrimary,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Profile.copyOf(profileRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProfileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              name,
              isKids,
              imagePath,
              isPrimary,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name: value,
              isKids,
              imagePath,
              isPrimary,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <SwitchField
        label="Is kids"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isKids}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              email,
              name,
              isKids: value,
              imagePath,
              isPrimary,
            };
            const result = onChange(modelFields);
            value = result?.isKids ?? value;
          }
          if (errors.isKids?.hasError) {
            runValidationTasks("isKids", value);
          }
          setIsKids(value);
        }}
        onBlur={() => runValidationTasks("isKids", isKids)}
        errorMessage={errors.isKids?.errorMessage}
        hasError={errors.isKids?.hasError}
        {...getOverrideProps(overrides, "isKids")}
      ></SwitchField>
      <TextField
        label="Image path"
        isRequired={false}
        isReadOnly={false}
        value={imagePath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              name,
              isKids,
              imagePath: value,
              isPrimary,
            };
            const result = onChange(modelFields);
            value = result?.imagePath ?? value;
          }
          if (errors.imagePath?.hasError) {
            runValidationTasks("imagePath", value);
          }
          setImagePath(value);
        }}
        onBlur={() => runValidationTasks("imagePath", imagePath)}
        errorMessage={errors.imagePath?.errorMessage}
        hasError={errors.imagePath?.hasError}
        {...getOverrideProps(overrides, "imagePath")}
      ></TextField>
      <SwitchField
        label="Is primary"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPrimary}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              email,
              name,
              isKids,
              imagePath,
              isPrimary: value,
            };
            const result = onChange(modelFields);
            value = result?.isPrimary ?? value;
          }
          if (errors.isPrimary?.hasError) {
            runValidationTasks("isPrimary", value);
          }
          setIsPrimary(value);
        }}
        onBlur={() => runValidationTasks("isPrimary", isPrimary)}
        errorMessage={errors.isPrimary?.errorMessage}
        hasError={errors.isPrimary?.hasError}
        {...getOverrideProps(overrides, "isPrimary")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || profile)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || profile) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
