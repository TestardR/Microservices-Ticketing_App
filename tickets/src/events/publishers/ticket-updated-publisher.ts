import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketingapp/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
