<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Entre em Contato</h2>
        <p class="section-subtitle">Solicite um orçamento gratuito para nossas soluções de segurança</p>
      </div>
      <div class="contact-grid">
        <!-- Contact Info -->
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
              <h4>Telefone / WhatsApp</h4>
              <p v-for="phone in contactInfo.phones" :key="phone">{{ phone }}</p>
              <a 
                :href="`https://wa.me/${contactInfo.whatsapp}`" 
                class="whatsapp-link" 
                target="_blank"
              >
                <i class="fab fa-whatsapp"></i> Fale conosco no WhatsApp
              </a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h4>E-mail</h4>
              <p v-for="email in contactInfo.emails" :key="email">{{ email }}</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
              <h4>Endereço</h4>
              <p>{{ contactInfo.address.street }}</p>
              <p>{{ contactInfo.address.city }}</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="contact-details">
              <h4>Horário</h4>
              <p>{{ contactInfo.hours.weekdays }}</p>
              <p>{{ contactInfo.hours.emergency }}</p>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <input 
              v-model="form.name" 
              type="text" 
              placeholder="Seu nome" 
              required
              :class="{ error: errors.name }"
            >
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>
          
          <div class="form-group">
            <input 
              v-model="form.email" 
              type="email" 
              placeholder="Seu e-mail" 
              required
              :class="{ error: errors.email }"
            >
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
          
          <div class="form-group">
            <input 
              v-model="form.phone" 
              type="tel" 
              placeholder="Seu telefone"
              @input="formatPhone"
            >
          </div>
          
          <div class="form-group">
            <select v-model="form.service" required :class="{ error: errors.service }">
              <option value="">Selecione um serviço</option>
              <option value="portarias">Portarias e Controle de Acesso</option>
              <option value="cftv">CFTV e Monitoramento</option>
              <option value="alarmes">Alarmes Monitorados</option>
              <option value="rastreamento">Rastreamento Veicular</option>
              <option value="residencial">Segurança Residencial</option>
              <option value="empresarial">Segurança Empresarial</option>
            </select>
            <span v-if="errors.service" class="error-message">{{ errors.service }}</span>
          </div>
          
          <div class="form-group">
            <textarea 
              v-model="form.message" 
              placeholder="Sua mensagem" 
              rows="4" 
              required
              :class="{ error: errors.message }"
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>
          
          <button 
            type="submit" 
            class="btn btn-gold btn-full"
            :disabled="isSubmitting"
            :class="{ loading: isSubmitting }"
          >
            <span v-if="!isSubmitting">Enviar Mensagem</span>
            <span v-else>
              <i class="fas fa-spinner fa-spin"></i> Enviando...
            </span>
          </button>
          
          <!-- Success/Error Messages -->
          <transition name="fade">
            <div v-if="submitMessage" class="submit-message" :class="submitMessageType">
              <i :class="submitMessageType === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
              {{ submitMessage }}
            </div>
          </transition>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'ContactSection',
  props: {
    contactInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['submit-form'],
  setup(props, { emit }) {
    const isSubmitting = ref(false)
    const submitMessage = ref('')
    const submitMessageType = ref('')
    
    const form = reactive({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
    
    const errors = reactive({
      name: '',
      email: '',
      service: '',
      message: ''
    })
    
    const validateForm = () => {
      let isValid = true
      
      // Reset errors
      Object.keys(errors).forEach(key => {
        errors[key] = ''
      })
      
      // Validate name
      if (!form.name || form.name.length < 2) {
        errors.name = 'Nome deve ter pelo menos 2 caracteres'
        isValid = false
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.email || !emailRegex.test(form.email)) {
        errors.email = 'Por favor, insira um e-mail válido'
        isValid = false
      }
      
      // Validate service
      if (!form.service) {
        errors.service = 'Por favor, selecione um serviço'
        isValid = false
      }
      
      // Validate message
      if (!form.message || form.message.length < 10) {
        errors.message = 'Mensagem deve ter pelo menos 10 caracteres'
        isValid = false
      }
      
      return isValid
    }
    
    const formatPhone = (event) => {
      let value = event.target.value.replace(/\D/g, '')
      if (value.length >= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
      } else if (value.length >= 7) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
      } else if (value.length >= 3) {
        value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2')
      }
      form.phone = value
    }
    
    const handleSubmit = async () => {
      if (!validateForm()) {
        return
      }
      
      isSubmitting.value = true
      submitMessage.value = ''
      
      try {
        const result = await emit('submit-form', { ...form })
        
        if (result && result.success) {
          submitMessage.value = result.message || 'Mensagem enviada com sucesso!'
          submitMessageType.value = 'success'
          
          // Reset form
          Object.keys(form).forEach(key => {
            form[key] = ''
          })
        } else {
          throw new Error('Erro no envio')
        }
      } catch (error) {
        submitMessage.value = 'Erro ao enviar mensagem. Tente novamente.'
        submitMessageType.value = 'error'
      } finally {
        isSubmitting.value = false
        
        // Clear message after 5 seconds
        setTimeout(() => {
          submitMessage.value = ''
        }, 5000)
      }
    }
    
    return {
      form,
      errors,
      isSubmitting,
      submitMessage,
      submitMessageType,
      formatPhone,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.error {
  border-color: #ef4444 !important;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.submit-message.success {
  background: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.submit-message.error {
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

.btn.loading {
  opacity: 0.7;
  cursor: not-allowed;
}

.whatsapp-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #25D366;
  text-decoration: none;
  font-weight: 500;
  margin-top: 0.5rem;
  transition: color 0.3s ease;
}

.whatsapp-link:hover {
  color: #128C7E;
}
</style>
