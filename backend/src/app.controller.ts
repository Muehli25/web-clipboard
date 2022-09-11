import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Transfer } from './model/transfer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getClipboard(): string {
    return this.appService.getClipboard();
  }

  @Post()
  setClipboard(@Body() transferDto: Transfer): string {
    console.log(transferDto)
    return this.appService.setClipboard(transferDto.value);
  }

 // @Delete()
 // deleteClipboard(@Body() clipboard: ClipboardDTO): string {
 //   return this.appService.setClipboard(clipboard.text);
 // }
}
