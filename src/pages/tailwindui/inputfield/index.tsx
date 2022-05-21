import tw from 'twin.macro';
import { InputField, DemoWrapper } from '@/components';

export default function InputFieldPage() {
  return (
    <DemoWrapper>
      <div tw='width[320px] space-y-10'>
        <InputField />
      </div>
    </DemoWrapper>
  );
}
