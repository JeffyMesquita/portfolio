'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { scrollAnimations } from '@/styles';
import { contactFormSchema, ContactFormSchema } from './contactFormSchema';
import { MaskProvider } from '@/utils';
import toast from 'react-hot-toast';
import { TextInput } from '../TextInput';
import { ChangeEvent } from 'react';
import { MailIcon, PhoneIcon, SendIcon, User2Icon } from 'lucide-react';
import { TextArea } from '../TextArea';
import { Button } from '../Button';

const defaultValues: ContactFormSchema = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [refForm, inViewForm] = useInView({ triggerOnce: true });
  const [refInput1, inViewInput1] = useInView({ triggerOnce: true });
  const [refInput2, inViewInput2] = useInView({ triggerOnce: true });
  const [refInput3, inViewInput3] = useInView({ triggerOnce: true });
  const [refInput4, inViewInput4] = useInView({ triggerOnce: true });
  const [refInput5, inViewInput5] = useInView({ triggerOnce: true });
  const [ref, inView] = useInView({ triggerOnce: true });

  const form = useForm<ContactFormSchema>({
    defaultValues,
    resolver: zodResolver(contactFormSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = form;

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: ContactFormSchema) => {
    const dataToSend = {
      name: data.name,
      phone: MaskProvider.unmask(data.phone),
      email: data.email,
      subject: data.subject,
      message: data.message,
    } as ContactFormSchema;

    try {
      await toast.promise(
        fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        }),
        {
          loading: 'Enviando mensagem...',
          success: 'Mensagem enviada com sucesso!',
          error: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
        },
      );

      reset();
    } catch (error) {
      console.error(error);
      toast.error('Erro ao enviar mensagem. Tente novamente mais tarde.');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex h-full w-full max-w-4xl flex-col gap-4 pb-2"
      ref={refForm}
      initial="hidden"
      animate={inViewForm ? 'visible' : 'hidden'}
    >
      <div className="flex flex-col gap-2 lg:flex-row">
        <motion.span
          className="w-full flex-1"
          variants={scrollAnimations.fadeInLeft}
          initial="hidden"
          animate={inViewInput1 ? 'visible' : 'hidden'}
          ref={refInput1}
        >
          <TextInput.Root className="w-full flex-1">
            <TextInput.Label description="Nome">
              <TextInput.Content>
                <TextInput.Icon>
                  <User2Icon className="h-4 w-4" />
                </TextInput.Icon>
                <TextInput.Input
                  autoComplete="off"
                  type="name"
                  register={{
                    action: register,
                    name: 'name',
                  }}
                  placeholder="Digite seu nome"
                  disabled={isLoading}
                />
              </TextInput.Content>
              <TextInput.Errors
                isInvalid={!!errors.name}
                description={errors.name?.message}
              />
            </TextInput.Label>
          </TextInput.Root>
        </motion.span>
        <motion.span
          className="w-full lg:w-1/2"
          variants={scrollAnimations.fadeInLeft}
          initial="hidden"
          animate={inViewInput2 ? 'visible' : 'hidden'}
          ref={refInput2}
        >
          <TextInput.Root className="w-full">
            <TextInput.Label description="Telefone">
              <TextInput.Content>
                <TextInput.Icon>
                  <PhoneIcon className="h-4 w-4" />
                </TextInput.Icon>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextInput.Input
                      autoComplete="off"
                      type="text"
                      value={value || ''}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const rawValue = e.target.value;
                        const maskedValue =
                          MaskProvider.applyPhoneMask(rawValue);
                        onChange(maskedValue);
                        setValue('phone', maskedValue, {
                          shouldValidate: true,
                        });
                      }}
                      placeholder="Digite seu telefone"
                    />
                  )}
                />
              </TextInput.Content>
              <TextInput.Errors
                isInvalid={!!errors.phone}
                description={errors.phone?.message}
              />
            </TextInput.Label>
          </TextInput.Root>
        </motion.span>
      </div>

      <div className="flex flex-col gap-2 lg:flex-row">
        <motion.span
          className="w-full"
          variants={scrollAnimations.fadeInLeft}
          initial="hidden"
          animate={inViewInput3 ? 'visible' : 'hidden'}
          ref={refInput3}
        >
          <TextInput.Root className="w-full">
            <TextInput.Label description="E-mail">
              <TextInput.Content>
                <TextInput.Icon>
                  <MailIcon className="h-4 w-4" />
                </TextInput.Icon>
                <TextInput.Input
                  autoComplete="off"
                  type="email"
                  register={{
                    action: register,
                    name: 'email',
                  }}
                  placeholder="Digite seu e-mail"
                  disabled={isLoading}
                />
              </TextInput.Content>
              <TextInput.Errors
                isInvalid={!!errors.email}
                description={errors.email?.message}
              />
            </TextInput.Label>
          </TextInput.Root>
        </motion.span>

        <motion.span
          className="w-full"
          variants={scrollAnimations.fadeInLeft}
          initial="hidden"
          animate={inViewInput4 ? 'visible' : 'hidden'}
          ref={refInput4}
        >
          <TextInput.Root className="w-full">
            <TextInput.Label description="Assunto">
              <TextInput.Content>
                <TextInput.Icon>
                  <SendIcon className="h-4 w-4" />
                </TextInput.Icon>
                <TextInput.Input
                  autoComplete="off"
                  type="text"
                  register={{
                    action: register,
                    name: 'subject',
                  }}
                  placeholder="Digite o assunto"
                  disabled={isLoading}
                />
              </TextInput.Content>
              <TextInput.Errors
                isInvalid={!!errors.subject}
                description={errors.subject?.message}
              />
            </TextInput.Label>
          </TextInput.Root>
        </motion.span>
      </div>

      <motion.span
        variants={scrollAnimations.fadeInLeft}
        initial="hidden"
        animate={inViewInput5 ? 'visible' : 'hidden'}
        ref={refInput5}
      >
        <TextArea.Root className="w-full">
          <TextArea.Label description="Mensagem">
            <TextArea.Content>
              <TextArea.Input
                rows={5}
                register={{
                  action: register,
                  name: 'message',
                }}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  setValue('message', e.target.value, {
                    shouldValidate: true,
                  });
                }}
                placeholder="Digite sua mensagem..."
                disabled={isLoading}
                aria-placeholder="Digite sua mensagem..."
              />
            </TextArea.Content>
            <TextArea.Error
              isInvalid={!!errors.message}
              description={errors.message?.message}
            />
          </TextArea.Label>
        </TextArea.Root>
      </motion.span>

      <motion.footer
        className="mt-4 flex w-full md:justify-end"
        variants={scrollAnimations.fadeInLeft}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        ref={ref}
      >
        <Button
          type="submit"
          isLoading={isLoading}
          loadingText="Enviando..."
          className="w-full lg:w-1/2"
        >
          Enviar
        </Button>
      </motion.footer>
    </motion.form>
  );
}
