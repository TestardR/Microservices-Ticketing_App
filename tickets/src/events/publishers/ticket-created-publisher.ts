import { Publisher, Subjects, TicketCreatedEvent } from '@ticketingapp/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
