import { Injectable, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  clipboard: string = ""

  getClipboard(): string {
    let result = this.clipboard
    this.deleteClipboard()
    return result;
  }

  setClipboard(clipboard: string):string{
    console.log(clipboard)
    this.clipboard = clipboard
    // delete after 3 mins if the clipboard is not retrieved.
    this.addTimeout("Delete Clipboard", 180000)
    return this.clipboard;
  }

  deleteClipboard(): void {
    this.clipboard = ""
  }

  addTimeout(name: string, milliseconds: number) {
    const callback = () => {
      this.logger.log(`Timeout deleted!`);
      this.deleteTimeout(name)
      this.deleteClipboard()
    };
  
    const timeout = setTimeout(callback, milliseconds);
    this.schedulerRegistry.addTimeout(name, timeout);
  }

  deleteTimeout(name: string) {
    this.schedulerRegistry.deleteTimeout(name);
    this.logger.log(`Timeout ${name} deleted!`);
  }
}
