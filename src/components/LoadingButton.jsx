"use client";
import { Button, Spinner } from "@heroui/react";

const LoadingButton = ({ isLoading, children, ...props }) => {
  return (
    <Button
      type="submit"
      isDisabled={isLoading}
      className="bg-emerald-900 w-full text-center text-white"
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <Spinner size="sm" color="white" />
          <span>Please wait...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;