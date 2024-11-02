"use client";

import DeliverButton from "@/components/common/button";
import DeliverInput from "@/components/common/input";
import { useMessengerRegistration } from "@/hook/use-messenger-registration";
import MessengerSelector from "./register/select-container";

const RegisterTab = () => {
    const {
        control,
        handleSubmit,
        register,
        onSubmit,
        selectedMessengerType,
        onMessengerTypeChange,
    } = useMessengerRegistration();

    return (
        <div className="min-h-[648px] flex-justify">
            <form onSubmit={handleSubmit(onSubmit)}>
                <MessengerSelector
                    register={register}
                    selectedMessengerType={selectedMessengerType}
                    onMessengerTypeChange={onMessengerTypeChange}
                />
                <div className="mb-10">
                    <DeliverInput
                        name="webhookUrl"
                        control={control}
                        title="웹훅 URL 입력"
                        placeholder="ex) https://discord.com/api/webhooks/12745805631387/s-AC"
                    />
                </div>
                <DeliverButton
                    label="등록하기"
                    length="full"
                    onClick={handleSubmit(onSubmit)}
                    isModal={false}
                />
            </form>
        </div>
    );
};
export default RegisterTab;
